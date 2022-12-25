var fs = require('fs');

fs.unlink('fs.json', (err) => {
  if (err) console.log(err);
  else {
    console.log('\nDeleted');
  }
});