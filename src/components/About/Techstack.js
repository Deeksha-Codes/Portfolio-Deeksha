import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiGit, DiJava, DiCss3 } from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiJest } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: 14 }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: 14 }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: 14 }}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
        <p style={{ fontSize: 14 }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{ fontSize: 14 }}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p style={{ fontSize: 14 }}>Tailwind CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: 14 }}>Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
