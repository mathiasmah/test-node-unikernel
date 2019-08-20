var express    = require('express');
var app = express();
var directory = require('serve-index');

console.log("hallo");

app.use(express.static('./'));
app.use(directory('./'));
app.listen("8080");
