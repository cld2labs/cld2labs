import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiApple,
  DiAndroid,
} from "react-icons/di";
import {
  SiOpenai,
  SiMicrosoftazure,
  SiGooglecloud,
  SiFlutter,
} from "react-icons/si";
import { FaFigma, FaAws, FaCode, FaNodeJs } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbBrandNextjs } from "react-icons/tb";
import { Tooltip } from "react-tooltip";

function Techstack() {
  return (
    <div>
      <Tooltip id="tooltip" />

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Gen Ai">
          <GiArtificialIntelligence />
          <h3>Gen AI</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Web Applications">
          <FaCode />
          <h3>Web Apps</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Andoid Applications">
          <DiAndroid />
          <h3>Android</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="iOS Applications">
          <DiApple />
          <h3>IOS</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Ui/Ux Design">
          <FaFigma />
          <h3>UI/UX</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="AI Integration">
          <SiOpenai />
          <h3>Open AI</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Google Cloud">
          <SiGooglecloud />
          <h3>GCP</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="AWS Services">
          <FaAws />
          <h3>AWS</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Microsoft Azure">
          <SiMicrosoftazure />
          <h3>Azure</h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Flutter">
          <SiFlutter />
          <h3>Flutter</h3>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
