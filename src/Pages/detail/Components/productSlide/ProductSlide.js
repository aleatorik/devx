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
              src="https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_Demo2MissionPatch_T-Shirt_Black__BACK_600x.png?v=1596236118"
            />
          </div>
        </div>
        <div className="product__slideItem">
          <div className="product__slideItem--box">
            <img
              alt="detail__item1"
              className="img__case"
              src="https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Mens_T-Shirt_Black_FRONT_600x.png?v=1596236118"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSlide;
