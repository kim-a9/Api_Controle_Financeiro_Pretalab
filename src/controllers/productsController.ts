import { Request, Response } from 'express';
import { ProductService } from '../service/productService';

export class ProductsController {
    private productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }

    public async CreateProductController(req: Request, res: Response): Promise<void> {
        const product = await this.productService.createProduct(req.body);

        if(!product){
            throw new Error('Nenhum produto encontrado.');
        }
        res.status(201).json({product});
    }

    public async GetProductsController(req: Request, res: Response): Promise<void> {
        const products = await this.productService.getProduct();
        res.status(200).json({products});
    }


    

}