import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { json } from '../utils/api';
import { SetAccessToken } from '../utils/api';

export interface LoginProps extends RouteComponentProps { }
export interface LoginState {
    email: string,
    password: string
}

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    async handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            let result = await json(`/auth/login`, 'POST', this.state);
            SetAccessToken(result.token, { userid: result.userid, role: result.role });
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>
                    <form>
                        <input
                            value={this.state.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} />
                        <input
                            value={this.state.password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} />
                    </form>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleLogin(e)}>Login</button>
                </div>
            </div>
        );
    }
};

export default Login;