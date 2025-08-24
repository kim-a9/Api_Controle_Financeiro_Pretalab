import { IPurchase } from "../database/MongoosePurchaseModel";
import { PurchaseRepository } from "../repository/purchaseRepository";

export class PurchaseService {
    private purchaseRepository: PurchaseRepository;

    constructor(purchaseRepository: PurchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }

    public async createPurchase(data: IPurchase): Promise<IPurchase> {
        return await this.purchaseRepository.create(data);
    }
    public async getPurchases(data: IPurchase[]): Promise<IPurchase[] | null> {
        return await this.purchaseRepository.getPurchases(data);
    }
    public async getPurchasesById(id: string): Promise<IPurchase | null> {
        return await this.purchaseRepository.getById(id);
    }
}