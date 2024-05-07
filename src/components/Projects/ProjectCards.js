import React from "react";
import { Card, Row, Button, Col } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" height="270px" width="200px"/>
      <Card.Body>
        <Card.Title style={{ color: "#F5A425"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

      </Card.Body>
      <Row xl={12} className="justify-content-around">
        {/* <Col xl={6}>
          <Button variant="primary" href={props.ghLink} target="_blank" className="project-button">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        </Col> */}
        
      </Row>
      <br />
    </Card>
  );
}
export default ProjectCards;
