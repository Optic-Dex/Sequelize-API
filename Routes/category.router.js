const express = require("express");
const { CategoryController } = require("../Controllers/category.controller.js");
const { verifyToken } = require("../Middleware/verifyToken.js");

const controller = new CategoryController();

const CategoryRouter = express.Router();

CategoryRouter.get("/category", (req, res) => {
  controller.list(req, res);
});
CategoryRouter.get("/category/:id[0-9]*", (req, res) => {
  controller.get(req, res);
});
CategoryRouter.post("/categoryId", (req, res) => {
  controller.getId(req, res);
});
CategoryRouter.post("/category", verifyToken, (req, res) => {
  controller.create(req, res);
});
CategoryRouter.put("/category", verifyToken, (req, res) => {
  controller.update(req, res);
});
CategoryRouter.delete("/category", verifyToken, (req, res) => {
  controller.delete(req, res);
});

module.exports = { CategoryRouter };
