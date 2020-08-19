import React, { Component } from "react";
import Featuer from "./feature/Featuer";
import Stats from "./stats/Stats";
import "./Falcon9.scss";

class Falcon9 extends Component {
  render() {
    return (
      <main className="Falcon9">
        <Featuer />
        <Stats />
      </main>
    );
  }
}

export default Falcon9;
