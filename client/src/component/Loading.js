import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Loading() {
  return (
      <Modal size="lg" keyboard={false}>
    <Modal.Dialog>
      <Modal.Title>Thank you for your patience! </Modal.Title>

      <Modal.Body>
      <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="visually-hidden">Loading...</span>
  </Button>{' '}
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
      </Modal.Body>
    </Modal.Dialog>
 </Modal>
  );
}
