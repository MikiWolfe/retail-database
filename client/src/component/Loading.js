import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";

export default function Loading() {
  return (
    <Modal.Dialog>
      <Modal.Title>Thank you for your patience! </Modal.Title>

      <Modal.Body>
        <p>
          Loading ... <Spinner animation="border" variant="success" />{" "}
        </p>
      </Modal.Body>
    </Modal.Dialog>
  );
}
