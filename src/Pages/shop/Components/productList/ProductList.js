import React, { Component } from "react";
import "./ProductList.scss";
import "../../Shop.scss";
import Product from "../product/Product";

class ProductList extends Component {
  state = {
    id: "",
    src: "",
    name: "",
    price: "",
  };

  render() {
    return (
      <div className="productList aspectRatio aspectRatio--withFallback">
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
