Function.prototype.method = function(name,func) {
		this.prototype[name] = func ; 
		return this ; 
};




Number.method('integer',function(){

	return Math[this<0 ?'ceiling':'floor'](this); 
});


String.method('removeWhite',function(){


	return this.replace(' ','');
});




console.log("suraj kumar".removeWhite());
console.log((3/2).integer());




console.log('function prototype' + typeof(Number));