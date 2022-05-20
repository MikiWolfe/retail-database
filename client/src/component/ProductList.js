import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import ProductTableRow from "./ProductTableRow";
import NavBar from "./bars/NavBar";
import Header from "./Header";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://retailer-database.herokuapp.com/product/",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const restore = () => {
    const restore = JSON.parse(window.localStorage.getItem("product"));
    console.log(restore);
    axios
      .post(
        "https://retailer-database.herokuapp.com/product/create-product",
        restore
      )
      .then((res) => {
        if (res.status === 200) {
          confirmAlert({
            title: "Product restored!",
            message: "Product successfully restored!",
            buttons: [
              {
                label: "Close",
                onClick: () => alert("/homepage"),
              },
            ],
          });
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
      window.location.reload(true)
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
          <Button onClick={restore} variant="warning">
            {" "}
            Undo last Delete{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
