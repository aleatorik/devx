import React, { Component } from "react";
import Card from "./Card/Card";
import "./SlideWrapper.scss";

class SlideWrapper extends Component {
  state = {
    cardInformation: [],
  };

  componentDidMount() {
    fetch("/data/falcon9/card.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          cardInformation: res.cardInformation,
        });
      });
  }

  render() {
    const { cardInformation } = this.state;
    return (
      <article
        className="SlideWrapper"
        style={
          {
            // transform: `matrix(1, 0, 0, 1, 0, -1329)`,
          }
        }
      >
        {cardInformation.map((el, idx) => (
          <Card key={idx} cardInformation={el} />
        ))}
      </article>
    );
  }
}

export default SlideWrapper;
