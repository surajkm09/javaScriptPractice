var bank = function () {
	var balance= 0 ; 

	console.log('executing');


	return {

		getBalance:function(){

			return balance ;
		},
		incBalace:function(inc){
			balance+=inc ;
		}

	};
	
}();


console.log(bank.getBalance());



/*var a1 =bank();*/ 


console.log(a1.getBalance());
console.log(a1.incBalace(100));
console.log(a1.getBalance());


var a2 = bank() ; 


console.log(a1===a2);

console.log(a2.getBalance());