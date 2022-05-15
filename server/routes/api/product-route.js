const router = require("express").Router();
const { Product, Category } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: [
        "id",
        "product_name",
        "price",
        "quantity",
        "description",
        "brand",
      ],
      include: {
        module: Category,
        attributes: ["category_name"],
      },
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
      attributes: [
        "id",
        "product_name",
        "price",
        "quantity",
        "description",
        "brand",
      ],
      include: {
        module: Category,
        attributes: ["category_name"],
      },
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

router.post("/", async (req, res) => {
  try {
    const productCreate = await Product.creat({
      product_name: req.body.product_name,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
      brand: req.body.brand,
      category: req.body.category_name,
    });
    res.status(200).json(productCreate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("./:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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
