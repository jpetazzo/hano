require('http').createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  output = "Hello World!\n";
  for (k in request.headers) { 
    output += k + '=' + request.headers[k] + '\n'; 
  }
  response.end(output);
}).listen(process.env.PORT_WWW || 8080);
