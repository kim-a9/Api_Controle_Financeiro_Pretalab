import express from 'express';
import { transactions } from "./data";
import { mongoConnect } from '../src/database/MongooseConnection';
import { TransactionController } from "../src/controllers/transactionsController";
import { TransactionService } from  "../src/service/transactionService";
import { TransactionRepository } from "../src/repository/transactionRepository";

const transactionRepository = new TransactionRepository();
const transactionService = new TransactionService(transactionRepository);
const transactionController = new TransactionController(transactionService);

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



mongoConnect();


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


export default app;