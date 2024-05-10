import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import TrackVisibility from "react-on-screen";
import { FaArrowRight } from "react-icons/fa";

function Home({ height }) {
  const baseUrl = `https://cloud2labs.com`
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
        <br />
        <br />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
              Where <strong className="main-name">Innovation</strong> Meets <strong className="main-name">Intelligence</strong>
              </h1>
              <br />
              <br />
              <div style={{ textAlign: "left", fontSize: "1.2em" }}>
                <Row>
                  <h3>From concept to realization, we are more than just the AI, cloud and mobile experts, we specialize in developing tailored software solutions to businesses of all sizes and stages. We help turn your AI aspirations into concrete achievements.</h3>
                </Row>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 10 }}>
              <Tilt>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <img
                      className={isVisible ? "animate__animated animate__zoomIn" : ""}
                      style={{ maxHeight: "800px" }}
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
        <hr className="yellohr" style={{height:'3px'}}/>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
