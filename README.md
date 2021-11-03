## Tests
Describe: BankAccount()

Test: It should return an object with properties user, accountNumber and balance.
Code: const account1 = new BankAccount("user1", 1);
Expected Output: account1 = {user: 'user1', accountNumber: 1, balance: 0}

Describe: User()

Test: It should return an object with properties first and last name.
Code: const user1 = new User("Sam", "Lewis");
Expected Output: user1 = {firstName: 'Sam', lastName: 'Lewis'}

User.prototype.fullName = function ()

Test: It should return the first name + last name.
Code: const user1.fullName();
Expected Output: Sam Lewis