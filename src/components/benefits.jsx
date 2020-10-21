import React, { Component } from "react";

export class Benefits extends Component {
  render() {
    return (
      <div id="benefits" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Benefits</h2>
            <p>
            The Doctomist digital healthcare platform saves cost, improves efficiencies, and increases the accessibility of healthcare, by enabling people to engage in their health and wellbeing, guiding them to the right care.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Benefits;
