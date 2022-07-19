import express,{ Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import AppError from '@shared/errors/AppError';

const app = express()
app.use(express.json())
const prisma = new PrismaClient()

class ListProductService{
    public async execute(request:Request, response:Response){
        const products = await prisma.product.findMany()
        return response.json(products)
    }
}

export default ListProductService