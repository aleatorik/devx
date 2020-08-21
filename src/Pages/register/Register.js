import React, { Component } from 'react';
import Input from '../../Components/input/Input';
import Button from '../../Components/button/Button';
import './Register.scss';

class Account extends Component {
    render() {
        return (
            <div className='Register-container'>
                <form className='register-form'>
                    <div className="register-text">REGISTER</div>
                    <div>
                        <span>Please fill in the information below:</span>
                    </div>
                    <Input placeHolder='First name'/>
                    <Input placeHolder='Last name'/>
                    <Input placeHolder='Email'/>
                    <Input placeHolder='Password'/>
                    <Button text='CREATE MY ACCOUNT'/>
                </form>
            </div>
        );
    }
}

export default Account;