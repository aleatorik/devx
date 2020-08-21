import React, { Component } from 'react';
import './LinkBox.scss';

class LinkBox extends Component {
    render() {
        return (
            <div className='box' href='https://www.google.com'>
                REPLAY
                <div className='fillBG'></div>
            </div>
        );
    }
}

export default LinkBox;