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
            <Card className="h-100 shadow-sm">
              <CardImg as={Image} variant="top" src="/assets/small-claims.png" width={200} height={200} className="p-3" alt="Small Claims" />
              <CardBody className="d-flex flex-column">
                <CardTitle>Small Claims</CardTitle>
                <CardText>Complete your small claims court filing with guided assistance.</CardText>
                <Button variant="success" className="mt-auto">Start Form →</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <CardImg as={Image} variant="top" src="/assets/divorce.png" width={200} height={200} className="p-3" alt="Divorce Filing" />
              <CardBody className="d-flex flex-column">
                <CardTitle>Divorce Filing</CardTitle>
                <CardText>Navigate divorce proceedings with step-by-step guidance.</CardText>
                <Button variant="success" className="mt-auto">Start Form →</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <CardImg as={Image} variant="top" src="/assets/name-change.png" width={200} height={200} className="p-3" alt="Name Change" />
              <CardBody className="d-flex flex-column">
                <CardTitle>Name Change</CardTitle>
                <CardText>Complete your legal name change documents effortlessly.</CardText>
                <Button variant="success" className="mt-auto">Start Form →</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default PopularForms;