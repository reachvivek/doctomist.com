import React, { Component } from "react";
import Logo from "../assets/logo.png"

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <img id="logo" src={Logo} alt="Doctomist"/>OCTOMIST
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  FEATURES
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#benefits" className="page-scroll">
                  BENEFITS 
                </a>
              </li>
              <li>
                <a href="#vision" className="page-scroll">
                  VISION
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  REVIEWS
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  TEAM
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="#login" className="page-scroll">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
