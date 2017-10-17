/**
 * Creates the server
 *
 * @author: Jones Murphy
 */
var express = require('express');
var ejs = requre('ejs');

var app = express();
var CURR_DIR = __dirname;

app.set('views', path.join(CURR_DIR, 'public'));
app.set('view engine', 'html');

app.use(express.static(path.join(CURR_DIR, 'public')));

// Make sure all request return CORS headers
app.use(function (req, res, next) {
    var origin = req.get('origin');
    if (!origin || origin === 'undefined' || origin.length == 0) {
        origin = req.get('host');
    }
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token, newpassword');

    next();
});

// Node App Port
var port = 8080;

createServer(port);

/**
 * Creates the server.
 */
function createServer(config_port) {
    app.listen(config_port);
    console.log("Server running on %s mode. Listening on port %d", app.settings.env, port);
}