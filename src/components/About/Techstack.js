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
} from "react-icons/si";
import { FaFigma, FaAws, FaCode } from "react-icons/fa";
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
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Web Applications">
          <FaCode />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Andoid Applications">
          <DiAndroid />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="iOS Applications">
          <DiApple />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Ui/Ux Design">
          <FaFigma />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="AI Integration">
          <SiOpenai />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Google Cloud">
          <SiGooglecloud />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="AWS Services">
          <FaAws />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Microsoft Azure">
          <SiMicrosoftazure />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tooltip" data-tooltip-content="Next Js">
          <TbBrandNextjs />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
