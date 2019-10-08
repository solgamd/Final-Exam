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
                <h1 className=" row justify-content-center m-3 text-warning">WELCOME TO MY UGLY P.O.S. BOOKSTORE!</h1>
                {this.state.books.map(book => (
                    <div key={book.id}>
                        <h1>{book.title}</h1>
                        <h4>{book.author}</h4>
                        <h5>${book.price}</h5>
                        <h6>{book.name}</h6>
                        <Link to={`/${book.id}/details`}>Details</Link>
                        <h1>....................</h1>
                    </div>

                ))}
            </div>
        );
    }
};

export default Books;