import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../src/index';
import { PurchaseModel } from '../../src/database/MongoosePurchaseModel';

describe('Purchase - integration', () => {

     beforeAll(async () => {
        await mongoose.createConnection(process.env.MONGO_URL_TEST!);
    });


    beforeEach(async () => {
        await PurchaseModel.deleteMany({});
    });

    afterAll(async () => {
   await PurchaseModel.deleteMany({});
    await mongoose.connection.close();
    }); 

    it('deve criar uma purchase e retornar 201', async () =>{
        const res = await request(app).post('/purchases').send({
            id: "1",
            date: "2024-07-28T14:45:12Z",
            total: 7850,
                items: {
                    quantity: 1,
                    name: "Notebook Gamer Pro",
                    price: 7500
            }
        });

        expect(res.status).toBe(200);
    })










})