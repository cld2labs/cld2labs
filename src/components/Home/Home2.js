import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import TrackVisibility from "react-on-screen";

function Home2() {
  const baseUrl = `https://cld2labs.github.io/cld2labs.github.io/`
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let's <span className="highlghter"> Intoduce </span> Ourselves
            </h1>
            <p className="home-about-body">
              Cloud2labs specializes in innovative cloud solutions, empowering businesses to succeed in the digital era.
              <br />
              <br />Our expert team provides
              <i>
                <b className="highlghter"> scalable and secure cloud services. </b>
              </i>
              <br />
              <br />
              From startups to enterprises, we help you &nbsp;
              <i>
                <b className="highlghter">optimize your cloud infrastructure </b>
              </i>
              <br />
              <br />
              Contact us to discover how &nbsp; <b className="highlghter">Cloud 2 Labs</b> &nbsp;can elevate your business to new heights


            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={`${baseUrl}/Assets/avatar.svg`} alt="home" />
                }
              </TrackVisibility>
            </Tilt>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
