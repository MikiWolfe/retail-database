import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import NavBar from "./bars/NavBar";
import Header from "./Header";
import ProductForm from "./ProductForm";
import Spinner from "react-bootstrap/Spinner";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const AddProduct = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (productObject) => {
    setIsLoading(true);
    axios
      .post(
        "https://retailer-database.herokuapp.com/product/create-product",
        productObject
      )
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
          confirmAlert({
            title: "Product added!",
            message: "Do you want to add another product?.",
            buttons: [
              {
                label: "Yes",
                onClick: () => navigate("/create-product"),
              },
              {
                label: "No",
                onClick: () => navigate("/product-list"),
              },
            ],
          });
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
    setIsLoading(true);
  };

  return (
    <div>
      <Header />
      <NavBar />
      <ProductForm
        initialValues={formValues}
        enableReinitialize
        disabled={isLoading}
        onSubmit={!isLoading ? onSubmit : null}
      >
        {isLoading ? (
          <Spinner animation="border" variant="light" />
        ) : (
          "Add Product"
        )}
        
      </ProductForm>
    </div>
  );
};

export default AddProduct;
