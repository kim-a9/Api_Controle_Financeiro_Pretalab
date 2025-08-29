import { Request, Response } from 'express';
import { ProductService } from '../service/productService';

export class ProductsController {
    private productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }


    public async GetProductsController(req: Request, res: Response): Promise<void> {
        const products = await this.productService.getProduct();
        
        res.status(200).json({products});
    }


    

}