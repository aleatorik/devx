import React, { Component } from "react";
import Nav from '../../Components/nav/Nav';
import Footer from "../../Components/footer/Footer";
import LinkBox from "../../Components/linkBox/LinkBox";
import Account from '../account/Account';
import Register from '../register/Register';
import './Main.scss';

class Main extends Component {
  state = {
    scrollPosition: 0,
    scrollDirection: true
  };

  componentDidMount(){
    window.addEventListener('scroll', (e) => {
      this.setState({scrollPosition: e.srcElement.scrollingElement.scrollTop});
    });
  };

  render() {
    return (
      <div className='main'>
        <Nav scrollPosition={this.state.scrollPosition}/>
        <div className='mainBG1'>
          <Account />
          {/* <Register /> */}
        </div>
        <div className='mainBG2'></div>
        <div className='mainBG3'></div>
        <div className='mainBG4'></div>
        <div className='mainBGShort'></div>
        <div className='mainBG5'></div>
        {/* <LinkBox /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
