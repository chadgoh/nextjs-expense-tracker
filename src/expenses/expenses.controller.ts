import { Controller, Get } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense } from './expense.model';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expenseService: ExpensesService) {}

  @Get()
  getAllExpenses(): Expense[] {
    return this.expenseService.getAllExpenses();
  }
}
