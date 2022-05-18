import React, { useState } from "react";
import axios from "axios";
import NavBar from "./bars/NavBar";
import Header from "./Header";
import ProductForm from "./ProductForm";

const AddProduct = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
  });

  const onSubmit = (productObject) => {
    axios({
      method: "post",
      url: "http://localhost:4000/product/create-product",
      data: productObject,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) alert("Product successfully added");
        else Promise.reject();
        window.location.reload();
      })
      .catch((err) => alert("Something went wrong"));
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
