import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function CreateAccountModal({ handleClose, show }) {
  
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
          <Form>
            <Form.Group className="mb-3" style ={{ margin: '20px' }}>
              <Form.Control className="mb-2" type="name" placeholder="First Name" />
              <Form.Control className="mb-2" type="name" placeholder="Last Name" />
              <Form.Control className="mb-2" type="email" placeholder="Email" />
              <Form.Control className="mb-2" type="name" placeholder="Password" />
              <Form.Control className="mb-2" type="name" placeholder="Confirm Password" />
            </Form.Group>
          </Form>
          <Modal.Footer className="justify-between">
            <Button variant="primary" onClick={handleClose}>
              Create Account
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Have an Account?
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default CreateAccountModal;