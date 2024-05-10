import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";


function About() {
  const baseUrl = `https://cld2labs.github.io/cloud2labs`
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
      <Row>
          <Col md={8} className="home-about-description">
      <h1 className="heading-name">
              Our <span className="highlghter"> Expertise </span>
            </h1>
            </Col>
        </Row>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="highlghter">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
      <br />
      <br />
      <br />
      <hr className="yellohr" style={{height:'3px'}}/>
    </Container>
  );
}

export default About;
