"use client";
import { endSession } from "@/legalEasyApiCalls";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { useRouter } from "next/navigation";

function TopNavBar() {
  const [logoutError, setLogoutError] = useState(null);
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await endSession();
      console.log("the response is:", response);
      if (response.success) {
        router.push("/");
      }
    } catch (error) {
      setLogoutError("An error occurred while trying to logout.");
    }
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LegalEasy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            variant="link"
            className="text-decoration-none"
            style={{ color: "inherit", fontSize: "1em" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
