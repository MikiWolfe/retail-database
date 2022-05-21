import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";

const ProductTableRow = (props) => {
  const { _id, name, brand, category, price, quantity } = props.obj;

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const deleteProduct = async () => {
    window.localStorage.setItem("product", JSON.stringify(props.obj));
    setIsLoading(true);
    try {
      await axios.delete(
        `https://retailer-database.herokuapp.com/product/delete-product/${_id}`
      );
      console.log("Item successfully deleted.");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      navigate("/homepage");
    }
  };

  const onSubmit = () => {
    handleShow();
  };

  return (
    <>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Confirm to delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Click delete to remove this product. You will then be redirected to
            the homepage. You will be able to undo this delete.
          </Modal.Body>
          <Modal.Footer>
            <Button size="lg" variant="primary" onClick={deleteProduct}>
              {isLoading ? (
                <Spinner animation="border" variant="light" />
              ) : (
                "Delete"
              )}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <tr>
        <td>{_id}</td>
        <td>{name}</td>
        <td>{brand}</td>
        <td>{category}</td>
        <td>$ {price}</td>
        <td>{quantity}</td>
        <td>
          <Link to={`/update-product/${_id}`}>
            <Button variant="info" size="sm" disabled={isLoading}>
              Edit{" "}
            </Button>
          </Link>

          <p> OR </p>

          <Button
            size="sm"
            variant="danger"
            disabled={isLoading}
            onClick={onSubmit}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ProductTableRow;
