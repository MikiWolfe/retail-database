import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Loading from "./Loading";
import ProductList from "./ProductList";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ProductTableRow = (props) => {
  const { _id, name, brand, category, price, quantity } = props.obj;

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const deleteProduct = async () => {
    window.localStorage.setItem("product", JSON.stringify(props.obj));
    setIsLoading(true);
    try {
      await axios.delete(
        `https://retailer-database.herokuapp.com/product/delete-product/${_id}`
      );
      console.log("Item successfully deleted.");
  
    } catch (error) {
      setIsLoading(false);
      navigate("/homepage");
    }
  };

  const onSubmit = () => {
    confirmAlert({
      title: "Confirm to delete",
      message:
        "Click yes to delete this product. You will then be redirected to the homepage.",
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
    <>
      <div className="container">{isLoading ? <Loading /> : ProductTableRow}</div>

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
            onClick={onSubmit}
            size="sm"
            variant="danger"
            disabled={isLoading}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ProductTableRow;
