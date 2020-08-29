import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ColorSelectModal from "../../colorModal/ColorSelectModal";
import FooIcon from "../fooIcon/FooIcon";
import Config from "../../../../config";
import "./ProductInfo.scss";

class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
      size: "",
      quantity: "",
      count: 0,
      isModalActive: false,
    };
  }

  handleQuantity = (e) => {
    this.setState({
      count:
        e.target.name === "add" ? this.state.count + 1 : this.state.count - 1,
    });
  };

  submitCartInfo = () => {
    if (sessionStorage.getItem("access_token")) {
      return this.props.history.push("/shop/cart");
    } else {
      alert("로그인 먼저 진행해주세요");
      this.props.history.push("/account");
    }

    const { color, quantity, size } = this.state;

    fetch(`${Config.API}/products/1`, {
      method: "POST",
      body: JSON.stringify({
        color: color,
        size: size,
        quantity: quantity,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    const { name, price, colors, size } = this.props;

    return (
      <div className="ProductInfo">
        <div className="product__info">
          <div className="container">
            <div className="productMeta">
              <h1 className="productMeta__title heading">{name}</h1>
              <div className="productMeta__priceList heading">
                <div className="productMeta__price price">
                  <span className="money">${price}</span>
                </div>
              </div>
              <div className="productMeta__description">
                <div className="productMeta__description--empty">
                  <br></br>
                </div>
              </div>
            </div>
            <form method="post" className="productForm">
              <input type="hidden" name="form_type" value="product"></input>
              <input type="hidden" name="utf8" value="✓"></input>
              <div className="productForm__variants">
                <div className="productForm__option">
                  <button
                    onClick={() => this.setState({ isModalActive: true })}
                    type="button"
                    className="productForm__item"
                  >
                    <span className="productForm__optionName">
                      Color: {colors}
                      <span className="productForm__selectedValue"></span>
                    </span>
                    <FooIcon />
                  </button>
                </div>
                <div className="productForm__option">
                  <button type="button" className="productForm__item">
                    <span className="productForm__optionName">
                      Size: {size[1]}
                      <span className="productForm__selectedValue"></span>
                    </span>
                    <FooIcon />
                  </button>
                </div>
                <div className="productForm__quantitySelector">
                  <div className="quantitySelector quantitySelector__large">
                    <button
                      type="button"
                      name="sub"
                      onClick={this.handleQuantity}
                      value="decrement"
                      className="quantitySelector__btn decrease-quantity"
                    >
                      <svg
                        className="Icon Icon--minus"
                        role="presentation"
                        viewBox="0 0 16 2"
                      >
                        <path
                          d="M1,1 L15,1"
                          stroke="currentColor"
                          fill="none"
                          fill-rule="evenodd"
                          stroke-linecap="square"
                        ></path>
                      </svg>
                    </button>
                    <input
                      type="text"
                      placeholder={this.state.count}
                      className="quantitySelector__currentQuantity"
                    />
                    <button
                      type="button"
                      name="add"
                      onClick={this.handleQuantity}
                      value="increment"
                      className="quantitySelector__btn increase-quantity"
                    >
                      <svg
                        className="Icon Icon--plus"
                        role="presentation"
                        viewBox="0 0 16 16"
                      >
                        <g
                          stroke="currentColor"
                          fill="none"
                          fill-rule="evenodd"
                          stroke-linecap="square"
                        >
                          <path d="M8,1 L8,15"></path>
                          <path d="M1,8 L15,8"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  this.submitCartInfo();
                }}
                type="submit"
                className="productForm__addToCart button button-full button-primary"
              >
                Add to cart
              </button>
            </form>
            <div className="product__quickNav">
              <div className="product__quickNavWrapper">
                <Link className="heading link--secondary">
                  More information
                </Link>
                <svg className="icon icon--selet-arrow-right">
                  <path
                    d="M1.5 1.5l8 7.5-8 7.5"
                    stroke-width="1"
                    stroke="currentColor"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="square"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {this.state.isModalActive && (
          <div
            className="modalBackground"
            onClick={() => this.setState({ isModalActive: false })}
          ></div>
        )}
        {this.props.popupProducts && (
          <ColorSelectModal
            name={this.props.popupProducts[0].name}
            color={this.props.popupProducts[0].colors}
            img={this.props.popupProducts[0].imageURL}
            price={this.props.popupProducts[0].price}
            isActive={this.state.isModalActive}
          />
        )}
      </div>
    );
  }
}

export default withRouter(ProductInfo);
