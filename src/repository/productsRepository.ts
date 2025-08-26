import { IProduct, ProductModel } from "../database/MongooseProductModel";


export class ProductRepository {

    public async create(data: IProduct): Promise<IProduct> {
        const product = new ProductModel(data);
        return await product.save();
    };

    public async getProducts(): Promise<IProduct[] | null> {
        return await ProductModel.find();
    };


}