var http = require("http");

http.createServer(function(req,resp){
	resp.writeHead(200,{ "Content-Type": "text-plain"});
	resp.end("hello titus");

}).listen("3000");