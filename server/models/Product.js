
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Product Model
const productSchema = new Schema({
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);

