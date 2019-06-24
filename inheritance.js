var stooage = {

	"firstName":"suraj",
	"lastName":"kumar"


};



if(typeof Object.beget !== 'function')
{
	Object.beget= function(o){

		var F = function (){} ;
		F.prototype = o;
		

		/*function F(){
			F.prototype=o;
		}*/
	return new F();
	}


}


var another_stooage = Object.beget(stooage);
another_stooage.firstName="sicsald";

for(name in another_stooage)
{	

	if(another_stooage.hasOwnProperty(name))
	{
		console.log("name : "+ name + " value:"+another_stooage[name]);
	}

}