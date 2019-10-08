import { Router } from 'express';
import * as passport from 'passport';
import { CreateToken } from '../../utils/security/tokens';

const router = Router();

router.post('/', passport.authenticate('local'), async (req: any, res, next) => {
    try {
        let token = await CreateToken({userid: req.user.id});
        res.json({
            token,
            userid: req.user.id,
            role: req.user.role
        })
        res.json(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

export default router; 