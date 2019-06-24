const Event = require('events');



class Logger extends Event  {
    log(message)
    {

        console.log("this message has been logged:"+message);
        this.emit('success');
        
    }

    


}
module.exports = Logger ; 