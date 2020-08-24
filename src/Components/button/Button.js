import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        const {text, handleOnclick} = this.props;

        return (
            <button onClick={handleOnclick}>{text}</button>
        );
    }
}

export default Button;