var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

module.exports = app;
if (!module.parent) {
  http.createServer(app).listen(3000, function(){
    console.log("Server listening on port 3000");
  });
}
