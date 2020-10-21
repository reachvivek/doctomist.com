import React, { Component } from "react";
import ReactPlayer from 'react-player/youtube'

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div id="intro">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div id="header-text" className="about-text">
                <h2>Healthcare Anytime Anywhere</h2>
                <p id="header-about" >{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                    id="btn-features"
                  >
                    Learn More
                  </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6"> <ReactPlayer url='https://youtu.be/8Ote_B0iH2Y' /> </div>
          </div>
        </div>
      </div>
      </header>
    );
  }
}

export default Header;
