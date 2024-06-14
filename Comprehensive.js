// Define a class for BankAccount
class BankAccount {
    constructor(ownerName, initialBalance = 0) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(Deposit of $${amount} successful. New balance is $${this.balance});
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(Withdrawal of $${amount} successful. New balance is $${this.balance});
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Withdrawal amount must be greater than zero.");
        }
    }

    checkBalance() {
        console.log(Current balance for ${this.ownerName}: $${this.balance});
    }
}

// Example usage of the BankAccount class
let account1 = new BankAccount("John Doe", 1000);
account1.checkBalance(); // Output: Current balance for John Doe: $1000
account1.deposit(500);   // Output: Deposit of $500 successful. New balance is $1500
account1.withdraw(200);  // Output: Withdrawal of $200 successful. New balance is $1300
account1.withdraw(1500); // Output: Insufficient funds.
account1.checkBalance(); // Output: Current balance for John Doe: $1300
