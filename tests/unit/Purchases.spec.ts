import { PurchaseService } from "../../src/service/purchaseService";
import { PurchaseRepository } from '../../src/repository/purchaseRepository';
describe('Purchases - unit', () => {
    it('deve criar uma nova purchase', async () => {
        const newPurchase = {
            id: "1",
            date: "2024-07-28T14:45:12Z",
            total: 7850,
                items: {
                    quantity: 1,
                    name: "Notebook Gamer Pro",
                    price: 7500
            },
        };
        const mockRepository = {
            create: jest.fn().mockResolvedValue(newPurchase),
            getPurchases: jest.fn(),
            getById: jest.fn(),
        };
        const purchaseService = new PurchaseService(mockRepository as any);
        
        const purchase = await purchaseService.createPurchase(newPurchase as any);

        expect(purchase).toMatchObject(newPurchase);
        expect(mockRepository.create).toHaveBeenCalledTimes(1);
        expect(mockRepository.create).toHaveReturnedTimes(1);
    });

    it('deve buscar todas as purchases registradas com sucesso', async () => {
        const newPurchase = [{
            id: "1",
            date: "2024-07-28T14:45:12Z",
            total: 7850,
                items: {
                    quantity: 1,
                    name: "Notebook Gamer Pro",
                    price: 7500
            },
        },
            {
                id: "2",
                date: "2024-07-28T14:45:12Z",
                total: 7850,
                    items: {
                        quantity: 1,
                        name: "Mouse Sem Fio Ultra-leve",
                        price: 350
                },
            
        }];
        const mockRepository = {
            create: jest.fn(),
            getPurchases: jest.fn().mockResolvedValue(newPurchase),
            getById: jest.fn(),
        };
        const purchaseService = new PurchaseService(mockRepository as any);

        const getPurchase = await purchaseService.getPurchases();

        expect(getPurchase).toMatchObject(newPurchase);
        expect(getPurchase).toHaveLength(2);
    });

    it('deve buscar purchase por id', async () => {
         const newPurchase = {
                id: "2",
                date: "2024-07-28T14:45:12Z",
                total: 7850,
                    items: {
                        quantity: 1,
                        name: "Mouse Sem Fio Ultra-leve",
                        price: 350
                },
        };
        const mockRepository = {
            create: jest.fn(),
            getPurchases: jest.fn(),
            getById: jest.fn().mockResolvedValue(newPurchase),
        };
        const purchaseService = new PurchaseService(mockRepository as any);

        const getPurchaseId = await purchaseService.getPurchasesById('2');
        console.log(getPurchaseId);

        expect(getPurchaseId).toHaveProperty("id", "2");
    });


});
