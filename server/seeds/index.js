const sequelize = require("../config/connection");

const seedProduct = require('./productData')
const seedCategory = require('./categoryData')
const seedBrand = require('./brandData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProduct();

  await seedCategory();

  await seedBrand();
  process.exit(0);
};

seedAll();
