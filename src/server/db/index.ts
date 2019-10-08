import * as knex from 'knex';
import config from '../config';

export const knextion = knex(config.knex);

import books from './queries/books';
import categories from './queries/categories';
import tokens from './queries/tokens';
import users from './queries/users';


export default {
    books,
    categories,
    tokens,
    users
}