
var express 	= require('express.io'),
	app			= express(),
	server		= require('http').createServer(app),
	io			= require('socket.io').listen(server),
	users		= {};



//on connection do this
io.sockets.on('connection', function(socket) {

	//if the user closes page, then do this
	socket.on('disconnect', function() {

	});

});






app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html')
})



//listen to port 30000
server.listen(3000)