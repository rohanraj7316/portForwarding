var http = require('http');
var forward = require('http-forward');

var server = http.createServer(function (req,res) {
    req.forward = { target: "https://www.engageto.com:80"};
    forward(req,res);
});

server.listen(3000,function () {
    console.log('magic happens here at 3000');
});