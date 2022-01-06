import * as React from "react";
import euLogo from "../img/eu-horizontal.png";
import ecvetLogo from "../img/ecvet-horizontal.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="container has-background-black">
          <div className="columns " style={{ maxWidth: "100vw" }}>
            <div className="column is-narrow">
              <img src={euLogo} alt="eu logo" />
            </div>
            <div class="column  is-narrow">
              <img src={ecvetLogo} alt="ecvet logo" />
            </div>
          </div>
          {/*
             has-text-centered has-text-white-ter
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list"></ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list"></ul>
                </section>
              </div>
            </div>*/}
        </div>
        <div className="content has-text-centered">
          <h1 style={{ color: "white" }}>Maciej Jałocha</h1>
        </div>
      </footer>
    );
  }
};

export default Footer;
