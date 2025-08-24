import { Schema, model, Document } from 'mongoose';

export const purchaseSchema: Schema = new Schema({
    date: {type: Date, required: true},
    total: {type: String, required: true},
    items: {
        productId: Schema.Types.ObjectId,
        quantity: {type: Number, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true}
    }
});

export interface IPurchase extends Document {
    id?: string;
    date: Date;
    total: number;
    items: {
        productId: string, 
        quantity: number,
        name: string,
        price: number,
        ref: 'Purchase'
    }
}
export const PurchaseModel = model<IPurchase>('Purchase', purchaseSchema);