import React, { useState } from "react";
import axios from "axios";
import NavBar from "./bars/NavBar";
import Header from './Header'
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
    axios
      .post("http://localhost:4000/product/create-product", productObject)
      .then(res => {
        if (res.status === 200) {
          alert("Product successfully added!");
          console.log(res);
          window.location.reload()
        } else Promise.reject();
        const { name, brand, category, price, quantity } = res.data;
        setFormValues({ name, brand, category, price, quantity });

      })
      .catch((err) => console.log(err));
    };

  return (
    <div>
      <Header/>
      <NavBar/>
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
