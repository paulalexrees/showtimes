var express = require('express');
var app = express();
var http = require('http');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports = app;
if (!module.parent) {
  http.createServer(app).listen(3000, function(){
    console.log("Server listening on port 3000");
  });
}
