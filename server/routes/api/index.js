const router = require("express").Router();

// const categoryRoutes = require("./category-route");
const productRoutes = require("./product-route");

// router.use("./category", categoryRoutes);
router.use("./product", productRoutes);

module.exports = router;
