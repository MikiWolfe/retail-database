import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ProductTableRow = (props) => {
  const { _id, name, brand, category, price, quantity } = props.obj;
  const navigate  = useNavigate();

  // function confirmAction() {
  //   let confirmAction = confirm(message?: "string"): boolean;
  //   if (confirmAction) {
  //     alert("Action successfully executed");
  //   } else {
  //     alert("Action canceled");
  //   }
  // }




  const deleteProduct = () => {

    axios
      .delete(
        `https://retailer-database.herokuapp.com/product/delete-product/${_id}`
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Are you sure you want to delete this product?");
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
    // window.location.reload();
  };
  const onClick = () =>{
    deleteProduct();
    navigate('/product-list');
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
