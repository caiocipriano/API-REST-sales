import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";

export default class ProductController{
    public async findAll(request:Request, response:Response){
        const listProducts = new ListProductService()
        await listProducts.execute(request,response)
    }
    public async findById(request:Request, response:Response):Promise<Response>{
        const showProduct = new ShowProductService()
        const product = await showProduct.findById(request,response)
        return response.json(product)
    }
    public async create(request:Request, response:Response){
        const createService = new CreateProductService()
        createService.execute(request,response)
    }
    public async update(request:Request, response:Response):Promise<Response>{
        const updateService = new UpdateProductService()
        const product = await updateService.UpdateById(request,response)
        return response.json(product)
    }
    public async deleteById(request:Request,response:Response):Promise<Response>{
        const deleteService = new DeleteProductService()
        const products = await deleteService.DeleteById(request,response)
        return response.json([])
    }
}