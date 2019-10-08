import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { IBook } from '../utils/interfaces';
import { json } from '../utils/api';
import { Link } from 'react-router-dom';

export interface BooksProps extends RouteComponentProps { }
export interface BooksState {
    books: IBook[]
}

class Books extends React.Component<BooksProps, BooksState> {
    constructor(props: BooksProps) {
        super(props);
        this.state = {
            books: []
        }
    }

    async componentDidMount() {
        try {
            let books = await json('/api/books');
            this.setState({books});
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
            <div>
                {this.state.books.map(book => (
                    <div key={book.id}>
                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
                        <h3>${book.price}</h3>
                        <h4>{book.name}</h4>
                        <Link to={`/${book.id}/details`}>Details</Link>
                    </div>

                ))}
            </div>
        );
    }
};

export default Books;