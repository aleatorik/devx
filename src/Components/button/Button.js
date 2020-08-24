import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    handleOnclick = (e) => {
        // if(e.target.name === "login"){
        //     fetch('http://10.58.5.34:8000/account/sign_in', {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             email: idPw.idInput,
        //             pw: idPw.pwInput
        //         })
        //     }).then(response => response.json())
        //     .then(response => {
        //         localStorage.setItem('token', response.Your_token);
        //         console.log(response);
        //     });
        // }
        // else{
        //     fetch('http://10.58.5.34:8000/account/sign_in', {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             name: idPw.idInput,
        //             lname: idPw.pwInput,
        //             email: 'qwer@gmail.com',
        //             pw: '1234-1234'
        //         })
        //     }).then(response => response.json())
        //     .then(response => {
        //         localStorage.setItem('token', response.Your_token);
        //         console.log(response);
        //     });
        // }
    };

    render() {
        const {name, text} = this.props;

        return (
            <div className="ButtonContainer">
                <button name={name} onClick={this.handleOnclick}>{text}</button>
            </div>
        );
    }
}

export default Button;