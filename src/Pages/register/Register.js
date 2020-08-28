import React, { Component } from "react";
import Input from "../../Components/input/Input";
import Button from "../../Components/button/Button";
import Nav from "../../Components/nav/Nav";
import Footer from "../../Components/footer/Footer";
import "./Register.scss";

class Account extends Component {
  render() {
    return (
      <div className="RegisterContainer">
        <Nav alwaysNavOn alwaysBgOn />
        <form className="registerForm">
          <div className="registerText">REGISTER</div>
          <div>
            <span>Please fill in the information below:</span>
          </div>
          <Input placeHolder="First name" />
          <Input placeHolder="Last name" />
          <Input placeHolder="Email" />
          <Input placeHolder="Password" />
          <Button text="CREATE MY ACCOUNT" />
        </form>
        <Footer fixedBottom />
      </div>
    );
  }
}

export default Account;
