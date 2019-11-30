var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Homepage!');
});
 
var server = app.listen(6000, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('Ejemplo en http://%s:%s', host, port);
 
});