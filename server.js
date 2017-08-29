var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');
var app = require('express');
var router = express.Router();

app = express();
app.use(serveStatic(__dirname));

//Database config for mongoose
var databaseUri = 'mongodb://whatsthetea.herokuapp.com/api';
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(databaseUri);
}

var db = mongoose.connection;

//Show mongoose errors
db.on('error', function(err) {
    console.log('Mongoose Error: ' + err);
});

//once logged in to the db through mongoose, log a successful console
db.on('open', function(err) {
    console.log('Mongoose connection sucessful!!');
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('server started '+ port);