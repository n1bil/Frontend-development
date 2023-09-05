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

// first way
// const bankAccount = {
//     accountNumber: 123456789 ,
//     name: "Frank",
//     balance: 0,
//     deposit: function (add) {
//         this.balance += add;
//         return add;
//     },
//     withdraw: function (subtract) {
//         if (this.balance >= subtract) {
//             this.balance -= subtract;
//             return subtract;
//         }
//     },
//     checkBalance: function () {
//         console.log(`Current account: $${this.balance}`);
//     },
// };

const bankAccount = {
    accountNumber: 123456789 ,
    name: "Frank",
    balance: 1000,
    deposit: function (add) {
        add > 60000
            ? console.log('proof of legality of income is required')
            : this.balance += add;
    },
    withdraw(subtract) {
        this.balance >= subtract && subtract > 0
            ? this.balance -= subtract
            : console.log('Not enough money on your balance or you entered negative number');
    },
    checkBalance: () => {
        console.log(`Current your balance equal: ${bankAccount.balance}`);
    }
};

// mini test
// bankAccount.checkBalance();
// console.log(`${bankAccount.name} withdrew ${bankAccount.withdraw(200)}`);
// bankAccount.checkBalance();
// console.log(`${bankAccount.name} deposited ${bankAccount.deposit(300)}`);
// bankAccount.checkBalance();
// console.log(`${bankAccount.name} withdrew ${bankAccount.withdraw(250)}`);
// bankAccount.checkBalance();

bankAccount.checkBalance();
bankAccount.deposit(500);
bankAccount.checkBalance();
bankAccount.withdraw(700);
bankAccount.checkBalance();
bankAccount.withdraw(1000);
bankAccount.checkBalance();
