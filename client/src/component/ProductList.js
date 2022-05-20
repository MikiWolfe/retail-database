import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import ProductTableRow from "./ProductTableRow";
import NavBar from "./bars/NavBar";
import Header from "./Header";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "get",
      url: "https://retailer-database.herokuapp.com/product/",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(({ data }) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  const restore = () => {
    setIsLoading(true);
    const restore = JSON.parse(window.localStorage.getItem("product"));
    console.log(restore);
    axios
      .post(
        "https://retailer-database.herokuapp.com/product/create-product",
        restore
      )
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(true);
          confirmAlert({
            title: "Product restored!",
            message:
              "Product successfully restored! You will be redirected to the homepage.",
            buttons: [
              {
                label: "Close",
                onClick: () => navigate("/homepage"),
              },
            ],
          });
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
    setIsLoading(true);
  };

  const DataTable = () => {
    return product.map((res, i) => {
      return <ProductTableRow obj={res} key={i} />;
    });
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div className="table-wrapper">
        <h4>Full inventory: </h4>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>ID: </th>
              <th>Name: </th>
              <th>Brand: </th>
              <th>Category: </th>
              <th>Price: </th>
              <th>Quantity: </th>
            </tr>
          </thead>
          <tbody>{DataTable()}</tbody>
        </Table>
        <div className="restore">
          <Button onClick={!isLoading ? restore : null} 
          variant="warning" disabled={isLoading}>
         {  isLoading ?  <Spinner animation="border" variant="light" /> : 'Undo the last deleted product'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
