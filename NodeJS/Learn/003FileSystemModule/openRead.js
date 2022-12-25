var fs = require('fs');
var http = require('http');

fs.open('fs.json', 'r', function(err, data){
  console.log("Saved");
})