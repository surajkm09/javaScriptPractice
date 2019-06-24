const Logger = require('./logger');

var logger = new Logger() ; 



logger.on('success',()=>{


    console.log('logger has succesfullly logged the message');
    
});

logger.log('andre andre ariba');
