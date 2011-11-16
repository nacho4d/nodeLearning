
/*
@param handle : array of functions. Key:pathname, Object:RequestHandler
@param pathname : string. Key to be used in @handle
@param response : response object. Used to write the output
*/

function route(handle, pathname, response) {
  console.log("About to route a request for " + pathname);

  // If there is a function that handles pathname
  if (typeof handle[pathname] === 'function') {

    //Handle the request
    handle[pathname](response);

  // Otherwise end with 404 Not found.
  } else {
    console.log("No request handler for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end;
  }
}

// Export above function as route
exports.route = route;
