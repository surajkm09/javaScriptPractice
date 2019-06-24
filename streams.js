const fs = require('fs');



var readStream = fs.createReadStream('./input.txt',{encoding:'utf-8'});
var writeStream = fs.createWriteStream('./output.txt');


readStream.pipe(writeStream);
readStream.on('close',()=>{
    console.log('write stream closed!!');
})
console.log('main program ends !!');