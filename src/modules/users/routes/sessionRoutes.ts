import { Router } from "express";
import {celebrate, Joi, Segments} from 'celebrate'

import { SessionController } from './../controller/SessionController';

const sessionRoutes = Router();
const sessionController = new SessionController();

sessionRoutes.post("/", 
    celebrate({
        [Segments.BODY]:{
            email:Joi.string().required(),
            password:Joi.string().required()}
    }),sessionController.create);

export default sessionRoutes