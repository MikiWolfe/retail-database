import React, {useState} from "react";
import  Modal from 'react-bootstrap/Modal'
import  Button from 'react-bootstrap/Button'
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
<>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button size= 'lg' variant="secondary" onClick={!isLoading ? handleClose : null}>
          {isLoading ? (
            <Spinner animation="border" variant="light" />
          ) : (
            "Delete"
          )}
          </Button>
        
        </Modal.Footer>
        
      </Modal>
    </>
 )
}
