//const http = require('http');
//
//const hostname = '127.0.0.1';
//const port = 3000;
//
//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hello World\n');
//});
//
//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', function(req, res){
        var people = [
                {
                        first_name: "John",
                        last_name:"Appleseed",
                        age: "23",
                        gender: "male"
                },
                {
                        first_name: "Nathan",
                        last_name:"Williams",
                        age: "45",
                        gender: "male"
                },
                {
                        first_name: "Janet",
                        last_name:"Macenzie",
                        age: "62",
                        gender: "female"
                },               
        ];
        res.json(people);
        });

app.get('/download', function(req, res){
        res.download(path.join(__dirname,'/downloads/sample.pdf'));
        });


app.get('/', function(req, res){
        res.redirect('/index.html');
        });

app.get('/about', function(req, res){
        res.redirect('/about.html');
        });

app.get('/contact', function(req, res){
        res.redirect('/contact.html');
        });

app.post('/subscribe', function(req, res){
        var name = req.body.name;
        var email = req.body.email;
        
        console.log(name +' has subscribed with '+ email);
        });

app.listen(3000, function(){
        console.log('server started');
        });