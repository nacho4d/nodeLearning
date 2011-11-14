// Require server module (serve.js file)
var server = require('./server');
// Require router module (router.js file)
var router = require('./router');
// Require request handlers module (requestHandlers.js file)
var requestHandlers = require('./requestHandlers.js');

// Make a dictionary to handle the requests
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

// Start the server using the exported function
server.start123(router.route, handle);

// Exception handler - Closes the server
process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
  console.log('Closing server');
  httpServer.close();
});