import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let cats = await db.categories.getAll();
        res.json(cats)
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

export default router; 