import React, { Component } from "react";
import SpaceX from '../spaceX/SpaceX';
import './Nav.scss';

const NAV_LIST = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'SHOP', 'ACCOUNT'];

class Nav extends Component {
  state = {
    scroll: 0,
    scrollDirection: true,
    navHide: false,
    style: {
      background: 'none'
    }
  };

  componentDidUpdate(prevProps, prevState){
    if(prevState.scroll !== this.props.scrollPosition){
      this.setState({scroll: this.props.scrollPosition,
        scrollDirection: prevState.scroll < this.props.scrollPosition ? true : false,
        style: {
          background: this.state.scroll >= window.innerHeight ? 'black' : 'none'
        }
      });
      
      if(this.state.scroll >= 150 && this.state.scrollDirection && !this.state.navHide){
        this.setState({navHide: true});
      }
      else if(this.state.scroll >= 150 && !this.state.scrollDirection && this.state.navHide){
        this.setState({navHide: false});
      }
    }
  }

  render() {
    return (
      <div className={`header ${this.state.navHide ? 'nav-hide' : 'nav-show'}`} style={this.state.style}>
        <div className='header-innerContainer'>
          <div className='spaceX-icon'>
            <SpaceX />
          </div>
          <ul className='navUl'>
            {NAV_LIST.map((el, index) => <li className='navLi' key={index}>{el}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
