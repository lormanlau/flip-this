var express = require('express');
var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname,'./../public/dist')));

var server = app.listen(8000, function(){
	console.log('Hailing Frequencies Open on port 8000');
});

app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./public/dist/index.html"))
});

var io = require('socket.io').listen(server);

var server_data = {board: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], counter: 9}
var players = [];

io.sockets.on('connection', function(socket){
	socket.emit('new-update', server_data);
	console.log('connection id', socket.id);

	socket.on('new-player', function(data){
		players.push(data);
		io.emit("update-players", players);
		socket.emit("get-position", players.length-1);
	})

	socket.on('update-player', function(data){
		players[data.position] = data.player;
		io.emit("update-players", players);
	})

	socket.on('click-update', function(data){
		server_data = data;
		socket.broadcast.emit('new-update', server_data);
		if (server_data.counter == 0) {
			reset()
			io.emit("blue-wins");
		}
		if (server_data.counter == 18){
			reset()
			io.emit("red-wins");
		}
	})

	socket.on('disconnect', function() {
		console.log("disconnected");
	})



	function reset(){
		server_data = {board: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false], counter: 9}
		players = [];
	}

})