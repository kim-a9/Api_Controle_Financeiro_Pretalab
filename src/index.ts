import express from 'express';
import { transactions } from "./data";
import { TransactionController } from "./controllers/transactionsController";
import { PurchasesController } from "./controllers/purchasesController";
import { ProductsController } from "./controllers/productsController";
import { aiChat } from "./controllers/aiController";
import { aiResponse } from "./controllers/aiController";

import { TransactionService } from  "./service/transactionService";
import { PurchaseService } from  "./service/purchaseService";
import { ProductService } from "./service/productService";

import { TransactionRepository } from "./repository/transactionRepository";
import { PurchaseRepository } from './repository/purchaseRepository';
import { ProductRepository } from './repository/productsRepository';

const transactionRepository = new TransactionRepository();
const purchaseRepository = new PurchaseRepository();
const productRepository = new ProductRepository();

const transactionService = new TransactionService(transactionRepository);
const purchaseService = new PurchaseService(purchaseRepository);
const productService = new ProductService(productRepository);

const transactionController = new TransactionController(transactionService);
const purchaseController = new PurchasesController(purchaseService);
const productController = new ProductsController(productService);



const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Transactions API v1" });
});

app.get("/transactions", (req, res) => {
  res.json({ transactions });
});

app.post("/transactions", (req, res) => 
transactionController.CreateTransactionController(req, res));

app.get("/transactions/:id", (req, res) => 
transactionController.GetTransactionByIdController(req, res));

app.get("/transactions", (req, res) => 
transactionController.GetTransactionsController(req, res));

app.get("/purchases", (req, res) => 
  purchaseController.GetPurchaseController(req, res));

app.get("/purchases/:id", (req, res) => 
purchaseController.GetPurchaseByIdController(req,res));

app.post("/purchases", (req, res) => 
purchaseController.CreatePurchaseController(req,res));

app.post("/products", (req, res) =>
productController.CreateProductController(req, res));

app.get("/products", (req, res) =>
productController.GetProductsController(req, res));

app.post("/ai", async (req, res) => aiChat(req, res));

app.post('/chat', async (req, res) => aiResponse(req, res));







export default app;