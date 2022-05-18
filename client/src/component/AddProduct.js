import React, { useState, useEffect } from "react";
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
    axios
      .post(
        "https://retailer-database.herokuapp.com/product/create-product",
        productObject
      )
      .then((res) => {
        if (res.status === 200) {
          
          alert("Product successfully added!");
        } else Promise.reject();

        // const { name, brand, category, price, quantity } = res.data;
        // setFormValues({ name, brand, category, price, quantity });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios({
      method: "get",
      url: `https://retailer-database.herokuapp.com/create-product/`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(({ data }) => {
        setFormValues(data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
