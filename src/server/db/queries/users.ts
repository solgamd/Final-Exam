import { knextion as knex } from '../index';

const findId = (id: number) => knex('users').select().limit(1).where({ id });

const findEmail = (email: string) => knex('users').select().limit(1).where({ email });

const insertUser = (email: string, password: string, name: string ) => knex('users').insert({email, password, name});


export default {
    findId,
    findEmail,
    insertUser
}