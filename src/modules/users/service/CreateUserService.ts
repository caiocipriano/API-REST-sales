import AppError from '@shared/errors/AppError';
import {PrismaClient} from '@prisma/client'
import express,{ Request, Response } from 'express';

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

class CreateUserService{
    public async execute(request:Request,response:Response){
        const {name,email,password} = request.body
        const userExist = await prisma.user.findFirst({where:{name}})
        
        if(userExist){
            response.json({message:"Usuario com este nome já Cadastrado"})
        }

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
        }
        })
        response.json(user)
    }
}

export default CreateUserService