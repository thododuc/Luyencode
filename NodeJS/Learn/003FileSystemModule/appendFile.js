var fs = require('fs');

  fs.appendFile('fs.json',"'name':'do duc tho'", function(err){
    if (err) throw err;
    console.log('Saved!');
  });