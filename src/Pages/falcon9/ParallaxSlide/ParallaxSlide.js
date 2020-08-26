import React, { Component } from "react";
import Card from "../falcon9Components/SlideWrapper/Card/Card";
import SlideWrapper from "../falcon9Components/SlideWrapper/SlideWrapper";
import "./ParallaxSlide.scss";

class ParallaxSlide extends Component {
  state = {
    introCardInformation: {},
    introCardTopPosition: 0,
    introCardisInView: false,
  };
  componentDidMount() {
    fetch("/data/falcon9/card.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          introCardInformation: res.cardInformation[0],
        });
      });
  }

  render() {
    console.log(this.state);
    const { introCardInformation } = this.state;
    return (
      <section className="ParallaxSlide">
        <article className="introCard">
          {introCardInformation.backgroundImgUrl && (
            <Card
              introCardisInView={this.state.introCardisInView}
              cardInformation={introCardInformation}
            />
          )}
        </article>
        <SlideWrapper />
      </section>
    );
  }
}

export default ParallaxSlide;
