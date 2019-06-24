


var Bank = function (balance) {
	this.balance= balance ; 
}



Bank.prototype.getBalance = function() {
	return this.balance

};



var b = new Bank("10000");

console.log(b.getBalance());




var b1 = {

	balance : 1000 

};


console.log(Bank.prototype.getBalance.apply(b1));