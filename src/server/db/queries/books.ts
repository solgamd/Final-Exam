import {knextion as knex} from '../index';

const getAll = () => knex.select('books.*', 'categories.name').from('books').join('categories', 'categories.id', '=', 'books.categoryid');

const getOne = (id: number) => knex.select('books.*', 'categories.name').from('books').join('categories', 'categories.id', '=', 'books.categoryid').whereRaw('books.id = ?', [id]);

export default {
    getAll,
    getOne
}