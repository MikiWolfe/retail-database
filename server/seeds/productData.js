const { Product } = require("../models");

const productData = [
  {
    product_name: "The Count of Monte Cristo",
    price: 14.99,
    quantity: 4,
    category_id: 1,
    brand: 'Penguin Classics',
  },
  {
    product_name: "A Brief History of Time",
    price: 12.99,
    quantity: 2,
    category_id: 1,
    brand: "Houghton Mifflin Harcourt",
  },
  {
    product_name: "Running The Wizard of Earthsea",
    price: 10.99,
    quantity: 4,
    category_id: 1,
    brand: "Houghton Mifflin Harcourt",
  },
  {
    product_name: "Go FlyEase",
    price: 120,
    quantity: 2,
    category_id: 4,
    brand: "Nike",
  },
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;
