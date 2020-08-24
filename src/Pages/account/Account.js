import React, { Component } from 'react';
import Input from '../../Components/input/Input';
import Button from '../../Components/button/Button';
import './Account.scss';
import { Link } from 'react-router-dom';
import Nav from '../../Components/nav/Nav';
import Footer from '../../Components/footer/Footer';

class Account extends Component {
    render() {
        return (
            <div className="AccountContainer">
                <Nav />
                <form className="accountForm">
                    <div className="loginText">LOGIN</div>
                    <div>
                        <span>Please enter your e-mail and password:</span>
                    </div>
                    <Input placeHolder="Email" />
                    <Input placeHolder="Password" forgotPw={true}/>
                    <Button name="login" text="LOGIN" />
                    <div className="accountBottom">
                        <span>Don't have an account? </span>
                        <Link to="register"><span className="goToRegister">Create one</span></Link>
                    </div>
                </form>
                <Footer />
            </div>
        );
    }
}

export default Account;