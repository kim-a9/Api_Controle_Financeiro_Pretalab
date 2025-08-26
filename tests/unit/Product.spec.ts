import { ProductService } from "../../src/service/productService";

describe('Product - unit test', () => {
    it('deve criar um produto com sucesso', async () => {
        const newProduct = {
            productId: '1',
            quantity: 1,
            name: "Webcam Full HD",
            price: 400
        };
    
        const mockRepository = {
            create: jest.fn().mockResolvedValue(newProduct),
            getProducts: jest.fn(),
        };
        const productService = new ProductService(mockRepository as any);
        
        const product = await productService.createProduct(newProduct as any);

        expect(product).toMatchObject(newProduct);
        expect(mockRepository.create).toHaveBeenCalledTimes(1);
        expect(mockRepository.create).toHaveReturnedTimes(1);

    });

    it('deve buscar todos os produtos registrados', async () => {
        const newProduct = [{
            productId: '1',
            quantity: 1,
            name: "Webcam Full HD",
            price: 400
        },
        {
            productId: '2',
            quantity: 1,
            name: "Headset 7.1 Surround",
            price: 600
        }];
            
        const mockRepository = {
            create: jest.fn().mockResolvedValue(newProduct),
            getProducts: jest.fn().mockResolvedValue(newProduct),
        };
        const productService = new ProductService(mockRepository as any);
        
        const products = await productService.getProduct();
    
            expect(products).toMatchObject(newProduct);
            expect(products).toHaveLength(2);
        });


    
});
