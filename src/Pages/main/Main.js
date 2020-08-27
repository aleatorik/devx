import React, { Component } from "react";
import Nav from '../../Components/nav/Nav';
import Footer from "../../Components/footer/Footer";
import MainBG from "./component/MainBG";
import {API_MAIN} from '../../config'
import './Main.scss';

class Main extends Component {
  state = {
    scrollPosition: 0,
    scrollDirection: true,
    mainList: [],
    scrollEventHeight: []
  };

  componentDidMount(){
    const api_url = API_MAIN;
    
    fetch(`${api_url}/data/mainList.json`)
    .then(reponse => reponse.json())
    .then(json => this.setState({mainList: json.mainList}));

    window.addEventListener('scroll', (e) => {
      this.setState({scrollPosition: e.srcElement.scrollingElement.scrollTop});
    });
  };

  render() {
    const {scrollPosition, mainList} = this.state;

    return (
      <div className='Main'>
        <Nav scrollPosition={scrollPosition}/>
          {mainList.map((el, index) => <MainBG key={index} index={index} scrollPosition={scrollPosition} {...el}/>)}
        <Footer />
      </div>
    );
  }
}

export default Main;
