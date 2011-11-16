// Require http module to create the Server
var http = require("http");
// Require url module to parse the url
var url = require("url");


//Start serve at a given path or route
function start(route, handle) {

  // Define a central handler for all the requests
  function onRequest(request, response) {

    // Get the pathname to route the response
    var pathname = url.parse(request.url).pathname;
    console.log("Request for "+ pathname + " received.");

    // Route the request's pathname to response
    route(handle, pathname, response);
  }

  // Create the http server with a handler
  httpServer = http.createServer(onRequest);

  // Start listening to port 8888 ( http://localhost:8888/ )
  httpServer.listen(8888);
  
  console.log("Server has started.");
}

// Export above function as 'start123'
exports.start123 = start;

