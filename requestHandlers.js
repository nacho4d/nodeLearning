// exec function, similar to system() function one in C
var exec = require("child_process").exec;

/*
@param response : response object given by the router.
*/

function start(response) {
  console.log("Request handler 'start' was called.");

  // run command 'ls -lah' (or any other that could be expensive)
  // and when it finishes run the completion handler asynchronously. Non-blocking
  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

// Export above function as start
exports.start = start;

/*
@param response : response object given by the router.
*/

function upload(response) {
  console.log("Request handler 'upload' was called");

  // Do the regular thing, blocking but un-expensive
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

// Export above function as upload
exports.upload = upload;
