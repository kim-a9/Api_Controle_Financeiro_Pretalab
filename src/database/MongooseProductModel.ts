import { Schema, model, Document } from 'mongoose';

export const productSchema: Schema = new Schema({
    productId: {type: String, required: true},
    quantity: {type: Number, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

export interface IProduct extends Document {
        productId: string, 
        quantity: number,
        name: string,
        price: number,
}
export const ProductModel = model<IProduct>('Product', productSchema);