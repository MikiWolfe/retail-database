const { Category } = require("../models");

const categoryData = [
    { category_name: "Books" }, 
    { category_name: "Music" }, 
    { category_name: "Clothes" }, 
    { category_name: "Shoes" }, 
];

const seedCategory = () => Category.bulkCreate(categoryData)

module.exports = seedCategory

