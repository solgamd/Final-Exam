import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Books from './views/Books';
import Compose from './views/Compose';
import Details from './views/Details';
import Edit from './views/Edit';
import Login from './views/Login';
import Register from './views/Register';

export interface IAppProps { }
export interface IAppState { }

class App extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <BrowserRouter>
                <nav>
                    <Link to="/" className="m-2">Books</Link>
                    <Link to="/compose" className="m-2">Compose</Link>
                    <Link to="/:id/edit" className="m-2">Edit</Link>
                    <Link to="/login" className="m-2">Login</Link>
                    <Link to="/register" className="m-2">Register</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={Books} />
                    <Route exact path="/compose" component={Compose} />
                    <Route exact path="/:id/details" component={Details} />
                    <Route exact path="/:id/edit" component={Edit} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;