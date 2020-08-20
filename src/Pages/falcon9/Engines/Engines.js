import React, { Component } from "react";
import "./Engines.scss";

class Engines extends Component {
  render() {
    return (
      <section className="Engines">
        <div className="background">
          <div className="backgroundTap seaLevel seaLevelBg"></div>
          <div className="backgroundTap vaccum vacuumBg"></div>
        </div>
        <article className="enginesContents fadeinAnimation">
          <div className="enginesContentsTap seaLevel seaLevelContents">
            <span className="category">ENGINES</span>
            <h1>MERLIN</h1>
            <div className="tapSelectArea">
              <button id="seaLevelTapBtn">SEA LEVEL</button>
              <div className="hline"></div>
              <button id="vacuumTapBtn">VACUUM</button>
            </div>
            <p className="description">
              Merlin is a family of rocket engines developed by SpaceX for use
              on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin
              engines use a rocket grade kerosene (RP-1) and liquid oxygen as
              rocket propellants in a gas-generator power cycle. The Merlin
              engine was originally designed for recovery and reuse.
            </p>
            <table className="specTable">
              <tbody>
                <tr>
                  <td>PROPELLANT</td>
                  <td>
                    LOX
                    <span> / RP-1</span>
                  </td>
                </tr>
                <tr>
                  <td>THRUST</td>
                  <td>
                    845 kN
                    <span> / 190,000 lbf</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="enginesContentsTap vaccum vaccumContents">
            <span className="category">ENGINES</span>
            <h1>VACUUM</h1>
            <div className="tapSelectArea">
              <button id="seaLevelTapBtn">SEA LEVEL</button>
              <div className="hline"></div>
              <button id="vacuumTapBtn">VACUUM</button>
            </div>
            <p className="description">
              Merlin Vacuum features a larger exhaust section and a
              significantly larger expansion nozzle to maximize the engine’s
              efficiency in the vacuum of space. Its combustion chamber is
              regeneratively cooled, while the expansion nozzle is radiatively
              cooled. At full power, the Merlin Vacuum engine operates with the
              greatest efficiency ever for an American-made hydrocarbon rocket
              engine.
            </p>
            <table className="specTable">
              <tbody>
                <tr>
                  <td>PROPELLANT</td>
                  <td>
                    LOX
                    <span> / RP-1</span>
                  </td>
                </tr>
                <tr>
                  <td>THRUST</td>
                  <td>
                    981 kN
                    <span> / 220,500 lbf</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    );
  }
}

export default Engines;
