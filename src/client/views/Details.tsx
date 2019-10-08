import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { IBook } from '../utils/interfaces';
import { json } from '../utils/api';
import { Link } from 'react-router-dom';

export interface DetailsProps extends RouteComponentProps<{ id: string }> { }
export interface DetailsState {
    book: IBook
}

class Details extends React.Component<DetailsProps, DetailsState> {
    constructor(props: DetailsProps) {
        super(props);
        this.state = {
            book: {
                id: 0,
                title: '',
                author: '',
                price: 0,
                categoryid: 0,
                _created: new Date(),
                name: ''
            }
        }
    }

    async componentDidMount() {
        try {
            let id = this.props.match.params.id;
            let book = await json(`/api/books/${id}`)
            this.setState({book});
        } catch (error) {
            console.log(error);
        }
    }


    async handleDelete() {
        let id = this.props.match.params.id;
        try {
            await json(`/api/books/${id}`, 'DELETE');
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const {book} = this.state;
        return (
            <div>
                <h1>Details</h1>
                <div key={book.id}>
                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
                        <h3>${book.price}</h3>
                        <h4>{book.name}</h4>
                        <Link to={`/${book.id}/edit`}><button>Edit</button></Link>
                        <button onClick={() => this.handleDelete()}>Delete</button>
                        <Link to={'/'}><button>Go Back</button></Link>
                    </div>
            </div>
        );
    }
};

export default Details;