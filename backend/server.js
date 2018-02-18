var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var jwt = require('jsonwebtoken');
var file = 'data.json';
var config = require('./config.json');
var request = require('request');

app.use(cors({origin: 'http://localhost:8090'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function(req, res) {

    jsonfile.readFile(file, function(err, obj) {
        if( ( obj.username == req.body.username ) && ( obj.password == req.body.password ) ){
            var token = jwt.sign({ username: req.body.username }, config.secret);
            res.json({message:'Auth Success',token:token});
        }else
            res.json({message:'Auth Failed'});
    })

});

app.post('/signup', function(req, res) {

    var obj = {username:req.body.username,password:req.body.password,email:req.body.email}
    jsonfile.writeFile(file, obj,function (err) {
        console.error(err)
    })
    res.json({'message':'user saved'});

});

app.get('/articles', function(req, res) {
    try {
        var decoded = jwt.verify(req.query.token, config.secret);
        if( decoded ){
            request.get({
                url: config.nyTimesApiUrl,
                qs: {
                    'api-key': config.nyTimesKey
                },
            }, function(err, response, body) {
                console.log(body);
                body = JSON.parse(body);
                res.json(body);
            })
        }
    } catch(err) {
        res.json({message:"token auth failed"});
    }
});

app.listen(config.port,function(){
    console.log('server running at port: '+config.port);
});