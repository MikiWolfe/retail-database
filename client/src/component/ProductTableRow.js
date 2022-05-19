import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ProductTableRow = (props) => {
  const { _id, name, brand, category, price, quantity } = props.obj;
  const navigate = useNavigate();


  
  const submit = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Click Yes"),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const deleteProduct = () => {
    window.localStorage.setItem("product", JSON.stringify(props.obj));
    axios
      .delete(
        `https://retailer-database.herokuapp.com/product/delete-product/${_id}`
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Are you sure you want to delete this product?");
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
    // window.location.reload();
  };
  const onClick = () => {
    deleteProduct();
  };
  return (
    <div>
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

          <Button onClick={onClick} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
      <div className="container">
        <button onClick={submit}>Confirm dialog</button>
      </div>
    </div>
  );
};

export default ProductTableRow;
