
declare interface IBook {
    id: number,
    categoryid: number,
    title: string,
    author: string,
    price: number,
    _created: Date,
    name: string
}

declare interface ICat {
    id: number,
    name: string,
}