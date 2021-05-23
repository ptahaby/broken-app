var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser')
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller')


db.sync();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(4000, function() {
    console.log("App is listening on 4000");
})