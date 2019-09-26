import React from "react";
import { withRouter, Link } from 'react-router-dom';
//import { Button } from 'reactstrap';
//import { Redirect } from "react-router";
//import { Route, Redirect } from 'react-router'

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.loginSubmit = this.loginSubmit.bind(this);
    }
    loginSubmit () {
        this.props.history.push('/dashboard');
        //return <Redirect push to="/list" />;
    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                <p>
                    <label>username</label>
                    <input type = "text" />
                </p>
                <p>
                    <label>password</label>
                    <input type = "password" />
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