import { Request, Response } from "express";
import CreateSessionService from "../service/CreateSessionService";

export class SessionController{
    public async create(request: Request, response: Response){
        const { email, password } = request.body;
    
        const createSession = new CreateSessionService();
    
        const user = await createSession.execute(email,password,response);

        return response.json((user));
    }
}