import AppError from '@shared/errors/AppError';
import {PrismaClient} from '@prisma/client'
import express,{ Request, Response } from 'express';
import { compare, hash } from 'bcryptjs';
import ListUserService from './ListUserService';

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

class CreateSessionService{
    public async execute(email:any,password:any, response:Response){
        const userService = new ListUserService()   
        const user = await userService.findByEmail(email)

        if(!user){
            response.json({message:"Senha/Email Incorreto"})
        }
        
        const passwordConfirmed = await compare(password, user.password)

        if(!passwordConfirmed){
            response.json({message:"Senha/Email Incorreto"})
        }
        response.json(user)
    }
}

export default CreateSessionService