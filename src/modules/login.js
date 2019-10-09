import React from "react";
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
//import { Dashboard } from './dashboard';
//import { Button } from 'reactstrap';
//import { Redirect } from "react-router";
//import { Route, Redirect } from 'react-router'

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.onChangeLoginUser = this.onChangeLoginUser.bind(this);
        this.onChangeLoginPassword = this.onChangeLoginPassword.bind(this);
        this.state = {
            login_user: '',
            login_password: ''
        };
    }

    loginSubmit () {
        axios.get('http://localhost:4000/school/user/' + this.state.login_user)
        .then(res => {
            console.log(res);
            this.props.history.push({
                pathname: '/dashboard',
                loginName: this.state.login_user
            });
        });
        //return <Redirect push to="/list" />;
    }

    onChangeLoginUser(e) {
        e.preventDefault();
        this.setState({
            login_user: e.target.value
        });
    }

    onChangeLoginPassword(e) {
        e.preventDefault();
        this.setState({
            login_password: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <p>
                    <label>username</label>
                    <input type = "text" onChange={this.onChangeLoginUser}/>
                </p>
                <p>
                    <label>password</label>
                    <input type = "password" onChange={this.onChangeLoginPassword}/>
                </p>
                {/* <Button onClick={this.loginSubmit}>
                  Login
                </Button> */}
                <p>
                    <input type = "button" value="Login" onClick = {this.loginSubmit} />
                </p>
                <Link to="/signup">Sign up</Link>
            </div>
        );
    }
}

export default withRouter(Login);