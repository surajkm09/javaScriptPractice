const  Parse = require('csv').parse;
const assert = require('assert');


var output = []  ;

parser = Parse({delimiter:':'});

parser.on('readable',()=>{

    let record ; 
    while(record=parser.read()){
        console.log( record.length);
        output.push(record);
    }

});


parser.on('error',(err)=>{
    console.log('the error '+err + ' has occured!!');
});

parser.on('end',()=>{
    console.log('the parser has ended reading ');
    console.log( output);
    assert.deepEqual(output,[ [ 'suraj', 'kumar' ] ]);
});



parser.write('suraj:kumar');
parser.end();


