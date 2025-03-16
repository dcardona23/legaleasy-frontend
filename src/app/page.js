"use client";
import { useState } from "react";
import ForgotPasswordModal from "@/app/components/ForgotPasswordModal";
import CreateAccountModal from "@/app/components/CreateAccountModal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from 'next/image'

export default function Home() {
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);


  const handleCloseForgotPassword = () => setShowForgotPasswordModal(false);
  const handleCloseAccountModal = () => setShowCreateAccountModal(false);

  const handleShowForgotPasswordModal = () => setShowForgotPasswordModal(true);
  const handleShowCreateAccountModal = () => setShowCreateAccountModal(true);


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
            <Form>
              <h2 className="mb-3 fw-normal">Please sign in</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Enter password"/>
              </Form.Group>
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
      {showForgotPasswordModal && <ForgotPasswordModal handleClose={handleCloseForgotPassword} show={showForgotPasswordModal} />}
      {showCreateAccountModal && <CreateAccountModal handleClose={handleCloseAccountModal} show={showCreateAccountModal} />}

    </div>
  );
}
