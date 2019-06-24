function returnPromise(data) {
	return new Promise(
		(resovle,reject)=>{

			setTimeout(()=>{resovle('data has arrived');},2000


		);
})
}


returnPromise('soas').
then((data)=>{
	console.log(data);

});

console.log("hello from main");

