import { Router } from "express";
import ProductController from "../controller/ProductController";
import {celebrate, Joi, Segments} from 'celebrate'

const productsRoutes = Router();
const productController = new ProductController();

productsRoutes.get("/", productController.findAll);

productsRoutes.get("/:id", 
    celebrate({
        [Segments.PARAMS]:{
            id:Joi.number().id().required()
    }}),productController.findById);

productsRoutes.post("/", 
    celebrate({
        [Segments.BODY]:{
            name:Joi.string().required(),
            price:Joi.number().precision(2).required(),
            quantity:Joi.number().required()}
    }),productController.create);

productsRoutes.put("/:id",
    celebrate({
        [Segments.BODY]:{
            name:Joi.string().required(),
            price:Joi.number().precision(2).required(),
            quantity:Joi.number().required()},
        [Segments.PARAMS]:{
            id:Joi.number().id().required()
    }}),productController.update);

productsRoutes.delete("/:id",
    celebrate({
        [Segments.PARAMS]:{
        id:Joi.number().id().required()
    }}),productController.deleteById);

export default productsRoutes