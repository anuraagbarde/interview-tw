import Expense from './Expense.js';

export default class Group {
  id: string;
  expenses: Array<Expense>;

  constructor({ id, expenses }: Group) {
    this.id = id;
    this.expenses = expenses;
  }
}
