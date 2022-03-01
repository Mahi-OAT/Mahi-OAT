import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import oat from "../../Assets/Projects/oat.png";
import amica from "../../Assets/Projects/amica.png";

import knohas from "../../Assets/Projects/knohas.png";
import citiis from "../../Assets/Projects/citiis.png";

import buildee from "../../Assets/Projects/buildee.png";

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
              imgPath={amica}
              isBlog={false}
              title="Amica"
              description="All we need is a decent place to live and fun people to share it with. Right?
              Amica matches you with the best suitable flat according to your requirements as well as with a compatible flatmate based on your personal preferences."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oat}
              isBlog={false}
              title="Owner And Tenant"
              description="Owner & Tenant is a Hyderabad based Property Management Company that provides
              reliable, transparent and an affordable platform to bring together multiple rental and property
              management services under one single umbrella. Whether you want to expand your real-estate
              portfolio or add significant value to your investment, owner & tenant is a trusted partner for all
              your property needs in Hyderabad."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={citiis}
              isBlog={false}
              title="CMP"
              description="The CITIIS (City Investments to Innovate, Integrate and Sustain) program is conceptualized
              to assist Indian cities in implementing urban infrastructure projects that are integrated, innovation
              driven and sustainable. The selected projects will improve sustainable mobility, increase the
              amount of public open spaces, implement technology to improve e-governance and drive social
              and organizational innovation in low-income settlements.
              "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buildee}
              isBlog={false}
              title="Simubuildee"
              description="Buildee is the work of the greatest minds in building sciences and partnerships with market
              drivers. Buildee enables portfolio owners, utilities and service providers to identify, prioritize, and
              realize energy efficiency investments through the building lifecycle. Offer a cloud-based and
              mobile software platform that combines credible engineering intelligence with stakeholder
              collaboration tools to act on cost-effective retrofit investments and track performance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knohas}
              isBlog={false}
              title="KnohasARK"
              description="KnoahsARK360 helps both internal (Managers& Associates) and external (Client) users
              analyze business performance within specific business functions and decide on a specific and
              prompt course of action. It provides actionable insights at glance and helps manage the entire
              customer contact center environment by Integrating locations, staff, department, tools, data points
              and process towards making critical decisions."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
