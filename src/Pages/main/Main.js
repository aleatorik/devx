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
      <div className='Main'>
        <Nav scrollPosition={this.state.scrollPosition}/>
        <div className='bgMain' />
        <div className='bgStarlink' />
        <div className='bgStarship' />
        <div className='bgReturn' />
        <div className='bgDragon' />
        <div className='bgNasa' />
        <Footer />
      </div>
    );
  }
}

export default Main;
