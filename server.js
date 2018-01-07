var http = require( 'http' );
http.createServer(function( request,respnose ){
	respnose.writeHead( 200,{'content-type':'text/plain'} );
	respnose.end( '第一个http' );
}).listen( 7777 );
console.log( 'run 127.0.0.1:7777' );