import React, { Component } from "react";
import SpaceX from '../spaceX/SpaceX';
import './Nav.scss';

const NAV_LIST = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'SHOP', 'ACCOUNT'];

class Nav extends Component {
  state = {
    scroll: 0,
    scrollDirection: true,
    navHide: false,
    backgroundShow: false
  };

  componentDidUpdate(prevProps, prevState){
    const {scrollPosition} = this.props;
    const {scroll ,scrollDirection, navHide} = this.state;
    
    if(prevState.scroll !== scrollPosition){
      this.setState({scroll: scrollPosition,
        scrollDirection: prevState.scroll < scrollPosition ? true : false,
        backgroundShow: scroll >= window.innerHeight ? true : false
      });
      
      if(scroll >= 150 && scrollDirection && !navHide){
        this.setState({navHide: true});
      }
      else if(scroll >= 150 && !scrollDirection && navHide){
        this.setState({navHide: false});
      }
    }
  }

  render() {
    const {navHide, backgroundShow} = this.state;

    return (
      <div className={`Header Header-${navHide ? "nav-hide" : "nav-show"} Header-${backgroundShow ? "bg-show" : "bg-hide"}`}>
        <div className="header-innerContainer">
          <div className="spaceX-icon">
            <SpaceX />
          </div>
          <ul className="navUl">
            {NAV_LIST.map((el, index) => <li className="navLi" key={index}>{el}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
