import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { registerUser } from '@/legalEasyApiCalls'
import { useState } from 'react'

function CreateAccountModal({ handleClose, show }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    registerUser({ firstName, lastName, email, password, password_confirmation: confirmPassword })
  }

  return (
    <div 
      className="modal show"
    >
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Dialog style={{ margin: '20px' }}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center w-100 d-flex flex-column align-items-center">
              <h1>Welcome to LegalEasy</h1>
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" style={{ margin: '20px' }}>
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
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
              <Form.Control
                className="mb-2"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          <Modal.Footer className="justify-between">
            <Button variant="primary" type="submit">
              Create Account
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Have an Account?
            </Button>
          </Modal.Footer>
          </Form>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default CreateAccountModal;