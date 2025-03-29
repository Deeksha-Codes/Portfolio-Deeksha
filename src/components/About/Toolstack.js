import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiGooglechrome
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <p style={{ fontSize: 14 }}>Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: 14 }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome />
        <p style={{ fontSize: 14 }}>Google Chrome</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p style={{ fontSize: 14 }}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{ fontSize: 14 }}>Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
