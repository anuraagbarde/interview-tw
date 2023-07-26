import Amount from './Amount.js';

export interface Payers {
  userId: string;
  amount: Amount;
}

export interface PayeesMetadata {
  percentage?: number;
}

export type Payees = Payers & PayeesMetadata;

export default class Expense {
  id: string;
  payers: Array<Payers>;
  payees: Array<Payees>;

  constructor({ id, payers, payees }: Expense) {
    this.id = id;
    this.payers = payers;
    this.payees = payees;
  }
}
