import {knextion as knex} from '../index';

const findOne = (id: number) => knex('tokens').select().limit(1).where({id});

const insertToken = (userid: number) => knex('tokens').insert({userid});

const updateToken = (id: number, token: string) => knex('tokens').update({token}).where({id});


export default {
    findOne,
    insertToken,
    updateToken
}