import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ProductTableRow = (props) => {
  const { _id, name, brand, category, price, quantity } = props.obj;

  const navigate = useNavigate();

  const deleteProduct = () => {
    window.localStorage.setItem("product", JSON.stringify(props.obj));
    axios
      .delete(
        `https://retailer-database.herokuapp.com/product/delete-product/${_id}`
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
      navigate("/ho")
  };

  const onSubmit = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Click yes to delete this product",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteProduct(),
        },
        {
          label: "Cancel",
          onClick: () => navigate("/product-list"),
        },
      ],
    });
  };

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{brand}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/update-product/${_id}`}>
          <Button variant="info" size="sm">
            Edit{" "}
          </Button>
        </Link>
        <p> OR </p>
        <div className="container">
          <Button onClick={onSubmit} size="sm" variant="danger">
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ProductTableRow;
