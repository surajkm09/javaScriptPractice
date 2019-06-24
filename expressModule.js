const Express = require('express');


var app = Express() ; 



app.get('/home',(req,res)=>{
    res.write('inside home of get ');
    res.end();


});


module.exports= app ; 