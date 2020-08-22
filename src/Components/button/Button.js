import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        const {text} = this.props;

        return (
            <div className="ButtonContainer">
                <button>{text}</button>
            </div>
        );
    }
}

export default Button;