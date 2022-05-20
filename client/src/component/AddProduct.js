import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./bars/NavBar";
import Header from "./Header";
import ProductForm from "./ProductForm";

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

  const onSubmit = (productObject) => {
    axios
      .post(
        "https://retailer-database.herokuapp.com/product/create-product",
        productObject
      )
      .then((res) => {
        if (res.status === 200) {
          confirmAlert({
            title: "Product added!",
            message: "Do you want to add another product?.",
            buttons: [
              {
                label: "Yes",
                onClick: () => navigate('/create-product'),
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
  };

  return (
    <div>
      <Header />
      <NavBar />
      <ProductForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Add Product
      </ProductForm>
    </div>
  );
};

export default AddProduct;
