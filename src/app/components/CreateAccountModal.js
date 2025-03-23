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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      setError('Passwords do not match!')
      return
    }

    setLoading(true);
    setError('');

    try {
      const response = await registerUser({ firstName, lastName, email, password, password_confirmation: confirmPassword })

      if (!response.success) {
        setError(response.message)
        return
      }

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      handleClose();

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div 
      className="modal show"
    >
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Dialog style={{ margin: '20px' }}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center w-100 d-flex flex-column align-items-center">
              <h1>Sign up for a LegalEasy Account</h1>
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
            { error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <Modal.Footer className="justify-between">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
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