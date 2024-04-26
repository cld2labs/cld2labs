import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import TrackVisibility from "react-on-screen";
import { FaArrowRight } from "react-icons/fa";

function Home({ height }) {
  const baseUrl = window?.location?.href
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Welcome To
                <strong className="main-name"> Cloud 2 Labs </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: "1.2em" }}>
                <Row>
                  <h3 className="highlghter">Where Innovation Meets Intelligence In Cloud</h3>
                  <Col md={6} xl={6} sm={12}>
                    <p><span className="highlghter"><FaArrowRight /></span>&nbsp;Innovative Technologies</p>
                    <p><span className="highlghter"><FaArrowRight /></span>&nbsp;Quality Assurance</p>
                    <p><span className="highlghter"><FaArrowRight /></span>&nbsp;Competitive Pricing</p>
                  </Col>
                  <Col md={6} xl={6} sm={12}>
                    <p><span className="highlghter"><FaArrowRight /></span>&nbsp;Future-Ready Services</p>
                    <p><span className="highlghter"><FaArrowRight /></span>&nbsp;Customer Satisfaction</p>
                    <p><span className="highlghter"><FaArrowRight /></span>&nbsp;Comprehensive Platform</p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <img
                      className={isVisible ? "animate__animated animate__zoomIn" : ""}
                      style={{ maxHeight: "450px" }}
                      src={`${baseUrl}/Assets/home-main.svg`}
                      alt="home"
                    />
                  )}
                </TrackVisibility>
              </Tilt>
            </Col>
          </Row>
        </Container>

        {!isScrolling && (
          <div className="field">
            <div className="mouse"></div>
          </div>
        )}
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
