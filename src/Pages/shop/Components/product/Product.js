import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/common.scss";
import "./Product.scss";

class Product extends Component {
  render() {
    return (
      <div className="product__wrapper">
        <div className="productContainer">
          <div className="productItem">
            <Link className="productItem__wrapper" to="/shop/detail">
              <div className="imgFixedCtn">
                <img
                  alt="tshirt-front"
                  className="productItem__img img--fadeIn"
                  src={this.props.frontSrc}
                  //   src={`http://localhost:3000/shop/${this.props.id}?set=set2&size=435x435`}
                />
                <img
                  alt="tshirt-back"
                  className="productItem__img back-img img--fadeIn"
                  src={this.props.backSrc}
                />
                {/* src={`http://localhost:3000/shop/${this.props.id}?set=set2&size=435x435`} */}
              </div>
            </Link>
            <div className="productItemInfo">
              <div className="productItem__title Heading">
                <Link className="productItem__wrapper" to="/shop/detail">
                  Men's Demo 2 Mission T-Shirt
                  {this.props.name}
                </Link>
              </div>
              <div className="productItem__priceList Heading">
                <span className="productItem__price price">
                  <span className="money" data-product-id="123456789">
                    $30.00
                    {this.props.price}
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
