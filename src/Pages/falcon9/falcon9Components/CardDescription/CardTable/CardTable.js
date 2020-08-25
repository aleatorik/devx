import React, { Component } from "react";
import "./CardTable.scss";

class CardTable extends Component {
  render() {
    return (
      <table className="CardTable">
        <tbody>
          <tr>
            <td>rocket</td>
            <td>
              98kn /<span>&nbsp;148 lbf</span>
            </td>
          </tr>
          <tr>
            <td>rocket</td>
            <td>
              98kn /<span>&nbsp;148 lbf</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CardTable;
