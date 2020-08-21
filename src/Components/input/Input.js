import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
    state = {
        input: '',
        style: {
            opacity: '0',
            transform: 'translateY(5px)',
            transition: 'all 0.5s'
        }
    };

    handleInputKeyDown = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    handleInputKeyUp = (e) => {
        if(e.target.value.length === 0){
            this.setState({
                style: {
                    ...this.state.style,
                    opacity: '0',
                    transform: 'translateY(5px)'
                }
            });
        }
        else{
            this.setState({
                style: {
                    ...this.state.style,
                    opacity: '1',
                    transform: 'translateY(0)'
                }
            });
        }
    };

    render() {
        return (
            <div className='inputContainer'>
                <div style={this.state.style}>{this.props.placeHolder}</div>
                <input onKeyDown={this.handleInputKeyDown} onKeyUp={this.handleInputKeyUp} placeholder={this.props.placeHolder}/>
                {this.props.forgotPw ? <button>Forgot password?</button> : ''}
            </div>
        );
    }
}

export default Input;