import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const ProductTableRow = (props) => {
  const { _id, name, brand, category, price, quantity } = props.obj;
  const history = useHistory();

  const deleteProduct = () => {
    axios
      .delete(
        `https://retailer-database.herokuapp.com/product/delete-product/${_id}`
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Product successfully deleted");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
    window.location.reload();
  };
  function onClick() {
    deleteProduct();
    history.push("/product");
  }
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{brand}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/update-product/${_id}`}>
          <Button variant="info" size="sm">
            Edit{" "}
          </Button>
        </Link>
        <p> OR </p>

        <Button onClick={onClick} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
