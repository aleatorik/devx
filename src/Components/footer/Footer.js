import React, { Component } from "react";
import "./Footer.scss";

const FOOTER_LIST = [
  "TWITTER",
  "YOUTUBE",
  "INSTAGRAM",
  "FLICKR",
  "LINKEDIN",
  "PRIVACY POLICY",
];

class Footer extends Component {
  render() {
    const { fixedBottom } = this.props;
    return (
      <div className={`Footer ${fixedBottom ? "fixedBottom" : ""}`}>
        <span>SPACEX © 2020</span>
        <ul className="footerUl">
          {FOOTER_LIST.map((el, index) => (
            <li key={index}>
              <a href="#">{el}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Footer;
