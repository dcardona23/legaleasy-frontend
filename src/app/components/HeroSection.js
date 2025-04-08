import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function HeroSection() {
  return (
  <Container fluid className="bg-success bg-gradient text-white py-5">
  <Container className="py-5">
    <Row className="justify-content-center text-center">
      <Col md={8}>
        <h1 className="display-3 fw-bold mb-2 mt-4">Take Control of your Legal Journey</h1>
        <p className="lead mb-4">Guide yourself through legal paperwork with our step-by-step, user-friendly interface.</p>
        <Stack direction="horizontal" gap={3} className="justify-content-center">
          <Button variant="light" size="lg">Available Forms</Button>
          <Button variant="outline-light" size="lg">Learn More About LegalEasy</Button>
        </Stack>
      </Col>
    </Row>
  </Container>
  </Container>
  )
}

export default HeroSection;
