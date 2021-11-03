// Business Logic

  function BankAccount(user) {
    this.user = user;
    this.balance = 0;
  }

  function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  User.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
  };

  BankAccount.prototype.processDeposit = function(amount) {
    return this.balance = this.balance += amount;
  }

  BankAccount.prototype.processWithdraw = function(amount) {
    return this.balance = this.balance -= amount;
  }

  const user4 = new User("M", "J");
  const account4 = new BankAccount(user4);
  account4.processDeposit(5);
  account4.processWithdraw(2);




