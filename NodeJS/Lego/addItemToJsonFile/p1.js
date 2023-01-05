var fs = require('fs');

var data = fs.readFileSync('dataTest.json');
var inputData = JSON.parse(data);
var newItem = {'name': 'nguyen thanh thao'};
inputData.push(newItem);
var outputData = JSON.stringify(inputData);

fs.writeFile('dataTest.json', outputData, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Item added');
  }
})