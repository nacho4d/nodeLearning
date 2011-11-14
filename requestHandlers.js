function start() {
  console.log("Request handler 'start' was called.");
  return "Hello Start";
}
exports.start = start;

function upload() {
  console.log("Request handler 'upload' was called");
  return "Hello Upload";
}
exports.upload = upload;
