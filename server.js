var HTTPServer = require('http-server').HTTPServer;

var httpServer = new HTTPServer({
  root: './public/',
  port: 8080
});

httpServer.start();

process.on('SIGINT', function() {
  httpServer.log('http-server stopped.'.red);
  return process.exit();
});
