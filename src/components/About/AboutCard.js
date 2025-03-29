import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deeksha Vasudev </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I have completed  BE in Computer Science and Engineering at AMC Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering for Wildlife Conservation
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Go So Hard in your path that makes you forget the start!"{" "}
          </p>
          <footer className="blockquote-footer">Deeksha Vasudev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
