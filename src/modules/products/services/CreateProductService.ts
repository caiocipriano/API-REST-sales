import { ProductRepository } from './../typeorm/repositories/ProductRepository';
import { getCustomRepository } from 'typeorm';
import { Product } from './../typeorm/entities/Product';
import AppError from '@shared/errors/AppError';
interface IRequest{
    name:string,
    quantity:number,
    price:number
}


class CreateProductService{
    public async execute({name,quantity,price}:IRequest):Promise<Product>{
        const productRepository = getCustomRepository(ProductRepository);
        const productExist= await productRepository.findByName(name);

        if(productExist){
            throw new AppError("Product Exist")
        }

        const product = productRepository.create({
            name,
            quantity,
            price
        })

        await productRepository.save(product)

        return product

    }
}

export default CreateProductService