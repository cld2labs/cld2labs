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
  const baseUrl = window?.location?.href
  return (
    <Container fluid className="about-section" id="community">
      <h1 className="project-heading">
        <strong className="highlghter"> Community</strong>
      </h1>
      <img src={`${baseUrl}/Assets/coming-soon.png`} alt='coming-soon' />
      <Row>
        <Col md={12} className="home-about-social">
          <h1 className='highlghter'>FIND US ON</h1>
          <p>
            Feel free to &nbsp;<a className="connect" href="#contact"><span className="highlghter">connect</span></a>&nbsp; with us
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/cld2labs"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
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
