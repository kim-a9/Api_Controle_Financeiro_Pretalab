import  { model, Schema, Document } from 'mongoose';

export interface IChatInterationSchema {
  role: string;
  text: string;
  createdAt: Date;

}
const chatInterationSchema = new Schema<IChatInterationSchema>({
  role: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export interface IChatSchema extends Document {
  chatContext: IChatInterationSchema[],
}
const chatInfoSchema = new Schema<IChatSchema>({
  chatContext: { type: [chatInterationSchema], default: [] },
});


export const chatInterationModel = model<IChatInterationSchema>('Chat', chatInfoSchema);