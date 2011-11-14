// Require server module (serve.js file)
var server = require('./server');
// Require router module (router.js file)
var router = require('./router');

// Start the server using the exported function
server.start123(router.route);

// Exception handler - Closes the server
process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
  console.log('Closing server');
  httpServer.close();
});