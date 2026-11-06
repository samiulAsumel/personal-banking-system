'use strict';

const accountHolder = 'Samiul';
let balance = 5000;

function deposit(amount) {
  if (!Number.isFinite(amount) || amount <= 0) {
    console.log('Invalid deposit amount. Please enter a positive number.');
    return;
  }
  balance += amount;
  console.log('Deposited amount: ', amount);
  console.log('Balance: ', balance);
}

function withdraw(amount) {
  if (!Number.isFinite(amount) || amount <= 0) {
    console.log('Invalid withdrawal amount. Please enter a positive number.');
    return;
  }
  if (amount > balance) {
    console.log('Insufficient balance. Withdrawal amount exceeds available balance.');
    return;
  }
  balance -= amount;
  console.log('Withdrawn amount: ', amount);
  console.log('Balance: ', balance);
}

function showBalance() {
  console.log('Account Holder: ', accountHolder);
  console.log('Current Balance: ', balance);
}

showBalance();
deposit(2000);
withdraw(1500);
withdraw(10000);
deposit(-500);
showBalance();
