'use client'
import { useState } from 'react'
import ForgotPasswordModal from '@/app/components/ForgotPasswordModal'
import Button from 'react-bootstrap/Button'

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img 
            className="img-fluid" 
            style={{ height: "700px", objectFit: 'cover' }} 
            src="/assets/scales.jpeg" 
            alt="art deco scales of justice"
          />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="text-center w-75">
            <h1 className="text-primary display-3 fw-bold mb-4">LegalEasy</h1> 
            <form className="form-signin">
              <h2 className="mb-3 fw-normal">Please sign in</h2>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input 
                type="email" 
                id="inputEmail" 
                className="form-control mb-3" 
                placeholder="Email address" 
                required
                autoFocus
              />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input 
                type="password" 
                id="inputPassword" 
                className="form-control mb-3" 
                placeholder="Password" 
                required
              /> 
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <Button variant="primary" size="lg">Sign in</Button>
              <div className="mt-3">
                <Button 
                  variant="link"
                  onClick={handleShow}
                >
                    Forgot password?
                </Button>
                <Button variant="link"
                >Don't have an account? Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    {show && <ForgotPasswordModal handleClose={handleClose} show={show}/>}
    </div>
  );
}
