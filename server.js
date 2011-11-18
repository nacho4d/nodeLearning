// Require http module to create the Server
var http = require("http");
// Require url module to parse the url
var url = require("url");


//Start serve at a given path or route
function start(route, handle) {

  // Define a central handler for all the requests
  function onRequest(request, response) {

    var postData = "";
       
    // Get the pathname to route the response
    var pathname = url.parse(request.url).pathname;
    console.log("Request for "+ pathname + " received.");
    
    request.setEncoding("utf8");
    // Listens data upload
    request.addListener("data", function (postDataChunk) {
      postData += postDataChunk;
      //console.log("Received POST data chunk '" + postDataChunk + "'.");
      console.log("Received POST data chunk - size: " + postDataChunk.length + ".");
    });
    // Listens data upload end
    request.addListener("end", function () {
      // Route the request's pathname to response when the upload is finished
      route(handle, pathname, response, postData);
    });
  }

  // Create the http server with a handler
  httpServer = http.createServer(onRequest);

  // Start listening to port 8888 ( http://localhost:8888/ )
  httpServer.listen(8888);
  
  console.log("Server has started.");
}

// Export above function as 'start123'
exports.start123 = start;

