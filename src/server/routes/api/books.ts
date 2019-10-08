import { Router } from 'express';
import db from '../../db';
import { RequestHandler } from 'express-serve-static-core';

const router = Router();

const isAdmin: RequestHandler = (req: any, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        console.log(req.user);
        return res.sendStatus(401);
    } else {
        return next();
    }
};


router.get('/', async (req, res, next) => {
    try {
        let books = await db.books.getAll();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let [book] = await db.books.getOne(id);
        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});


router.post('/', async (req, res, next) => {
    let newBook = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        categoryid: req.body.categoryid
    }
    try {
        await db.books.insert(newBook);
        res.json('Posted!');
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

router.delete('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        await db.books.remove(id);
        res.json('Deleted!');
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

router.put('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let result = await db.books.edit(req.body, id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

export default router; 