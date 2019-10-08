import * as passport from 'passport';
import * as BearerStrategy from 'passport-http-bearer';

import { ValidateToken } from '../utils/security/tokens';
import db from '../db';

passport.use(new BearerStrategy.Strategy(async (token, done) => {
    try {
        let payload: any = await ValidateToken(token);
        let [user]: any = await db.users.findId(payload.userid);
        console.log(user)
        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        done(error);
    }
}));