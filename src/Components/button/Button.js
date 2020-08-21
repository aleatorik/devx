import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        return (
            <div className='buttonContainer'>
                <button>{this.props.text}</button>
            </div>
        );
    }
}

export default Button;