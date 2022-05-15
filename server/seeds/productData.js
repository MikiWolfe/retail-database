const { Product } = require("../models");

const productData = [
  {
    name: "The Count of Monte Cristo",
    price: 14.99,
    quantity: 4,
    category: "books",
    category_id: 1,
    brand: 'Penguin Classics',
  },
  {
    name: "A Brief History of Time",
    price: 12.99,
    quantity: 2,
    category_id: 1,
    category: "books",
    brand: "Houghton Mifflin Harcourt",
  },
  {
    name: "Running The Wizard of Earthsea",
    price: 10.99,
    quantity: 4,
    category_id: 1,
    category: "books",
    brand: "Houghton Mifflin Harcourt",
  },
  {
    name: "Go FlyEase",
    price: 120,
    quantity: 2,
    category_id: 4,
    category: "shoes",
    brand: "Nike",
  },
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;
