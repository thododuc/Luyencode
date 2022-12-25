var fs = require('fs');

fs.writeFile('fs.json', '[{"name": "do duc tho"}]', function(err){
  if (err) {
    throw err;
  }
  console.log('Saved');
});