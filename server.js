var express = require('express');
var app = express();

app.use(express.static('app'));

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/app/homepage.html");
});

var server = app.listen(3000, function() {
    console.log('server is running...');
});