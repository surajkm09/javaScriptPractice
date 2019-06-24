const Express = require('express');


const app = Express() ; 

app.use('/home',(req,res,next)=>{
    console.log('this is a general method called use');
    res.write('hello i am use nice to meet you \n'); 
    next();


});

app.get('/home',(req,res,next)=>{
    res.write('i am second get function \n');
    next();
    
});

app.get('/home',(req,res)=>{
    res.write('I am get i occur only for specific requests');
    res.end();
});



module.exports=app ; 