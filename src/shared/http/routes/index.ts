import productsRoutes from "@modules/products/routes/productsroutes";
import userRoutes from "@modules/users/routes/userRoutes";
import { Router } from "express";

const routes = Router()

routes.use("/products",productsRoutes)
routes.use("/users",userRoutes)

export default routes