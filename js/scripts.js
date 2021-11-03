// Business Logic

function BankAccount(user, accountNumber) {
  this.user = user;
  this.accountNumber = accountNumber;
  this.balance = 0;
}

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};





