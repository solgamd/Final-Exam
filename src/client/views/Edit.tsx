import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { json, User } from '../utils/api';

export interface EditProps extends RouteComponentProps<{ id: string }> { }
export interface EditState {
    title: string,
    author: string,
    price: string,
    categoryid: string
}

class Edit extends React.Component<EditProps, EditState> {
    constructor(props: EditProps) {
        super(props);
        this.state = {
            title: '',
            author: '',
            price: '',
            categoryid: ''
        }
    }

    async componentDidMount() {
        if (User && User.role === 'admin') {
            let id = this.props.match.params.id;
            try {
                let book = await json(`/api/books/${id}`);
                this.setState({
                    title: book.title,
                    author: book.author,
                    price: book.price,
                    categoryid: book.categoryid
                })
            } catch (error) {
                console.log(error);
            }
        } else {
            this.props.history.push('/login');
        }
    }

    async handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        let id = this.props.match.params.id;
        try {
            await json(`/api/books/${id}`, 'PUT', this.state);
        } catch (error) {
            console.log(error);
        }
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Edit</h1>
                <form>
                    <input
                        value={this.state.title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })} />
                    <input
                        value={this.state.author}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ author: e.target.value })} />
                    <input
                        value={this.state.price}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ price: e.target.value })} />
                    <input
                        value={this.state.categoryid}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ categoryid: e.target.value })} />
                </form>
                <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleEdit(e)}>Edit</button>
            </div>
        );
    }
};

export default Edit;