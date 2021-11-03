// Business Logic

function BankAccount(user) {
  this.user = user;
  this.accountNumber = assignAcctNumber();
  this.balance = 0;
}

function assignAcctNumber() {
  let accountNumber = 0;
  accountNumber = accountNumber += 1;
  return accountNumber;
}

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

const user4 = new User("M", "J");
const account4 = new BankAccount(user4);





