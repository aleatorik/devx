import React, { Component } from "react";
import "./ImgCard.scss";

export default class ImgCard extends Component {
  render() {
    const { imgSrc, description } = this.props.cardData;
    return (
      <div className="ImgCard">
        <picture className="imageWrapper">
          <img src={imgSrc} alt="" />
        </picture>
        <p className="description">{description}</p>
      </div>
    );
  }
}
