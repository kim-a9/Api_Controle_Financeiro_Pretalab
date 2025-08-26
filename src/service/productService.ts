import { ProductRepository } from "../repository/productsRepository";
import { IProduct } from "../database/MongooseProductModel";


export class ProductService {
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    public async createProduct(data: IProduct): Promise<IProduct> {
        return await this.productRepository.create(data);
    }
    public async getProduct(): Promise<IProduct[] | null> {
        return await this.productRepository.getProducts();
    }
    
}