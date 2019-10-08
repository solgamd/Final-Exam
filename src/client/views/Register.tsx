import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { json, SetAccessToken } from '../utils/api';


export interface RegisterProps extends RouteComponentProps { }
export interface RegisterState {
    email: string,
    password: string,
    name: string
}

class Register extends React.Component<RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    async handleRegister(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            let result = await json(`/auth/register`, 'POST', this.state);
            SetAccessToken(result.token, { userid: result.userid, role: result.role });
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <div>
                    <form>
                        <input
                            value={this.state.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} />
                        <input
                            value={this.state.password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} />
                        <input
                            value={this.state.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })} />
                    </form>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleRegister(e)}>Register</button>
                </div>
            </div>
        );
    }
};

export default Register;