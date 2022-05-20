import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Loading() {
    const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal>
      <Modal.Title>Thank you for your patience! </Modal.Title>

      <Modal.Body>
        <p>
          Loading ... <Spinner animation="border" variant="success" />{" "}
        </p>

        <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Click to load'}
    </Button>
      </Modal.Body>
    </Modal>
  );
}
