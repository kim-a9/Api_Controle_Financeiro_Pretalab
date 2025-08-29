import {transactions} from '../../src/data';
import {TransactionService} from "../../src/service/transactionService";
import {TransactionRepository} from "../../src/repository/transactionRepository";


describe('Transactions API - Testes unitários', () =>{

it('deve retornar uma array de transações', () => {
   expect(transactions.length).toBeGreaterThan(0);
   });

   it('deve criar uma nova transaction com sucesso', async () => {
      const newTransaction = {
         id: "10",
         date: "2024-08-02T15:00:00Z",
         description: "Ingressos para show",
         amount: 250,
         type: "expense",
         category: "Lazer",
      };
      const mockRepository = {
         create: jest.fn().mockResolvedValue(newTransaction),
         getAll: jest.fn(),
         getById: jest.fn(),
      };
           const transactionService = new TransactionService(mockRepository as any);
           
           const transaction = await transactionService.createTransactions(newTransaction as any);
   
           expect(transaction).toMatchObject(newTransaction);
           expect(mockRepository.create).toHaveBeenCalledTimes(1);
           expect(mockRepository.create).toHaveReturnedTimes(1);
       });

});
  