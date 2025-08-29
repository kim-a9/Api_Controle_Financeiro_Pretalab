import { GoogleGenAI } from "@google/genai";
import { ITransaction } from "../database/MongooseTransactionModel";
import { TransactionRepository } from "../repository/transactionRepository";
import { TransactionService } from "./transactionService";
import { IPurchase } from "../database/MongoosePurchaseModel";
import { PurchaseRepository } from "../repository/purchaseRepository";
import { PurchaseService } from "./purchaseService";
import dotenv from "dotenv";
dotenv.config();

const transactionRepo = new TransactionRepository();
const transactionService = new TransactionService(transactionRepo);
const purchaseRepo = new PurchaseRepository();
const purchaseService  = new PurchaseService(purchaseRepo);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateText = async (prompt: string) =>
  ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

export const aiModel = async (prompt: any[]) => {
  const model = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return model;
};

export const financialAssistant = async (prompt: any[]) => {
  const transactions: ITransaction[] = await transactionService.getTransactions();
  const purchase: IPurchase[] = await purchaseService.getPurchases();

  const systemInstruction = 'Qual foi meu maior gasto este mês?';

  const data = [...transactions, ...purchase]

  const model = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: `${systemInstruction} ${JSON.stringify(data)}`,
    },
  });

  return model;
};

