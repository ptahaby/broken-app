var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser')
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller');
var midValidateSession = require('./middleware/validate-session');
var { PORT } = require('./common/config');


db.sync();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api/auth', user);
app.use(midValidateSession)
app.use('/api/game', game);
app.listen(PORT, function() {
    console.log("App is listening on " + PORT);
})