import Amount from '../models/Amount.js';
import Expense from '../models/Expense.js';
import Group from '../models/Group.js';

const newExpense = [
  new Expense({
    id: 'expense1',
    payers: [{ userId: 'user1', amount: new Amount({ amount: 200 }) }],
    payees: [
      { userId: 'user2', amount: new Amount({ amount: 100 }) },
      { userId: 'user3', amount: new Amount({ amount: 100 }) },
    ],
  }),
];
// console.log('newExpense:', newExpense);

const GROUP: Array<{
  groupId: string;
  group: Group;
}> = [
  {
    groupId: 'group1',
    group: new Group({
      id: 'group1',
      expenses: newExpense,
    }),
  },
];

// const group1 = GROUP.find((curr) => {
//   curr.groupId = 'group1';
// });

// group1?.group.expenses.push(
//   new Expense({
//     id: 'expense2',
//     payees: [{ userId: 'user2', amount: new Amount({ amount: 500 }) }],
//     payers: [
//       { userId: 'user1', amount: new Amount({ amount: 200 }) },
//       { userId: 'user3', amount: new Amount({ amount: 300 }) },
//     ],
//   })
// );

// console.log('GROUPTABLE:', GROUP);

// export const save = (groupUserRelationship: GroupVsUserRelationship): Boolean => {
//   GROUP_USER_RELATIONSHIP.push({
//     groupId: groupUserRelationship.groupId,
//     userId: groupUserRelationship.userId,
//   });
//   return true;
// };

export const getGroup = (groupId: string): Group => {
  const group = GROUP.find((curr) => {
    if (curr.groupId === groupId) {
      return true;
    }
    return false;
  });
  if (!group?.group) throw new Error('Group not found for id ' + groupId);
  return group.group;
};

export const getGroups = (groupIds: Array<string>): Array<Group> => {
  return groupIds.map((groupId) => getGroup(groupId));
};

// export const getUsersFromGroup = (groupId: string): Array<string> => {
//   return GROUP_USER_RELATIONSHIP.reduce((acc, curr) => {
//     if (curr.groupId === groupId) {
//       acc.push(curr.userId);
//     }
//     return acc;
//   }, [] as string[]);
// };
