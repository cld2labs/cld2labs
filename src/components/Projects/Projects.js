import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  const baseUrl = `https://cld2labs.github.io/cloud2labs`
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="highlghter">Work </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              key={1}
              imgPath={`https://media.licdn.com/dms/image/C4D0BAQHErlQCybS0-A/company-logo_200_200/0/1630578707213?e=1722470400&v=beta&t=BdEA6yk7MteOGiIMdkEqKYV42JKdt5WZWvTZ3b7iqkk`}
              title="KarmaSoc"
              description="KarmaSoc is an innovative social networking platform that promotes good social citizenship, treats every registered user as a partner and rewards them for their positive involvement. KarmaSoc encourages users to socialize wisely to be a good social citizen, promote entrepreneurship, bringing all local businesses to one platform"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              key={2}
              imgPath={`https://wisdomcapitalusa.com/storage/app/public/Frontassets/images/wisdomcapitallogobank.png`}
              title="Wisdom Capital"
              description="For over a decade, the Wisdom Capital asset-backed loan portfolio has generated a solid 6-10% return on investment (ROI), outpacing the market in year-over-year performance and offering a consistent hedge against volatility."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              key={3}
              imgPath={`${baseUrl}/Assets/Projects/hc.png`}
              title="Health Care Applications"
              description="Healthcare software solutions designed to revolutionize patient care and streamline administrative processes. With a focus on innovation and user-centric design, we empowers healthcare providers to deliver exceptional service while maximizing efficiency."
            />
          </Col>

          


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
