import React, { Component } from "react";
import "./ImgCard.scss";

export default class ImgCard extends Component {
  render() {
    const { appearCardIdx, idx } = this.props;
    const { imgSrc, description } = this.props.cardData;
    return (
      <div className="ImgCard">
        <picture className="imageWrapper">
          <img alt={description} src={imgSrc} />
        </picture>
        <p
          className={`description ${
            appearCardIdx === idx ? "fadeinAnimation" : ""
          }`}
        >
          {description}
        </p>
      </div>
    );
  }
}
