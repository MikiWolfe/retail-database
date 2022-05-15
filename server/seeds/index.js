const seedProduct = require('./productData')

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedProduct();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
