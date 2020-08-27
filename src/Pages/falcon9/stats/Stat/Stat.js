import React, { Component } from "react";
import throttle from "../../throttle";
import "./Stat.scss";

class Stat extends Component {
  state = {
    "total LaunchesStat": 0,
    "total LandingsStat": 0,
    "reflown RocketsStat": 0,
  };

  componentDidUpdate(prevProps) {
    const { isEnterView } = this.props;
    if (prevProps.isEnterView !== isEnterView && isEnterView) {
      throttle(this.intervalIncrease(), 1000);
    } else if (prevProps.isEnterView !== isEnterView && !isEnterView) {
      this.resetValue();
    }
  }
  increaseStat = (stat, limit) => {
    if (this.state[stat] < limit) {
      this.setState({ [stat]: ++this.state[stat] });
    }
  };

  intervalIncrease = () => {
    const { name, value } = this.props;
    let interval = setInterval(() => {
      this.increaseStat(name, value);
      if (this.state[name] === value) {
        clearInterval(interval);
      }
    }, 10);
  };

  resetValue = () => {
    this.setState({
      "total LaunchesStat": 0,
      "total LandingsStat": 0,
      "reflown RocketsStat": 0,
    });
  };

  render() {
    const { name, value, description } = this.props;
    return (
      <div className="Stat">
        <span className="statNumber">{this.state[name]}</span>
        <span className="statDescription">{description}</span>
      </div>
    );
  }
}

export default Stat;
