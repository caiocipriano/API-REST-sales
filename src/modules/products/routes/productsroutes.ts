import { Router } from "express";
import ProductController from "../controller/ProductController";

const productsRoutes = Router();
const productController = new ProductController();

productsRoutes.get("/", productController.index);
productsRoutes.get("/:id", productController.show);
productsRoutes.post("/", productController.create);
productsRoutes.put("/:id", productController.update);
productsRoutes.delete("/:id",productController.delete);

export default productsRoutes