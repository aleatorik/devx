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
        if(e.target.value.length === 0){
            this.setState({
                placeholderMove: false
            });
        }
        else{
            this.setState({
                placeholderMove: true
            });
        }
    };

    render() {
        const {placeHolder, forgotPw} = this.props;
        const {placeholderMove} = this.state;

        return (
            <div className="Input-Container">
                <div className={`inputFont ${placeholderMove ? "placeholder-go-up" : "placeholder-go-down"}`}>{placeHolder}</div>
                <input className="text-input" onKeyDown={this.handleInputKeyDown} onKeyUp={this.handleInputKeyUp} placeholder={placeHolder}/>
                {forgotPw ? <button className="btnForgot">Forgot password?</button> : ''}
            </div>
        );
    }
}

export default Input;