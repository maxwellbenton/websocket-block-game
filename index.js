


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('player', function(msg){
    io.emit('player', msg);
  });
});
// io.on('connection', function(socket){
//   socket.on('playerPosition', function(msg){
//     io.emit('playerPosition', msg);
//   });
// });

http.listen(port, function(){
  console.log('listening on *:' + port);
});



