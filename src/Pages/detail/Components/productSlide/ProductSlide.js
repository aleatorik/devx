import React, { Component } from "react";
import "../../../../Styles/common.scss";
import "./ProductSlide.scss";

class ProductSlide extends Component {
  render() {
    return (
      <div className="productSlide">
        <div className="product__slideItem isSelected">
          <div className="product__slideItem--box">
            <img
              alt="detail__item1"
              className="img__case"
              src={this.props.imageURL[0]}
            />
          </div>
        </div>
        <div className="product__slideItem">
          <div className="product__slideItem--box">
            <img
              alt="detail__item1"
              className="img__case"
              src={this.props.imageURL[1]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSlide;
