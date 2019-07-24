import React from "react";
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {
    constructor(prop) {
        super(prop);
        this.signupSubmit = this.signupSubmit.bind(this);
    }
    signupSubmit() {
        this.props.history.push('/login');
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
                    <label>Standard</label>
                    <input type="text"/>
                </p>
                <p>
                    <label>Section</label>
                    <input type="text"/>
                </p>
                <p>
                    <label>Age</label>
                    <input type="text"/>
                </p>
                <input type="button" onClick={this.signupSubmit} value="Enroll" />
            </div>
        );
    }
}

export default withRouter(Signup);