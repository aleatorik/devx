import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        const {text, handleOnclick} = this.props;

        return (
            <div className="ButtonContainer">
                <button onClick={handleOnclick}>{text}</button>
            </div>
        );
    }
}

export default Button;