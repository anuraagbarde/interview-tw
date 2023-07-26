# Design Payment Tracking system - Splitwise

## Requirements

1.  Creating Expenses
    1.  Any user can log an expense, only a single user can log an expense
    2.  The expense can be shared between multiple users
    3.  The expense can be shared using percentage weights
    4.  Subset of group users can be invloved in an expense
2.  Group summary -> who owes how much to whom?
3.  User summary -> How much the user has paid to whom

4.  Settling of expenses can be done in a group level
5.  Edit expenses is allowed
6.  Minimize payment transactions is optional -> optimising this
7.  Commenting on an expense
8.  Creating users
9.  Creating Groups

Extensible -> multiple users log an expense

### assumptions

Groups and users are created -> userid1 and userid2, groupid1
Create a mock in-memory database
Map<expenseId, Expense>

### Actors involved

### Enitites involved

Users
Groups
User many to many Groups
userGroupRelationShip <userId, GroupId>

### API Endpoints

1.  Creating Expenses
    1.  Any user can log an expense, only a single user can log an expense
    2.  The expense can be shared between multiple users
    3.  The expense can be shared using percentage weights
    4.  Subset of group users can be invloved in an expense
2.  Group summary -> who owes how much to whom?
3.  User summary -> How much the user has paid to whom

HTTPMETHOD ROUTE REQ RESPONSE

```typescript

//creating an expense
POST '/expense' {
  groupId: string;
  payers: [
    {
      userId: string;
      amount: number;
    }
  ],
  payees: [
    {
      userId: string;
      percentage?: number;
    }
  ],
} {
expenseId: string,
}

//user summary ->
GET '/user/:userid/summary' {}{
  userid: string;
  summary: {
  //   haveRecievedFrom?: [{
  //     userId: string;
  //     amount: number;
  //   }]
  //   haveOwedTo?: [{
  //     userId: string;
  //     amount: number;
  //   }]
    totalAmountOwed: number;
    totalAmountRecieved: number;
  }
}

```

### Models

```typescript
Amount {
  amount: number;
}

User {
  userId: string;
}

Group {
  groupId: string;
  expenses: Array<Expense>;
  // balance: Balance;
}

Expense {
  expenseId: string;
  payers: Array<{
    userId: string;
    amount: Amount;
  }>;
  payees: Array<{
    userId: string;
    amonut: Amount;
    percentage?: number;
  }>

}

Balance {
  userId: Array<{
    userId: string;
    amount: Amount;
  }>
}

GroupVsUserRelationship {
  groupId: string;
  userId: string;
}

```

```bash
npm init -y
npm i express dotenv typescript @tsconfig/node18 compression body-parser cors module-alias tstl
npm i -D typescript @types/express @types/node @types/compression @types/cors concurrently nodemon
npx tsc --init
```
