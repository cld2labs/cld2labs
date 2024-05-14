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
  const baseUrl = `https://cloud2labs.com`
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="heading-name home2">
              Let's <span className="highlghter"> Introduce </span> Ourselves
            </h1>
            <h3 className="home-about-body">
            At our core, we are dedicated to <b className="highlghter">revolutionizing</b> the way businesses operate in the digital age, with a primary focus on healthcare innovation. Leveraging the power of <b className="highlghter">Generative AI</b>, we craft <b className="highlghter">cloud solutions</b> tailored to meet the unique needs of the <b className="highlghter">healthcare</b> sector. Our commitment to excellence drives us to develop cutting-edge <b className="highlghter">mobile</b> and <b className="highlghter">web applications</b> that not only streamline processes but also elevate the standard of patient care.
              <br />
              <br />
              While healthcare remains our cornerstone, our expertise extends across various business sectors. From <b className="highlghter">finance to retail</b>, we provide comprehensive cloud solutions that enhance <b className="highlghter">efficiency, productivity, and profitability</b>. Our team of <b className="highlghter">seasoned developers</b> combines industry knowledge with technical prowess to deliver scalable and adaptable solutions that meet the dynamic demands of <b className="highlghter">modern enterprises</b>.

            </h3>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={`${baseUrl}/Assets/avatar.svg`} alt="home" width="150%"/>
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
