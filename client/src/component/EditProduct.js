import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import NavBar from "./bars/NavBar";
import Header from "./Header";
import ProductForm from "./ProductForm";

import Spinner from "react-bootstrap/Spinner";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const EditProduct = (props) => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
  });

  const onSubmit = (productObject) => {
    setIsLoading(true);
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
          setIsLoading(false);
          confirmAlert({
            title: "Product successfully updated!",
            message: "Click here to close",
            buttons: [
              {
                label: "Close",
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
      setIsLoading(true);
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
        enableReinitialize
        disabled={isLoading}
        onSubmit={!isLoading ? onSubmit : null}
      >
        {isLoading ? (
          <Spinner animation="border" variant="light" />
        ) : (
          "Edit Product"
        )}
      </ProductForm>
    </div>
  );
};

export default EditProduct;
