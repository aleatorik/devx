import React, { Component } from "react";
import "./CardDescriptionHeader.scss";

class CardDescriptionHeader extends Component {
  render() {
    const { category, title } = this.props;
    return (
      this.props && (
        <div className="CardDescriptionHeader">
          <p className="specHeaderCategory">{category}</p>
          <h1 className="specHeaderTitle">{title}</h1>
        </div>
      )
    );
  }
}

export default CardDescriptionHeader;
