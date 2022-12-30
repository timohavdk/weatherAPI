const express = require("express");

const server = express();

server.use(express.static(__dirname + '/public'));

server.use('/script.js', function(request, response){
	console.log('main page');
	response.sendFile(__dirname + '/script.js');
});

server.use('/template.js', function(request, response){
	console.log('main page');
	response.sendFile(__dirname + '/template.js');
});

server.listen(3245);
