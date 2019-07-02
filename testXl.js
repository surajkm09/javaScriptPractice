const xlsx = require('xlsx');
const formatter = require('./formatter');



var workBook = xlsx.utils.book_new();



var data = {
    _id: 'PA1834000153',
    dpcis: [ '', '' ],
    itemDes: [ '', '' ],
    beginDates: [ '2016-12-01T00:00:00.000Z', '2016-03-01T00:00:00.000Z' ],
    endingDates: [ '2017-01-31T00:00:00.000Z', '2016-11-30T00:00:00.000Z' ],
    units: [ '', '' ],
    amounts: [ 11955.53, 65441.43 ]
  };
var workSheet = xlsx.utils.aoa_to_sheet(formatter(data));



xlsx.utils.book_append_sheet(workBook,workSheet,'example');


xlsx.writeFile(workBook,'out.xlsb');
 