"use client";
import { useState } from "react";
import ForgotPasswordModal from "@/app/components/ForgotPasswordModal";
import CreateAccountModal from "@/app/components/CreateAccountModal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import { createSession } from "@/legalEasyApiCalls";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const router = useRouter();

  const handleCloseForgotPassword = () => setShowForgotPasswordModal(false);
  const handleCloseAccountModal = () => setShowCreateAccountModal(false);

  const handleShowForgotPasswordModal = () => setShowForgotPasswordModal(true);
  const handleShowCreateAccountModal = () => setShowCreateAccountModal(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createSession({ email, password });

      if (response.success) {
        router.push("/dashboard");
      } else {
        setLoginError("Invalid email or password.")
      }
    } catch (error) {
      setLoginError("An error occurred while trying to log in.")
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <Image
            className="img-fluid"
            width={500}
            height={300}
            src="/assets/scales.jpeg"
            alt="art deco scales of justice"
          />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="text-center w-75">
            <h1 className="text-primary display-3 fw-bold mb-4">LegalEasy</h1>
            <Form onSubmit={handleSubmit}>
              <h2 className="mb-3 fw-normal">Please sign in</h2>
              <Form.Control
                className="mb-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control
                className="mb-2"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <div className="d-flex align-items-center">
                  <Form.Check type="checkbox" label="Remember Me" />
                </div>
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
              <div className="mt-3">
                <Button variant="link" onClick={handleShowForgotPasswordModal}>
                  Forgot password?
                </Button>
                <Button variant="link" onClick={handleShowCreateAccountModal}>
                  Don&apos;t have an account? Sign up
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      {showForgotPasswordModal && (
        <ForgotPasswordModal
          handleClose={handleCloseForgotPassword}
          show={showForgotPasswordModal}
        />
      )}
      {showCreateAccountModal && (
        <CreateAccountModal
          handleClose={handleCloseAccountModal}
          show={showCreateAccountModal}
        />
      )}
    </div>
  );
}
