import React, { Component } from "react";
import "./CardContentsHeader.scss";

class CardContentsHeader extends Component {
  render() {
    const { category, title } = this.props;
    return (
      <div className="CardContentsHeader">
        <p className="category">{category}</p>
        <h1 className="title">{title}</h1>
      </div>
    );
  }
}

export default CardContentsHeader;
