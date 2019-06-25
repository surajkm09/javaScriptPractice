var http = require('http');

const app = require('./demoExpress');



var server = http.createServer(app);


server.on('listening',()=>
{
    console.log('server has started to listen ');
});
server.on('error',(err)=>{
    console.log(err);

});

server.listen(3333);