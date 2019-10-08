import { Router } from 'express';
import db from '../../db';
import { hashPassword } from '../../utils/security/password';
import { CreateToken } from '../../utils/security/tokens';


const router = Router();

router.post('/', async (req, res, next) => {
    try {
        let user = { ...req.body };
        user.password = hashPassword(req.body.password);
        let [result]: any = await db.users.insertUser(user.email, user.password, user.name);
        let token = await CreateToken({ userid: result });
        res.json({
            token,
            role: 'admin',
            userid: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

export default router; 