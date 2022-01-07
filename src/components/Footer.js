import * as React from "react";
import euLogo from "../img/eu-horizontal.png";
import ecvetLogo from "../img/ecvet-horizontal.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="container">
          <div
            className="columns is-centered is-vcentered"
            style={{ maxWidth: "100vw" }}
          >
            <div className="column has-text-centered">
              <figure className="is-inline-block">
                <img src={euLogo} alt="eu logo" style={{ maxWidth: "85%" }} />
              </figure>
            </div>
            <div className="column has-text-centered">
              <figure className="is-inline-block ">
                <img
                  src={ecvetLogo}
                  alt="ecvet logo"
                  style={{ maxWidth: "85%" }}
                />
              </figure>
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
            <p style={{ color: "white" }}>
              Made by{" "}
              <a href="https://www.linkedin.com/in/maciejja%C5%82ocha/">
                @maciejjalocha
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
