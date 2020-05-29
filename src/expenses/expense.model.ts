export interface Expense {
  id: string;
  title: string;
  description: string;
  amount: number;
  type: ExpenseType;
}

export enum ExpenseType {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}
