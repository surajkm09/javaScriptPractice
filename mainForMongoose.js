var Kitten = require('./mongoose'); 


var smallKitty = new Kitten({name:"fluffy"});
smallKitty.speak();
smallKitty.save((err)=>{
    if(err){
        console.log('error');
    }
    else {
        console.log('kitty is saved');
    }
});