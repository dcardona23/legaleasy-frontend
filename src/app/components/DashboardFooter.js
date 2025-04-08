import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function DashboardFooter() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
        <Container>
          <Row>
            <Col md={3}>
              <h5>LegalEasy</h5>
              <p className="text-white-50">Simplifying legal documentation for everyone.</p>
            </Col>
            <Col md={3}>
              <h5>Quick Links</h5>
              <Nav className="flex-column">
                <NavLink href="#" className="text-white-50 ps-0">Available Forms</NavLink>
                <NavLink href="#" className="text-white-50 ps-0">Resources</NavLink>
                <NavLink href="#" className="text-white-50 ps-0">Support</NavLink>
              </Nav>
            </Col>
            <Col md={3}>
              <h5>Legal</h5>
              <Nav className="flex-column">
                <NavLink href="#" className="text-white-50 ps-0">Privacy Policy</NavLink>
                <NavLink href="#" className="text-white-50 ps-0">Terms of Service</NavLink>
                <NavLink href="#" className="text-white-50 ps-0">Disclaimer</NavLink>
              </Nav>
            </Col>
            <Col md={3}>
              <h5>Contact</h5>
              <Stack gap={2} className="text-white-50">
                <span>support@legaleasy.com</span>
              </Stack>
            </Col>
          </Row>
          <div className="text-center mt-4 pt-4 border-top border-secondary">
            <p className="text-white-50 mb-0">© 2025 LegalEasy.  All rights reserved.</p>
          </div>
        </Container>
      </footer>
  );
}

export default DashboardFooter;