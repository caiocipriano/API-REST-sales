import  auth  from '@config/auth';
import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

export default function isAuthenticated(request:Request, response:Response,next:NextFunction):void{
    const authHeader = request.headers['authorization']
    if(!authHeader){
        response.json({message:"Token Inválido"})
    }
    if(authHeader){
        const [, token] = authHeader.split(' ');

    try {
        const decodeToken=verify(token,auth.jwt.secret)

        return next()
    } catch (error) {
        response.json({message:"Internal Server Error"})
    }
    }
    
}