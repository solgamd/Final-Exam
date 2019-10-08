import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import config from '../../config';
import db from '../../db';

export const CreateToken = async (payload: IPayload) => {
    let [tokenid]: any = await db.tokens.insertToken(payload.userid);
    payload.accesstokenid = tokenid;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = jwt.sign(payload, config.auth.secret);
    await db.tokens.updateToken(payload.accesstokenid, token);
    return token;
};

export const ValidateToken = async (token:string) => {
    let payload: IPayload = <IPayload>jwt.decode(token);
    let [accesstokenid] = await db.tokens.findOne(payload.accesstokenid, token);
    if(!accesstokenid) {
        throw new Error('Token is not valid');
    } else {
        return payload;
    }
}
export interface IPayload {
    [key: string]: any;
    userid: number;
    unique?: string;
}