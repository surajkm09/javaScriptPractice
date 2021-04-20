const Express  = require('express');



const app = Express(); 


app.use((req,res,next)=>{

    console.log(req);
    next();

});

app.get('/',(req,res)=>{
    res.write("hello world");
    res.end();
});




module.exports = app  ;