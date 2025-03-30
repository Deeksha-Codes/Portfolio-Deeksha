import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Ecomzy from "../../Assets/Projects/Ecomzy.png";
import HealthMonitor from "../../Assets/Projects/HealthMonitor.png"
import HooBank from "../../Assets/Projects/HooBank.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HealthMonitor}
              isBlog={false}
              title="Health Monitor"
              description="SmartHealthMonitor is a healthcare monitoring web app built with React and Tailwind CSS. It helps users track their health metrics, view real-time updates, and access medical insights. The project focuses on a clean UI, intuitive navigation, and a seamless user experience. 🏥📊🚀"
              ghLink="https://github.com/Deeksha-Codes/SmartHealthMonitor"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecomzy}
              isBlog={false}
              title="Ecomzy"
              description="Ecomzy is a fully responsive e-commerce website built using React and Tailwind CSS. It includes features like product listings, a shopping cart, and a modern UI for a seamless shopping experience. The project focuses on performance, user-friendly navigation, and a clean design. 🛍️🚀"
              ghLink="https://github.com/Deeksha-Codes/Ecomzy"
              demoLink="https://ecomzy-sooty.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HooBank}
              isBlog={false}
              title="HooBank"
              description="HooBank is a modern, responsive banking website built using React and Tailwind CSS. It features a sleek UI with a focus on financial services, offering a seamless user experience. The project showcases dynamic components, smooth animations, and a professional design suitable for fintech applications. 🚀"
              ghLink="https://github.com/Deeksha-Codes/HooBank"
              demoLink="https://hoo-bank-nine-gold.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
