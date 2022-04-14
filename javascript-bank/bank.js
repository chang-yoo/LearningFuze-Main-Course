/* exported Bank */

function Bank(){
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function(holder, balance){
  /*
  makes sure that the opening balance provided is a positive integer
creates a new account object, passing the current value of this.nextAccountNumber and holder as arguments
deposits balance into the new account
pushes the account object into this.accounts
increments this.nextAccountNumber
returns the number property of the successfully created account
*/
  if (balance > 0 && Number.isInteger(balance)){
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
}

Bank.prototype.getAccount = function (number){
  // find if this.accounts[i].number is === number
  // if not null
  for (var i = 0; i < this.accounts.length; i++){
    if (this.accounts[i].number === number){
       return this.accounts[i];
    }
  }
  return null;
}

Bank.prototype.getTotalAssets = function (){
  //add all balance of this.accounts
  var totalAssets = 0;
  for (var a = 0; a < this.accounts.length; a++){
    totalAssets += this.accounts[a].getBalance()
  }
  return totalAssets
};
