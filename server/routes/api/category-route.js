const router = require("express").Router();

const { Category, Product } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id", "category_name"],
      include: [
        {
          model: Product,
          attributes: [
            "id",
            "product_name",
            "price",
            "quantity",
            "description",
            "brand",
          ],
        },
      ],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("./:id", async (req, res) => {
  try {
    const category = await Category.fineOne({
      where: {
        id: res.params.id,
      },
      attributes: ["id", "category_name"],
      include: [
        {
          model: Product,
          attributes: [
            "id",
            "product_name",
            "price",
            "quantity",
            "description",
            "brand",
          ],
        },
      ],
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const categoryCreate = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryCreate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const categoryUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryUpdate) {
      res
        .status(404)
        .json({ message: "Unable to edit the category with that ID." });
      return;
    }
    res.status(200).json(categoryUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const categoryDelete = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryDelete) {
      res
        .status(400)
        .json({ message: "Unable to fine a category with that ID." });
      return;
    }
    res.status(200).json(categoryDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
