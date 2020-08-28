import React, { Component } from "react";
import Product from "../product/Product";
import "./ProductList.scss";
import "../../Shop.scss";

class ProductList extends Component {
  state = {
    name: "",
    price: "",
    imageURL: "",
  };

  render() {
    return (
      <div className="ProductList aspectRatio aspectRatio--withFallback">
        {this.props.product &&
          this.props.product.map((product) => (
            <Product
              key={product.imageURL}
              imageURL={product.imageURL}
              name={product.name}
              price={product.price}
            />
          ))}
      </div>
    );
  }
}

export default ProductList;
