function add(arg1,arg2) {
	

		if (typeof arg1 !=='number' || typeof arg2!=='number') {
			throw  {
				name : "TypeError",
				message:"args are not numbers"
			}
		}

	
	
}




try {

add(10,"10.0");

}
catch(e)
{
	console.log(e.name+" "+e.message);
}
