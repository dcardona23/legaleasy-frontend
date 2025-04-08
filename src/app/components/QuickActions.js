import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function QuickActions() {
  return (
    <Container fluid className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Quick Actions</h2>
          <Row className="g-5">
            <Col md={4}>
              <Card className="h-100 border-0 bg-transparent text-center">
                <CardBody>
                  <div className="mb-3">
                    <Image src="/assets/resume-icon.png" alt="Resume Form" width={50} height={50} />
                  </div>
                  <CardTitle>Resume Form</CardTitle>
                  <CardText className="text-muted">Continue where you left off</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 bg-transparent text-center">
                <CardBody>
                  <div className="mb-3">
                    <Image src="/assets/documents-icon.png" alt="My Documents" width={50} height={50} />
                  </div>
                  <CardTitle>My Documents</CardTitle>
                  <CardText className="text-muted">Access saved forms</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 bg-transparent text-center">
                <CardBody>
                  <div className="mb-3">
                    <Image src="/assets/help-icon.png" alt="Get Help" width={50} height={50} />
                  </div>
                  <CardTitle>Get Help</CardTitle>
                  <CardText className="text-muted">Chat with support</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
  )
}

export default QuickActions;