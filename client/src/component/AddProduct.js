import React, { useState } from "react";
import axios from "axios";
import NavBar from "./bars/NavBar";
import Header from "./Header";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/esm/Button";

const AddProduct = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
  });

  const navigate = useNavigate();

  const onClick = (productObject) => {
    axios
      .post(
        "https://retailer-database.herokuapp.com/product/create-product",
        productObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Product successfully added!");
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };
  const onSubmit = () => {
    onClick();
    navigate("/homepage");
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
