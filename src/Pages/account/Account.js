import React, { Component } from 'react';
import Input from '../../Components/input/Input';
import Button from '../../Components/button/Button';
import './Account.scss';
import { Link } from 'react-router-dom';
import Nav from '../../Components/nav/Nav';
import Footer from '../../Components/footer/Footer';

class Account extends Component {
    state = {
        email: '',
        password: ''
    };

    handleOnclick = (e) => {
        e.preventDefault();
        fetch('http://10.58.5.213:8000/sign/in', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(response => response.json())
        .then(response => {
            console.log(response);
        });
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {console.log(this.state)
        return (
            <div className="AccountContainer">
                <form className="accountForm">
                    <div className="loginText">LOGIN</div>
                    <div>
                        <span>Please enter your e-mail and password:</span>
                    </div>
                    <Input name="email" handleOnChange={this.handleOnChange} placeHolder="Email" />
                    <Input name="password" handleOnChange={this.handleOnChange} placeHolder="Password" forgotPw={true}/>
                    <Button handleOnclick={this.handleOnclick} text="LOGIN" />
                    <div className="accountBottom">
                        <span>Don't have an account? </span>
                        <Link to="register"><span className="goToRegister">Create one</span></Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Account;