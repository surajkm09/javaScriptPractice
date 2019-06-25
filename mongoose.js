var mongoose= require('mongoose');

mongoose.connect('mongodb://root:root@localhost:27017/admin');

var db = mongoose.connection;
db.on('error',(error)=>{
    console.error(error);
});


    var kittySchema = mongoose.Schema({name:String});
    kittySchema.methods.speak =function()
    {
        var greeting = this.name ?"meow my name is "+this.name :"i dont have a name";
        console.log(greeting);
    }
    var Kitten = mongoose.model('Kitten',kittySchema,'cats');
    module.exports = Kitten ; 


