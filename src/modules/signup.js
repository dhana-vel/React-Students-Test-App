import React from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Signup extends React.Component {
    constructor(prop) {
        super(prop);
        this.signupSubmit = this.signupSubmit.bind(this);
        this.cancelSignup = this.cancelSignup.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.state = {
            userName: '',
            passWord: ''
        };
    }
    cancelSignup() {
        this.props.history.push('/login');
    }

    signupSubmit() {
        const obj = {
            user_name: this.state.userName,
            user_password: this.state.passWord
        };
        axios.post('http://localhost:4000/school/signup', obj)
        .then(res => {
            this.props.history.push({
                pathname: '/dashboard',
                loginName: this.state.userName
            });
            console.log(res.data);
        });
    }

    onChangeUserName(e) {
        e.preventDefault();
        this.setState({
            userName: e.target.value
        });
    }

    onChangeUserPassword(e) {
        e.preventDefault();
        this.setState({
            passWord: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h3>Enroll</h3>
                <p>
                    <label>Name</label>
                    <input type="text" onChange={this.onChangeUserName}/>
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" onChange={this.onChangeUserPassword} />
                </p>
                {/* <p>
                    <label>Confirm Password</label>
                    <input type="password"/>
                </p> */}
                <input type="button" onClick={this.signupSubmit} value="signup" />
                <input type="button" onClick={this.cancelSignup} value="Cancel" />
            </div>
        );
    }
}

export default withRouter(Signup);