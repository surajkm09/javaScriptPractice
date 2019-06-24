var http = require('http');

var app = require('./expressModule');

var server = http.createServer(app);
server.on('listening',()=>{
    console.log('server has started listening !!');
    

});


server.on('error',(error)=>{
console.log(error);

});


server.listen(3333);