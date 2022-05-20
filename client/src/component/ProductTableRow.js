import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Loading from "./Loading";

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
      // setTimeout(() => {

      //     setUsers(respose.data);
      //     setIsLoading(false);
      //   }, 3000);
    } catch (error) {
      setIsLoading(false);
      navigate("/homepage");
    }
  };

  const onSubmit = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Click yes to delete this product, don't worry if it takes a little while.",
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
 
          <Button onClick={onSubmit} size="sm" variant="danger">
            Delete
          </Button>
         </td>
    </tr>
           <div className="container">
          {isLoading ? (
            <Loading />
          ) : (
            ProductTableRow
          )} 
          </div>
         

          </div>
  );
};

export default ProductTableRow;
