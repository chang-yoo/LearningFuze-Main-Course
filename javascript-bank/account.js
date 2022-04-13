/* exported Account */
function Account (number, holder){
  this.number = number;
  this.holder = holder;
  this.transactions = []
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)){
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
}

Account.prototype.withdraw = function (amount){
  if (amount > 0 && Number.isInteger(amount)){
    var withdraw = new Transaction('withdrawal', amount)
    this.transactions.push(withdraw);
    return true;
  } else {
    return false
  }
}

Account.prototype.getBalance = function (){
  var deposits = [];
  var withdraws = [];
    for (var i = 0; i < this.transactions.length; i++){
      if (this.transactions[i].type === 'deposit'){
        deposits.push(this.transactions[i]);
      } else if (this.transactions[i].type === 'withdrawal') {
        withdraws.push(this.transactions[i]);
      } else {
        0;
      }
    }
  var totalDeposit = 0;
  for (var i = 0; i < deposits.length; i++){
    totalDeposit += deposits[i].amount;
  }
  var totalWithdraw = 0;
  for (var i = 0; i < withdraws.length; i++){
    totalWithdraw += withdraws[i].amount;
  }
  var balance = totalDeposit - totalWithdraw;
  return balance;
}
