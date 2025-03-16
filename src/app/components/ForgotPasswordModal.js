import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function ForgotPasswordModal({ handleClose, show }) {
  
  return (
    <div 
      className="modal show"
    >
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Dialog style={{ margin: '20px' }}>
          <Modal.Header closeButton>
            <Modal.Title>Password Reset</Modal.Title>
          </Modal.Header>
          <Modal.Body>Enter your email address and we'll send you an email with instructions to reset your password.</Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail" style ={{ margin: '20px' }}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default ForgotPasswordModal;