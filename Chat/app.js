var express = require('express'),
app = express(),
path = require('path'),
server = require('http').createServer(app),
io = require('socket.io').listen(server),
users = [];

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
        res.render('index');
        });

server.listen(process.env.PORT || 3000);
console.log('Server Started');