import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ProductTableRow = (props) => {
  const { _id, name, brand, category, price, quantity } = props.obj;

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
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

  const buttonClick = () => {
deleteProduct();
handleShow()

  }

  const onSubmit = () => {
    confirmAlert({
      title: "Confirm to delete",
      message:
        "Click yes to delete this product. You will then be redirected to the homepage.",
      buttons: [
        {
          label: "Yes",
          onClick: () => buttonClick(),
        },
        {
          label: "Cancel",
          onClick: () => navigate("/product-list"),
        },
      ],
    });
  };

  return (
    <>
      <div> {}</div>

      <tr disabled={isLoading}>
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
            onClick={!isLoading ? onSubmit : null}
          >
            {isLoading ? <Loading /> : "Delete"}
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ProductTableRow;
