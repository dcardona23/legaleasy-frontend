"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useRouter } from "next/navigation";

function HeroSection() {
  const router = useRouter();

  return (
    <div className="px-10" style={{ backgroundColor: "white" }}>
      <Container fluid className="bg-success bg-gradient text-white py-5">
        <Container className="py-5">
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="display-4 fw-bold mb-2 mt-4">
                Take Control of your Legal Journey
              </h1>
              <p className="lead mb-4">
                Guide yourself through legal paperwork with our user-friendly,
                step-by-step interface.
              </p>
              <Stack
                direction="horizontal"
                gap={3}
                className="justify-content-center"
              >
                <Button 
                  variant="light" 
                  size="lg"
                  onClick={() => router.push("/available-forms")}
                >
                  Available Forms
                </Button>
                <Button
                  variant="outline-light link"
                  size="lg"
                  onClick={() => router.push("/form-finder")}
                >
                  Need Help Finding a Form?
                </Button>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default HeroSection;
