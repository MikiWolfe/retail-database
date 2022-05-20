import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./bars/NavBar";
import Header from "./Header";
import ProductForm from "./ProductForm";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const EditProduct = (props) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
  });

  const onSubmit = (productObject) => {
    axios({
      method: "put",
      url: `https://retailer-database.herokuapp.com/product/update-product/${id}`,
      data: productObject,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          confirmAlert({
            title: "Product successfully updated!",
            message: "Click here to go home",
            buttons: [
              {
                label: "Yes",
                onClick: () => navigate("/product-list"),
              },
            ],
          });
        } else Promise.reject();
      })
      .catch((err) =>
        confirmAlert({
          title: "Error",
          message: "Something went wrong!",
          buttons: [
            {
              label: "Home",
              onClick: () => navigate("/homepage"),
            },
          ],
        })
      );
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://retailer-database.herokuapp.com/product/update-product/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const { name, brand, category, price, quantity } = res.data;
        setFormValues({ name, brand, category, price, quantity });
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Header />
      <NavBar />
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
