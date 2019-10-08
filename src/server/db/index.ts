import * as knex from 'knex';
import config from '../config';

export const knextion = knex(config.knex);

import books from './queries/books';


export default {
    books
}