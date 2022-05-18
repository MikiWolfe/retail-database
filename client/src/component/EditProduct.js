import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./bars/NavBar";
import Header from './Header'
import ProductForm from "./ProductForm";

const EditProduct = (props) => {
  const { id } = useParams();
  console.log(id)
  console.log(props);
  const [formValues, setFormValues] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
  });
  const onSubmit = (productObject) => {
    console.log(productObject);
    axios({
      method: "put",
      url: `http://localhost:4000/product/update-product/${id}`,
      data: productObject,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Product successfully updated");
          console.log(res)
        } else Promise.reject();
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:4000/product/update-product/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const { name, brand, category, price, quantity } = res.data;
        setFormValues({ name, brand, category, price, quantity });
      })
      .catch((err) => console.log(err));
  },);

  return (
    <div>
       <Header/>
      <NavBar/>
      <ProductForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Update Product
      </ProductForm>
    </div>
  );
};

export default EditProduct;
