import React, { Component } from 'react';
import Input from '../../Components/input/Input';
import Button from '../../Components/button/Button';
import './Account.scss';

class Account extends Component {
    render() {
        return (
            <div className="Account-container">
                <form className="account-form">
                    <div className="login-text">LOGIN</div>
                    <div>
                        <span>Please enter your e-mail and password:</span>
                    </div>
                    <Input placeHolder="Email" />
                    <Input placeHolder="Password" forgotPw={true}/>
                    <Button text="LOGIN" />
                    <div className="accountBottom">
                        <span>Don't have an account? </span>
                        <span>Create one</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Account;