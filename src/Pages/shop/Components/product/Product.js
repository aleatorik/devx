import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/common.scss";
import "./Product.scss";

class Product extends Component {
  render() {
    return (
      <div className="product_wrapper">
        <div className="productContainer">
          <div className="productItem">
            <Link className="productItem__wrapper" to="/detail">
              <div className="imgFixedCtn">
                <img
                  alt="tshirt"
                  data-widths="[200,300,400,500,600,800,900]"
                  data-sizes="auto"
                  src="/images/shop/tshirt.png"
                />
                <span className="imageLoader"></span>
              </div>
            </Link>
            <div className="productItemInfo">
              <div className="productItem__title Heading">
                <Link className="productItem__wrapper" to="/detail">
                  Men's Demo 2 Mission T-Shirt
                </Link>
              </div>
              <div className="productItem__priceList Heading">
                <span className="productItem__price price">
                  <span className="money" data-product-id="123456789">
                    $30.00
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
