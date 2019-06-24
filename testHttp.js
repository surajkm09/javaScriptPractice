const http = require('http');
const app = require('./expressApp');


var server = http.createServer(app);

server.on('listening',()=>{
    console.log('the server has started listening !!');
}); 
server.on('error',(err)=>{
    console.log('an errror has occured');
    console.log(err);
})



server.listen(3333);