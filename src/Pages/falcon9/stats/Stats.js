import React, { Component } from "react";
import Stat from "./Stat/Stat";
import "./Stats.scss";

class Stats extends Component {
  render() {
    return (
      <section id="Stats">
        <article className="statsContents">
          {STATS_INFO.map((el) => {
            const { statName, statValue, statDescription } = el;
            return (
              <Stat
                key={statName}
                name={statName}
                value={statValue}
                description={statDescription}
              />
            );
          })}
        </article>
      </section>
    );
  }
}

function StatInfo(statName, statValue) {
  this.statName = statName;
  this.statValue = statValue;
  this.statDescription = statName.slice(0, -4).toUpperCase();
  // statName은 '이름 + stat'으로 이루어져있다고 규칙을 정하고 그걸 이용해서 뒤의
  // 'stat'문자열을 slicing해서 description부분만 반환하기위해 사용
}

const STATS_INFO = [
  new StatInfo("total LaunchesStat", 95),
  new StatInfo("total LandingsStat", 51),
  new StatInfo("reflown RocketsStat", 36),
];

export default Stats;
