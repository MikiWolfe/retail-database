import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ProductTableRow from "./ProductTableRow";
import NavBar from "./bars/NavBar";
import Header from "./Header";

const ProductList = () => {
  const [product, setProduct] = useState([]);

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
      </div>
      <div d-flex justify-content-center>
        <Button onClick={restore} variant="warning">
          {" "}
          Undo last Delete{" "}
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
