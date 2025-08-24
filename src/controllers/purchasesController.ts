import { Request, Response } from 'express';
import { PurchaseService } from '../service/purchaseService';

export class PurchasesController {
    private purchaseService: PurchaseService;

    constructor(purchaseService: PurchaseService) {
        this.purchaseService = purchaseService;
    }

    public async CreatePurchaseController(req: Request, res: Response): Promise<void> {
        const purchase = await this.purchaseService.createPurchase(req.body);

        if(!purchase){
            throw new Error('Nenhuma compra encontrada.');
        }
        res.status(201).json({purchase});
    }
    public async GetPurchaseController(req: Request, res: Response): Promise<void> {
        const purchases = await this.purchaseService.getPurchases(req.body);
        res.status(201).json({purchases});
    }

    public async GetPurchaseByIdController(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const purchase = await this.purchaseService.getPurchasesById(id);

        res.status(201).json({purchase});
    }

}