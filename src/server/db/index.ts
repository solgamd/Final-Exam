import * as knex from 'knex';
import config from '../config';

export const knextion = knex(config.knex);

import books from './queries/books';
import categories from './queries/categories';


export default {
    books,
    categories
}