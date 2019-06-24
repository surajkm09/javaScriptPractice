function add(arg1,arg2) {
	return arg1+arg2;
}


var array=[3,4]; 

var sum = add.apply(array);

console.log(sum);