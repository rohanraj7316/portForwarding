var http = require('http');
var forward = require('http-forward');

var server = http.createServer(function (req,res) {
    req.forward = { target: "http://localhost:8080"};
    forward(req,res);
});

server.listen( process.env.PORT ||3000,function () {
    console.log('magic happens here at 3000');
});
