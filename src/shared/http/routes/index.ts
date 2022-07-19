import productsRoutes from "@modules/products/routes/productsroutes";
import sessionRoutes from "@modules/users/routes/sessionRoutes";
import userRoutes from "@modules/users/routes/userRoutes";
import { Router } from "express";

const routes = Router()

routes.use("/products",productsRoutes)
routes.use("/users",userRoutes)
routes.use("/session", sessionRoutes)

export default routes