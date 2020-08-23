import React, { Component } from 'react';
import Input from '../../Components/input/Input';
import Button from '../../Components/button/Button';
import './Register.scss';

class Account extends Component {
    render() {
        return (
            <div className='RegisterContainer'>
                <form className='registerForm'>
                    <div className="registerText">REGISTER</div>
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