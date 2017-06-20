/**
 * Created by unio-raj on 20/6/17.
 */


var app = require('express')();
var path = require('path');

app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'index.html'));
});


app.listen(90,function () {
   console.log('server is up and running on 8080');
});