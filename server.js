// modules =================================================
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const cors           = require('cors');


const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));



// routes ==================================================
require('./app/routes')(app); // configure our routes

app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
