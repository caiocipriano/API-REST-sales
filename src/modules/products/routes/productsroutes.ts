import { Router } from "express";
import ProductController from "../controller/ProductController";

const productsRoutes = Router();
const productController = new ProductController();

productsRoutes.get("/", productController.findAll);
productsRoutes.get("/:id", productController.findById);
productsRoutes.post("/", productController.create);
productsRoutes.put("/:id", productController.update);
productsRoutes.delete("/:id",productController.deleteById);

export default productsRoutes