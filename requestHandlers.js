// exec function, similar to system() function one in C
var exec = require("child_process").exec;

/*
@param response : response object given by the router.
@param postdata : data sent to the server by POST. In start() is not used
*/

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
  '<head>' +
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" method="post">'+
  '<textarea name="text" rows="20" cols="60"></textarea>'+
  '<input type="submit" value="Submit text" />'+
  '</form>'+
  '</body>'+
  '</html>';
  
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

// Export above function as start
exports.start = start;

/*
@param response : response object given by the router.
@param postData : data sent to the server by POST. To be shown to the user.
*/

function upload(response, postData) {
  console.log("Request handler 'upload' was called");

  // Do the regular thing, blocking but un-expensive
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.write("You've sent: " + postData);
  response.end();
}

// Export above function as upload
exports.upload = upload;


