import { ProductRepository } from "../repository/productsRepository";
import { IProduct } from "../database/MongooseProductModel";
import axios from 'axios';

const apiProd = process.env.API_PRODUCTS;

export class ProductService {

    public async getProduct(): Promise<IProduct[]> {
        const products = await axios.get<IProduct[]>(`${apiProd}`)
        return products.data;
    
    }
    
}