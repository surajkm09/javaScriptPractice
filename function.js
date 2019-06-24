



/*var bank= {

	balance:0 ,	
	incrementBalance: function(inc){

			this.balance+=typeof inc === 'number'?inc :1;

	}


}; 


bank.incrementBalance(10);


console.log(bank.balance);

bank.incrementBalance('a'); 

console.log(bank.balance);*/


var obj = {

	num:10 

} ; 

obj.double=function(){


	console.log(this);
	var objValues = this ; 

	function helper(){

		console.log(objValues);
		objValues.num = objValues.num + objValues.num ; 

		

	}
	
	helper();
	console.log(this.num);

	


}

obj.double();