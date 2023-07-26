import { Payees, Payers } from 'models/Expense.js';
import * as GroupUserRelationshipRepo from '../repo/GroupUserRelationship.js';
import GroupService from './GroupService.js';

class UserService {
  getUserSummary(userId: string) {
    // const haveRecievedFrom: [
    //   {
    //     userId: string;
    //     amount: number;
    //   }
    // ] = this.#getRecievedFrom(userId);
    // const haveOwedTo: [
    //   {
    //     userId: string;
    //     amount: number;
    //   }
    // ] = this.#getOwedTo(userId);

    return {
      userId,
      summary: {
        totalAmountRecieved: this.#getRecievedFromAmount(userId),
        totalAmountOwed: this.#getOwedToAmount(userId),
      },
    };
  }

  #getRecievedFromAmount(userId: string): number {
    const groupIds = GroupUserRelationshipRepo.getGroupsFromUser(userId);
    const groups = GroupService.getGroups(groupIds);
    let listOfRecievedFrom: Array<Payees>[] = [];
    groups.forEach((group) => {
      group.expenses.forEach((expense) => {
        if (expense.payers.find((payer) => payer.userId === userId)) {
          listOfRecievedFrom.push(expense.payees);
        }
      });
    });

    const totalRecievedFrom: number = listOfRecievedFrom.reduce((totalAmount, listOfPayees) => {
      const totalLocalAmount = listOfPayees.reduce((localAmount, curr) => {
        localAmount += curr.amount.amount;
        return localAmount;
      }, 0);
      return (totalAmount += totalLocalAmount);
    }, 0);

    return totalRecievedFrom;
  }

  #getOwedToAmount(userId: string): number {
    const groupIds = GroupUserRelationshipRepo.getGroupsFromUser(userId);
    const groups = GroupService.getGroups(groupIds);
    let listOfOwedTo: Array<Payers> = [];
    groups.forEach((group) => {
      group.expenses.forEach((expense) => {
        expense.payees.forEach((payee) => {
          if (payee.userId === userId) {
            expense.payers.forEach((payer) => {
              listOfOwedTo.push({
                userId: payer.userId,
                amount: payee.amount,
              });
            });
          }
        });
      });
    });

    console.log('listOfOwedTo:', listOfOwedTo);

    const totalOwedTo: number = listOfOwedTo.reduce((totalAmount, payee) => {
      return totalAmount + payee.amount.amount;
    }, 0);

    return totalOwedTo;
  }
}

export default new UserService();
