import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
    state = {
        input: '',
        placeholderMove: false
    };

    handleInputKeyDown = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    handleInputKeyUp = (e) => {
        this.setState({placeholderMove: e.target.value.length});
    };

    render() {
        const {placeHolder, forgotPw} = this.props;
        const {placeholderMove} = this.state;

        return (
            <div className="InputContainer">
                <div className={`inputFont ${placeholderMove ? "placeholderGoUp" : "placeholderGoDown"}`}>{placeHolder}</div>
                <input className="textInput" onKeyDown={this.handleInputKeyDown} onKeyUp={this.handleInputKeyUp} placeholder={placeHolder}/>
                {forgotPw ? <button className="btnForgot">Forgot password?</button> : ''}
            </div>
        );
    }
}

export default Input;