const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let productSchema = require("../models/Product");

router.get("/", (req, res) => {
  productSchema.find((error, data) => {
    if (error) {
      return error;
    } else {
      res.json(data);
    }
  });
});

router.post("/create-product", (req, res) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return error;
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

router.get("/create-product", (req, res) => {
  productSchema.findOne((error, data) => {
    if (error) {
      return error;
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

router.route("/update-product/:id")
.get((req, res) => {
  productSchema.findById(
    req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
})
.put((req, res, next) => {
  productSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json(data);
        console.log(data, "Product updated!");
      }
    }
  );
});

router.delete("/delete-product/:id", (req, res) => {
  productSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return error;
    } else {
      res.status(200).json(data);
      console.log(data, "Product deleted!");
    }
  });
});

module.exports = router;
