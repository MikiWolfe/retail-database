const Product = require("./Product");
const Category = require("./Category");
const Brand = require("./Brand");

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsToMany(Brand, {
  foreignKey: "brand_id",
});

module.exports = { Product, Category, Brand };
