const router = require("express").Router();
const { Product } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "brand", "category", "price", "quantity"],
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: res.params.id,
      },
      attributes: ["id", "name", "brand", "category", "price", "quantity"],
    });
    if (!product) {
      res.status(404).json({ message: "No product found with this ID" });
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/create-product", async (req, res) => {
  try {
    const productCreate = await Product.create({
      name: req.body.name,
      brand: req.body.brand,
      category: req.body.category_name,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    res.status(200).json(productCreate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/update-product/:id", async (req, res) => {
  try {
    const productUpdate = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!productUpdate) {
      res.status(404).json({ message: "Unable to edit this product" });
      return;
    }
    res.status(200).json(productUpdate);
  } catch (err) {
    res.status(500).jsonp(err);
  }
});

router.delete("/delete-product/:id", async (req, res) => {
  try {
    const productDelete = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!productDelete) {
      req
        .status(404)
        .json({ message: "Unable to delete the product from this ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
