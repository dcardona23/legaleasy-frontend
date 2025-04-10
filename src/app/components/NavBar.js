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
            <NavDropdown title="Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="user-profile/">User Profile</NavDropdown.Item>
              <NavDropdown.Item href="saved-forms">
                Saved Forms
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
