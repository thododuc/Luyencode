var http = require('http');
var url = require('url');

http.createServer(function(req, res){
  var q = url.parse(req.url, true).query;
  var txt = (q.month + ' ' + q.year);
  res.end(txt);
}).listen(8080);

// http://localhost:8080/?year=2017&month=July