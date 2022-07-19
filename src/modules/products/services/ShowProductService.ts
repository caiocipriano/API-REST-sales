import express,{ Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
app.use(express.json())
const prisma = new PrismaClient()

class ShowProductService{
    public async findById(request:Request, response:Response){
        const {id}= request.params

        const productExist = await prisma.product.findUnique({where:{Id:Number(id)}})

        if(!productExist){
            response.json({message:"Não Encontrado"})
        }
        const product =await prisma.product.findUnique({where:{Id:Number(id)}})
        return response.json(product)
    }
}

export default ShowProductService