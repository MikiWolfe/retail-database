import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";

const ProductForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    brand: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    price: Yup.number()
      .positive("Invalid  number")
      .integer("Invalid  number")
      .required("Required"),
    quantity: Yup.number()
      .positive("Invalid number")
      .integer("Invalid  number")
      .required("Required"),
  });

  return (
    <div>
      <h4 className="search">{props.children}</h4>
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <Field
            name="name"
            type="text"
            placeholder="Name"
            className="search"
          />
          <ErrorMessage
            name="name"
            className="d-block invalid-feedback"
            component="span"
          />

          <Field
            name="brand"
            type="text"
            placeholder="Brand"
            className="search"
          />
          <ErrorMessage
            name="brand"
            className="d-block invalid-feedback"
            component="span"
          />

          <Field
            name="category"
            type="text"
            placeholder="Category"
            className="search"
          />
          <ErrorMessage
            name="category"
            className="d-block invalid-feedback"
            component="span"
          />

          <Field
            name="price"
            type="number"
            placeholder="Price"
            className="search"
          />
          <ErrorMessage
            name="price"
            className="d-block invalid-feedback"
            component="span"
          />

          <Field
            name="quantity"
            type="number"
            placeholder="Quantity"
            className="search"
          />
          <ErrorMessage
            name="quantity"
            className="d-block invalid-feedback"
            component="span"
          />

          <Button variant="success" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductForm;
