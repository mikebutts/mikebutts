import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <BaseLayout title="Mike Butts- Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read short description about me.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>
                  My name is Mike Butts and I am an web developer that
                  freelances and teaches code!{" "}
                </p>
                <p>
                  I started at a bootcamp and have been working with the MERN
                  stack, picking up PHP, C#, SQL on the way in my coding
                  adventures.
                </p>
                <p>
                  Throughout my career, I have acquired technical knowledge and
                  the ability to explain programming topics clearly and in
                  detail to a broad audience. I have helped thousands on there
                  path to coding. Growth, Marketing and Customer Success are
                  also skills in my toolbag.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
