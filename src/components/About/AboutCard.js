import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="highlghter">Cloud 2 Labs Founded in 2024</span> which is a pioneer in revolutionizing the digital landscape by providing a comprehensive platform for diverse development needs.
            <br />
            <br />

            Our <span className="highlghter">integrated solutions</span> encompass web and mobile app development, UI/UX designing, AI integration, and cloud computing
            <br />
            <br />

            With streamlined workflows and seasoned professionals, we empower businesses to thrive digitally, <span className="highlghter">exceeding expectations and turning AI aspirations</span> into concrete achievements..
            <br />
            <br />
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing Internet
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Unraveling tech's tapestry, forever a student, forever inspired."{" "}
          </p>
          <footer className="blockquote-footer">Vamsee</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
