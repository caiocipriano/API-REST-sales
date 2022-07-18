import AppError from '@shared/errors/AppError';
import {PrismaClient} from '@prisma/client'
import express,{ Request, Response } from 'express';

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

class CreateProductService{
    public async execute(request:Request,response:Response){
        const {name,price,quantity} = request.body
        const productExist = await prisma.product.findUnique({where:{name}})

        if(productExist){
            throw new AppError("Product Exist")
        }

        const product = await prisma.product.create({
            data:{
            name,
            price,
            quantity
        }
        })
        response.json(product)
    }
}

export default CreateProductService