import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import CardImg from "react-bootstrap/CardImg";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function PopularForms() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Popular Forms</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-150 shadow-sm">
            <div style={{ height: "300px", position: "relative" }}>
              <CardImg 
                as={Image}
                variant="top" 
                src="/assets/protectionOrder.png" 
                fill
                style={{ objectFit: "cover" }}
                className="p-3" 
                alt="Home illustration with shield, heart, son, and hands icons" 
              />
            </div>
            <CardBody className="d-flex flex-column">
              <CardTitle>Protection Order</CardTitle>
              <CardText>Request a protection order with guided assistance.</CardText>
              <Button variant="success" className="mt-auto">Start Form →</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <div style={{ height: "300px", position: "relative" }}>
              <CardImg 
                as={Image}
                variant="top" 
                src="/assets/divorce.jpg" 
                fill
                style={{ objectFit: "cover" }}
                className="p-3" 
                alt="Wedding rings on top of 'divorce' definition in dictionary" 
              />
            </div>
            <CardBody className="d-flex flex-column">
              <CardTitle>Divorce Filing</CardTitle>
              <CardText>Navigate divorce proceedings with step-by-step guidance.</CardText>
              <Button variant="success" className="mt-auto">Start Form →</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <div style={{ height: "300px", position: "relative" }}>
              <CardImg 
                as={Image}
                variant="top" 
                src="/assets/eviction.jpg" 
                fill
                style={{ objectFit: "cover" }}
                className="p-3" 
                alt="Eviction Notice" 
              />
            </div>
            <CardBody className="d-flex flex-column">
              <CardTitle>Eviction Answer</CardTitle>
              <CardText>Respond to an eviction complaint effortlessly.</CardText>
              <Button variant="success" className="mt-auto">Start Form →</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PopularForms;