var fs = require('fs');

var data = fs.readFileSync('dataTest.json');

var myData = JSON.parse(data);
var newItem = {"name": "do hong hanh"};
myData.push(newItem)
var newData = JSON.stringify(myData);
fs.writeFile('dataTest.json', newData,(err2) => {
  if (err2) {
    throw err2;
  }
  else {console.log('Item added')};
});