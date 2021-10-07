import React from "react";
import "./landing-page.css";
import Title from "./title/Title";
import Products from "./products/Products";
import ActionSection from "./action-section/ActionSection";

class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-one">
          <Title />
        </div>

        <div className="section-two">
          <Products />
        </div>
        <div className="section-three">
          <ActionSection />
        </div>
        <div className="section-four">
          <Products />
        </div>
        <div className="section-five">
          <ActionSection />
        </div>
        <div className="section-six">
          <Products />
        </div>
        <div className="section-seven">
          <Products />
        </div>
        <div className="section-four"></div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
