## Tests
Describe: BankAccount()

Test: It should return an object with properties user and balance.
Code: const account1 = new BankAccount("user1");
Expected Output: account1 = {user: 'user1', balance: 0}

Describe: User()

Test: It should return an object with properties first and last name.
Code: const user1 = new User("Sam", "Lewis");
Expected Output: user1 = {firstName: 'Sam', lastName: 'Lewis'}

User.prototype.fullName = function ()

Test: It should return the first name + last name.
Code: user1.fullName();
Expected Output: Sam Lewis

BankAccount.prototype.processDeposit = function(amount)

Test: It should return a new (higher) balance.
Code: account1.processDeposit(5);
Expected Output: 5

BankAccount.prototype.processWithdraw = function(amount)

Test: It should return a new (higher) balance.
Code: account1.processDeposit(2);
Expected Output: 3
