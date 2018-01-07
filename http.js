var http = require('http');

http.createServer(function(request,response){
	response.writeHead(200,{'content-Type':'text/plain'});

	response.end('abcdefg');
}).listen(7777);