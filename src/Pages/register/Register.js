import React, { Component } from "react";
import Input from "../../Components/input/Input";
import Button from "../../Components/button/Button";
import Nav from "../../Components/nav/Nav";
import Footer from "../../Components/footer/Footer";
import { API_REGISTER } from "../../config";
import "./Register.scss";

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  handleOnclick = (e) => {
    const api_register = API_REGISTER;
    console.log(this.state.firstname, this.state.lastname);
    fetch(`${API_REGISTER}`, {
      method: "POST",
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "SUCCESS") {
          alert("회원가입 성공");
          this.props.history.push("/account");
        } else {
          alert("회원가입 실패");
        }
        console.log(response);
      });
  };
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="RegisterContainer">
        <Nav alwaysNavOn alwaysBgOn />
        <form
          className="registerForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="registerText">REGISTER</div>
          <div>
            <span>Please fill in the information below:</span>
          </div>
          <Input
            name="firstname"
            handleOnChange={this.handleOnChange}
            placeHolder="First name"
          />
          <Input
            name="lastname"
            handleOnChange={this.handleOnChange}
            placeHolder="Last name"
          />
          <Input
            name="email"
            handleOnChange={this.handleOnChange}
            placeHolder="Email"
          />
          <Input
            name="password"
            handleOnChange={this.handleOnChange}
            placeHolder="Password"
          />
          <Button handleOnclick={this.handleOnclick} text="CREATE MY ACCOUNT" />
        </form>
        <Footer fixedBottom />
      </div>
    );
  }
}
export default Register;
