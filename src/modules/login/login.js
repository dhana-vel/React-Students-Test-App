import React from "react";

class Login extends React.Component {
    constructor () {
        super();
        this.loginSubmit = this.loginSubmit.bind(this);
    }
    loginSubmit () {
        console.log("clicked login submit");
    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                <p>
                    <input type = "text" />
                </p>
                <p>
                    <input type = "password" />
                </p>
                <input type = "button" value="Login" onClick = {this.loginSubmit} />
            </div>
        );
    }
}

export default Login;