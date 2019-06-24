const Event= require('events');

const eventObj = new Event() ;


eventObj.addListener('emergency',()=>{
    console.log('an emergency has occurred');


});

eventObj.emit('emergency');

