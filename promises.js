function addTwoDigits(a,b){
    return new Promise((resovle,reject)=>{


        if(typeof a !=='number' || typeof b !== 'number')
        {
            reject('both the parameters should be numbers')
        }
        else{
            resovle(a+b);
        }



    });

}

addTwoDigits(1,2).then((res)=>{
    console.log('the sum is '+res);

}).catch((err)=>{

    console.log('there is this error '+ err);
});


console.log('program is ending !!');