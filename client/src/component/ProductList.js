import React, { useState, useEffect } from "react";
import axios from "axios";
import  Table  from "react-bootstrap/Table";
import ProductTableRow from "./ProductTableRow";
import NavBar from "./bars/NavBar";
import Header from './Header'
const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4000/product/",
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

  const DataTable = () => {
    return product.map((res, i) => {
      return <ProductTableRow obj={res} key={i} />;
    });
  };

  return (

    <div>
      <Header/>
      <NavBar/>
      <div className="table-wrapper">
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr className="th">
          <th >ID: </th>
          <th className="th">Name: </th>
          <th className="th">Brand: </th>
          <th className="th">Category: </th>
          <th>Price: </th>
          <th>Quantity: </th>
        </tr>
      </thead>
      <tbody>{DataTable()}</tbody>
    </Table>
    </div>
</div>

  );
};

export default ProductList;