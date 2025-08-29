import { IPurchase } from "../database/MongoosePurchaseModel";
import { PurchaseRepository } from "../repository/purchaseRepository";


export class PurchaseService {
    private purchaseRepository: PurchaseRepository;

    constructor(purchaseRepository: PurchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }

    public async createPurchase(data: Omit<IPurchase, 'id'>): Promise<IPurchase> {
        return await this.purchaseRepository.create(data);
    }
    public async getPurchases(): Promise<IPurchase[]> {
        return await this.purchaseRepository.getPurchases();
    }
    public async getPurchasesById(id: string): Promise<IPurchase | null> {
        return await this.purchaseRepository.getById(id);
    }
}