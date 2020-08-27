import React, { Component } from "react";
import Slider from "./Slider/Slider";
import CardData from "./CardData";
import "./Gallery.scss";

class Gallery extends Component {
  render() {
    return (
      <section className="Gallery">
        <Slider isEnterView={this.props.isEnterView} cardData={CardData} />
      </section>
    );
  }
}

export default Gallery;
