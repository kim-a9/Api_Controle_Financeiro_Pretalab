import express from 'express';
import { transactions } from "./data";
import { TransactionController } from "./controllers/transactionsController";
import { PurchasesController } from "./controllers/purchasesController";
import { TransactionService } from  "./service/transactionService";
import { PurchaseService } from  "./service/purchaseService";
import { TransactionRepository } from "./repository/transactionRepository";
import { PurchaseRepository } from './repository/purchaseRepository';

const transactionRepository = new TransactionRepository();
const purchaseRepository = new PurchaseRepository();

const transactionService = new TransactionService(transactionRepository);
const purchaseService = new PurchaseService(purchaseRepository);

const transactionController = new TransactionController(transactionService);
const purchaseController = new PurchasesController(purchaseService);


const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Transactions API v1" });
});

app.get("/transactions", (req, res) => {
  res.json({ transactions });
});

app.get("/transactions/:id", (req, res) => 
transactionController.GetTransactionByIdController(req, res));

app.post("/transactions", (req, res) => 
transactionController.CreateTransactionController(req, res));


app.get("/purchases", (req, res) => 
  purchaseController.GetPurchaseController(req, res));

app.get("/purchases/:id", (req, res) => 
purchaseController.GetPurchaseByIdController(req,res));

app.post("/purchases", (req, res) => 
purchaseController.CreatePurchaseController(req,res));




export default app;