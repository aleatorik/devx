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

  componentDidMount(){
    const {alwaysBgOn} = this.props;
    
    this.setState({
      backgroundShow: alwaysBgOn ? true : false
    });
  }

  componentDidUpdate(prevProps, prevState){
    const {scrollPosition, alwaysNavOn} = this.props;
    const {scroll, scrollDirection, navHide} = this.state;
    
    if(prevState.scroll !== scrollPosition && !alwaysNavOn){
      this.setState({scroll: scrollPosition,
        scrollDirection: prevState.scroll < scrollPosition,
        backgroundShow: scroll >= window.innerHeight
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
      <div className={`Header Header${navHide ? "NavHide" : "NavShow"} Header${backgroundShow ? "BgShow" : "BgHide"}`}>
        <div className="headerInnerContainer">
          <div className="spaceXIcon">
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
