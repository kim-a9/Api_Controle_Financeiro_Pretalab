import { Schema, model, Document } from 'mongoose';

export const purchaseSchema: Schema = new Schema({
    date: {type: Date, default: Date.now},
    total: {type: String, required: true},
    items: {
        productId: {type: String, required: true},
        quantity: {type: Number, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true}
    }
});


export interface IPurchase extends Document {
    id?: Schema.Types.ObjectId;
    date: string;
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