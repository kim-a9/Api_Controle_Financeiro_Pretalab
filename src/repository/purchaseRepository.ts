import { IPurchase, PurchaseModel } from "../database/MongoosePurchaseModel";
import { Purchase } from "../../src/entities/Purchase";


export class PurchaseRepository {

    public async create(data: Purchase): Promise<Purchase> {
        const newPurchase = new PurchaseModel(data);
        return await newPurchase.save();
    };

    public async getPurchases(data: Purchase[]): Promise<Purchase[] | null> {
        return await PurchaseModel.find();
    };

    public async getById(id: string): Promise<Purchase | null> {
        return await PurchaseModel.findById(id);
    };

}