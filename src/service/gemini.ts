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

  const systemInstruction = `Você é um assistente financeiro e vai analisar os dados informados, 
  conforme a solicitaçao do usuário. Os dados informados estão dentro de um array e possuem, 
  valor, categoria, data, descrição e tipo (entrada ou saída). Os dados informados são:`;

  const data = [... transactions, ... purchase]

  const model = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: `${systemInstruction} ${JSON.stringify(data)}`,
    },
  });

  return model;
};












// import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv";

// export const ai = new GoogleGenAI({
//     apiKey: process.env.GEMINI_API_KEY
// });

// export const generateText = async (prompt: string) => ai.models.generateContent({
//         model: 'gemini-2.5-flash',
//         contents: prompt,
//     });