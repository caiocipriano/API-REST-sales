import productsRoutes from "@modules/products/routes/productsroutes";
import { Router } from "express";

const routes = Router()

routes.use("/products",productsRoutes)

export default routes