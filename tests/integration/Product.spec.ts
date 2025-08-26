import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../src/index';
import { ProductModel } from '../../src/database/MongooseProductModel';

describe('Purchase - integration', () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL_TEST!);
    });

    beforeEach(async () => {
        await ProductModel.deleteMany({});
    });

     afterAll(async () => {
        await ProductModel.deleteMany({});
        await mongoose.connection.close();
    });

    it('deve criar um produto e retornar 201', async () =>{
            const res = await request(app).post('/products').send({
                productId: '1',
                quantity: 1,
                name: "Webcam Full HD",
                price: 400
            });
    
            expect(res.status).toBe(201);
        });

    it('deve deve retornar todas as purchases e retornar 200', async () =>{
         const res = await request(app).get('/products');
        
        expect(res.statusCode).toBe(200);
        
    });
        










});