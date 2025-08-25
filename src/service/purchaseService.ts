import { PurchaseRepository } from "../repository/purchaseRepository";
import { Purchase } from "../../src/entities/Purchase";


export class PurchaseService {
    private purchaseRepository: PurchaseRepository;

    constructor(purchaseRepository: PurchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }

    public async createPurchase(data: Purchase): Promise<Purchase> {
        return await this.purchaseRepository.create(data);
    }
    public async getPurchases(data: Purchase[]): Promise<Purchase[] | null> {
        return await this.purchaseRepository.getPurchases(data);
    }
    public async getPurchasesById(id: string): Promise<Purchase | null> {
        return await this.purchaseRepository.getById(id);
    }
}