import React, { Component } from "react";
import "./Stat.scss";

class Stat extends Component {
  state = {
    "total LaunchesStat": 0,
    "total LandingsStat": 0,
    "reflown RocketsStat": 0,
  };

  increaseStat = (stat, limit) => {
    if (this.state[stat] < limit) {
      this.setState({ [stat]: this.state[stat] + 1 });
    }
  };

  intervalIncrease = (stat, limit) => {
    setInterval(() => {
      this.increaseStat(stat, limit);
    }, 10);
  };

  render() {
    const { intervalIncrease } = this;
    const { name, value, description } = this.props;
    return (
      <div className="Stat">
        <span
          className="statNumber"
          onClick={() => {
            intervalIncrease(name, value);
          }}
        >
          {this.state[name]}
        </span>
        <span className="statDescription">{description}</span>
      </div>
    );
  }
}

export default Stat;
