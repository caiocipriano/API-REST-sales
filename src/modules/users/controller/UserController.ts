import { Request, Response } from "express";

import CreateUserService from "../service/CreateUserService";
import ListUserService from "../service/ListUserService";

export default class UserController{
    public async findAll(request:Request, response:Response){
        const listUsers = new ListUserService()
        await listUsers.execute(request,response)
    }
    public async create (request:Request, response:Response){
        const createUser = new CreateUserService()
        await createUser.execute(request,response)
    }
}