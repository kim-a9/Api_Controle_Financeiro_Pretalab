import { IPurchase, PurchaseModel } from "../database/MongoosePurchaseModel";

export class PurchaseRepository {

    public async create(data: IPurchase): Promise<IPurchase> {
        const newPurchase = new PurchaseModel(data);
        return await newPurchase.save();
    };

    public async getPurchases(data: IPurchase[]): Promise<IPurchase[] | null> {
        return await PurchaseModel.find();
    };

    public async getById(id: string): Promise<IPurchase | null> {
        return await PurchaseModel.findById(id);
    };

}