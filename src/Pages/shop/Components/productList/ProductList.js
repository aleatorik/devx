import React, { Component } from "react";
import Product from "../product/Product";
import "./ProductList.scss";
import "../../Shop.scss";

class ProductList extends Component {
  state = {
    id: "",
    src: "",
    name: "",
    price: "",
  };

  render() {
    return (
      <div className="ProductList aspectRatio aspectRatio--withFallback">
        {this.props.product.map((product) => (
          <Product
            key={product.frontSrc}
            frontSrc={product.frontSrc}
            backSrc={product.backSrc}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
