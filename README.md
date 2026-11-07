# Personal Banking System

A small Node.js demo of a single in-memory bank account with deposit, withdraw, and balance display.

## Prerequisites

- Node.js (tested on v22.21.0)

## Usage

Edit `accountHolder` and the sample calls at the bottom of `index.js`, then run:

```bash
node index.js
```

Example output for the default data:

```
Account Holder:  Samiul
Current Balance:  5000
Deposited amount:  2000
Balance:  7000
Withdrawn amount:  1500
Balance:  5500
Insufficient balance. Withdrawal amount exceeds available balance.
Invalid deposit amount. Please enter a positive number.
Account Holder:  Samiul
Current Balance:  5500
```

## Rules

- The opening balance is 5000.
- Deposit and withdrawal amounts must be finite numbers greater than 0.
- A withdrawal larger than the current balance is rejected.
- Rejected operations print a message and leave the balance unchanged.

## Limitations

- The balance lives in memory only and resets on every run.
- There is a single account, no authentication, and no transaction history.
- Amounts use floating-point numbers, which is not safe for real money.
- There are no automated tests yet.
