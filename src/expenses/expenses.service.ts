import { Injectable } from '@nestjs/common';
import { Expense } from './expense.model';

@Injectable()
export class ExpensesService {
  private expenses: Expense[] = [];

  getAllExpenses(): Expense[] {
    return this.expenses;
  }
}
