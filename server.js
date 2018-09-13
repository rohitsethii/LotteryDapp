var express = require('express');
var app = express();
app.use(express.static('path of your html file' + '/public')); //__dir and not _dir
var port = 8001; // you can use any port
app.listen(port);
console.log('server on ' + port);
