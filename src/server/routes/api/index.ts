import { Router } from 'express';
import booksRouter from './books';

const router = Router();

//router.use(passport.authenticate

router.use('/books', booksRouter);


export default router; 