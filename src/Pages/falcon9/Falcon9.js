import React, { Component } from "react";
import Featuer from "./feature/Featuer";
import Stats from "./stats/Stats";
import Video from "./Video/Video";
import Engines from "./Engines/Engines";
import "./Falcon9.scss";

class Falcon9 extends Component {
  render() {
    return (
      <main className="Falcon9">
        <Featuer />
        <Stats />
        <Video />
        <Engines />
      </main>
    );
  }
}

export default Falcon9;
