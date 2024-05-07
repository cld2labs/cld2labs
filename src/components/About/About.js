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
        <h1 className="project-heading">
          Our <strong className="highlghter">Services </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="highlghter">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
