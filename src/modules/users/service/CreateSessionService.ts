import {PrismaClient} from '@prisma/client'
import express,{ Response } from 'express';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import auth from '@config/auth';

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

        const token = sign({},auth.jwt.secret,{
            subject:user.email,
            expiresIn:auth.jwt.expiresIn
        })

        response.json({user,token})


    }
}

export default CreateSessionService