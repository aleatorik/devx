import React, { Component } from "react";
import Nav from '../../Components/nav/Nav';
import Footer from "../../Components/footer/Footer";
import MainBG from "./component/MainBG";
import './Main.scss';

class Main extends Component {
  state = {
    scrollPosition: 0,
    scrollDirection: true,
    mainList: [],
    scrollEventHeight: []
  };

  componentDidMount(){
    fetch('http://localhost:3000/data/mainList.json')
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
          {mainList.map((el, index) => <MainBG key={index} backgroundImg={el.backgroundImg} title={el.title} info={el.info} 
          txtLinkBox={el.txtLinkBox} detail={el.detail} position={el.position} height={el.height} index={index} scrollPosition={scrollPosition}/>)}
        <Footer />
      </div>
    );
  }
}

export default Main;
