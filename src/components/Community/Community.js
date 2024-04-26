import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Community.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Community() {
  const baseUrl = `https://cld2labs.github.io/cld2labs.github.io/`
  return (
    <Container fluid className="about-section" id="community">
      <h1 className="project-heading">
        <strong className="highlghter"> Community</strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects We've worked on recently.
      </p>
      <img src={`${baseUrl}/Assets/coming-soon.png`} alt='coming-soon' />
      <div class="waviy">
        <span style={{ "--i": 1 }}>c</span>
        <span style={{ "--i": 2 }}>o</span>
        <span style={{ "--i": 3 }}>m</span>
        <span style={{ "--i": 4 }}>i</span>
        <span style={{ "--i": 5 }}>n</span>
        <span style={{ "--i": 6 }}>g</span>
        &nbsp;
        <span style={{ "--i": 7 }}>s</span>
        <span style={{ "--i": 8 }}>o</span>
        <span style={{ "--i": 9 }}>o</span>
        <span style={{ "--i": 10 }}>n</span>
      </div>
      <Row>
        <Col md={12} className="home-about-social">
          <h1 className='highlghter'>FIND US ON</h1>
          <p>
            Feel free to &nbsp;<a className="connect" href="#contact"><span className="highlghter">connect</span></a>&nbsp; with us
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/ssvamsee"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/siddamvamsee"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/siddam-sai-vamsee-prasad-32436488/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/siddamvamsee/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
