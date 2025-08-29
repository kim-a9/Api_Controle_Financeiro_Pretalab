import { Schema, model, Document } from 'mongoose';

export const purchaseSchema: Schema = new Schema({
    date: {type: Date, default: Date.now, required: true},
    total: {type: Number, required: true},
    items: [{
        productId: {type: String, required: true},
        quantity: {type: Number, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true}
    }],
});
export interface IPurchaseDetails {
    productId: string, 
    quantity: number,
    name: string,
    price: number
}
export interface IPurchase extends Document {
    id?: string;
    date: Date;
    total: number;
    items: IPurchaseDetails[];
}

export const PurchaseModel = model<IPurchase>('Purchase', purchaseSchema);