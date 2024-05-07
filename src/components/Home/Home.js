import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import TrackVisibility from "react-on-screen";
import { FaArrowRight } from "react-icons/fa";

function Home({ height }) {
  const baseUrl = `https://cld2labs.github.io/cloud2labs`
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
              Where Innovation Meets Intelligence In
                <strong className="main-name"> Cloud</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: "1.2em" }}>
                <Row>
                  <h4>From concept to realization, we are more than just the AI, cloud and mobile experts, we specialize in developing tailored software solutions to businesses of all sizes and stages. We help turn your AI aspirations into concrete achievements.</h4>
                </Row>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
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
        <br />
        <br />
        <br />
        <hr className="yellohr" style={{height:'3px'}}/>
        
        <br />
        <br />
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
