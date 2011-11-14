// Require http module to create the Server
var http = require("http");
// Require url module to parse the url
var url = require("url");


//Start serve at a given path or route
function start(route){

  // Define a handler for each request
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for "+ pathname + " received.");
    
    route(pathname);
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World from http_server.js");
    response.end();
  }

  // Create the http server with a handler
  httpServer = http.createServer(onRequest);

  // Start listening to port 8888 ( http://localhost:8888/ )
  httpServer.listen(8888);
  
  console.log("Server has started.");
}

// Export above function as 'start123'
exports.start123 = start;

