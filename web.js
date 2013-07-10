var express = require('express');

var fs = require('fs');

var x = fs.readFileSync('index.html', 'utf8');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    response.send(x);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
