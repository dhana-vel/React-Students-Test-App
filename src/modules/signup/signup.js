import React from "react";
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {
    constructor(prop) {
        super(prop);
        this.signupSubmit = this.signupSubmit.bind(this);
        this.cancelSignup = this.cancelSignup.bind(this);
    }
    cancelSignup() {
        this.props.history.push('/login');
    }
    signupSubmit() {
        
    }

    render() {
        return (
            <div>
                <h3>Student Form</h3>
                <p>
                    <label>Name</label>
                    <input type="text"/>
                </p>
                <p>
                    <label>Password</label>
                    <input type="password"/>
                </p>
                <p>
                    <label>Confirm Password</label>
                    <input type="password"/>
                </p>
                <input type="button" onClick={this.signupSubmit} value="Enroll" />
                <input type="button" onClick={this.cancelSignup} value="Cancel" />
            </div>
        );
    }
}

export default withRouter(Signup);