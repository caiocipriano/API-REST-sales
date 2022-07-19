import express,{Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import AppError from '@shared/errors/AppError';

const app = express()
app.use(express.json())
const prisma = new PrismaClient()

class DeleteProductService{
    public async DeleteById(request:Request, response:Response){
        const {id}=request.params
        const productExist = await prisma.product.findUnique({where:{Id:Number(id)}})

        if(!productExist){
            throw new AppError("Product not found")
        }

        await prisma.product.delete({where:{Id:Number(id)}})
        response.json([])
    }
}

export default DeleteProductService