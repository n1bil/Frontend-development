/*
It's necessary to create an object bankAccount(debit), producing bankAccount
with the following properties:
    
    1. accountNumber (for number account);
    2. accountHolderName (for holder name account);
    3. balance field (print balance);
    4. deposit() function (description how to transfer money to account);
    5. withdraw() function (money from account);
    6. checkBalance() function
*/

const bankAccount = {
    accountNumber: 123456789 ,
    name: "Frank",
    balance: 0,
    deposit: function (add) {
        this.balance = this.balance + add;
        return add;
    },
    withdraw: function (subtract) {
        if (this.balance >= subtract) {
            this.balance -= subtract;
            return subtract;
        }
    },
    checkBalance: function () {
        console.log(`Current account: $${this.balance}`);
    },
};

// mini test
bankAccount.checkBalance();
console.log(`${bankAccount.name} withdrew ${bankAccount.withdraw(200)}`);
bankAccount.checkBalance();
console.log(`${bankAccount.name} deposited ${bankAccount.deposit(300)}`);
bankAccount.checkBalance();
console.log(`${bankAccount.name} withdrew ${bankAccount.withdraw(250)}`);
bankAccount.checkBalance();