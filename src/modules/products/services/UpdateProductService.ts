import { ProductRepository } from './../typeorm/repositories/ProductRepository';
import { getCustomRepository } from 'typeorm';
import { Product } from './../typeorm/entities/Product';
import AppError from '@shared/errors/AppError';

interface IRequest{
    id:string;
    name:string;
    quantity:number;
    price:number
}

class UpdateProductService{
    public async execute({id,name,quantity,price}:IRequest):Promise<Product>{
        const productRepository = getCustomRepository(ProductRepository);

        const product= await productRepository.findOne(id);
        if(!product){
            throw new AppError("Product not found")
        }

        const productExists = await productRepository.findByName(name)
        if(productExists && name != product.name){
            throw new AppError("Product name Exist")
        }

        product.name=name;
        product.quantity=quantity;
        product.price=price;

        await productRepository.save(product)

        return product

    }
}

export default UpdateProductService