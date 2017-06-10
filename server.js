
require('rootpath')();


var cors = require('cors');
var expressJwt = require('express-jwt');
var config = require('./config.json');
var cons = require('consolidate');






// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');
const user = require('./server/routes/users.controller');
const app = express();


app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);
app.use('/users', user);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
//app.use('/', expressJwt({secret: config.secret,credentialsRequired: false,getToken: function fromHeaderOrQuerystring (req) {if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {return req.headers.authorization.split(' ')[1];} else if (req.query && req.query.token) {return req.query.token;}return null;}}));

//app.use('/users', require('./controllers/users.controller'));

// use JWT auth to secure the api
app.use(expressJwt({ secret: config.secret }).unless({ path: ['/users/authenticate', '/users/register'] }));


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
//app.listen(process.env.PORT || 8080);
