import express,{ Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import AppError from '@shared/errors/AppError';

const app = express()
app.use(express.json())
const prisma = new PrismaClient()


class UpdateProductService{
    public async UpdateById(request:Request, response:Response){
        const {id} = request.params
        const {name, price,quantity}= request.body
        const productExist= await prisma.product.findUnique({where:{Id:Number(id)}});

        if(!productExist){
            throw new AppError("Product not found")
        }
        const product = await prisma.product.update({
            where:{Id:Number(id)},
            data:{
                name,
                price,
                quantity
            }
        })
        return response.json(product)
    }
}

export default UpdateProductService