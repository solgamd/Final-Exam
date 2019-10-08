import { Router } from 'express';
import booksRouter from './books';
import categoriesRouter from './categories';
import passport = require('passport');

const router = Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) req.user = user;
        return next();
    })(req, res, next);
})

router.use('/books', booksRouter);
router.use('/categories', categoriesRouter);


export default router; 