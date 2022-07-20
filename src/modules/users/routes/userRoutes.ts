import { Router } from "express";
import {celebrate, Joi, Segments} from 'celebrate'
import UserController from "../controller/UserController";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated";



const userRoutes = Router();
const userController = new UserController();

userRoutes.get("/", isAuthenticated,userController.findAll);

userRoutes.post("/", 
    celebrate({
        [Segments.BODY]:{
            name:Joi.string().required(),
            email:Joi.string().required(),
            password:Joi.string().required()}
    }),userController.create);

export default userRoutes