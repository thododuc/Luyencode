var fs = require('fs');

fs.rename('fs.json', 'dataTest.json',(err) => {
  if (err) {throw err;}
  else {console.log('File renamed.')};
});