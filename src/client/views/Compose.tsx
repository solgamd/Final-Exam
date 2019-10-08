import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { json } from '../utils/api';

export interface ComposeProps extends RouteComponentProps{ }
export interface ComposeState {
    title: string,
    author: string,
    price: string,
    categoryid: string
 }

class Compose extends React.Component<ComposeProps, ComposeState> {
    constructor(props: ComposeProps) {
        super(props);
        this.state = {
           title: '',
           author: '',
           price: '',
           categoryid: ''
        }
    }

    async handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            let result = await json('/api/books', 'POST', this.state);
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div>
                <h1>Compose</h1>
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
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit(e)}>Compose</button>
            </div>
        );
    }
};

export default Compose;