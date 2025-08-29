import { ProductModel } from "../database/MongooseProductModel";
import { products, IProduct } from "../products";

export class ProductRepository {

    public async getProducts(): Promise<IProduct[]> {
        return products;
    };


}