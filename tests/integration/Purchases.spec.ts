import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../src/index';
import { PurchaseModel } from '../../src/database/MongoosePurchaseModel';


describe('Purchase - integration', () => {
    let prodId: mongoose.Types.ObjectId;

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL_TEST!);
    });

    beforeEach(async () => {
        await PurchaseModel.deleteMany({});

         const purchase = await PurchaseModel.create({
            date: "2024-07-28T14:45:12Z",
            total: 7850,
                items: {
                    productId: "1",
                    quantity: 1,
                    name: "Notebook Gamer Pro",
                    price: 7500
                }
        });
        
        prodId = purchase.id;

    });

     afterAll(async () => {
        await PurchaseModel.deleteMany({});
        await mongoose.connection.close();
    });

    it('deve criar uma purchase e retornar 201', async () =>{
        const res = await request(app).post('/purchases').send({
            date: "2024-07-28T14:45:12Z",
            total: 7850,
            items: {
                productId: "2",
                quantity: 1,
                name: "Mouse Sem Fio Ultra-leve",
                price: 350
            },
        });

        expect(res.status).toBe(201);
    });

    it('deve deve retornar todas as purchases e retornar 200', async () =>{
        const res = await request(app).get('/purchases');

        expect(res.statusCode).toBe(200);

    });

    it('deve retornar purchase pelo id correspondente', async () =>{
        const res = await request(app).get(`/purchases/${prodId}`);

        expect(res.statusCode).toBe(200);
    });



})