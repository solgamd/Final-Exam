import { knextion as knex } from '../index';

const findOne = (id: number, token: string) => knex('tokens').select().where({ id, token });

const insertToken = (userid: number) => knex('tokens').insert({ userid });

const updateToken = (id: number, token: string) => knex('tokens').update({ token }).where({ id });


export default {
    findOne,
    insertToken,
    updateToken
}