var express = require('express');
var React = require('react/addons');
var router = express.Router();
var components = require('../public/components.jsx')
var client = require('node-rest-client').Client;

var HelloMessage = React.createFactory(components.HelloMessage);

router.get('/', function(req, res){
    console.log('test');
    res.render('index', {
    react: React.renderToString(HelloMessage({name: "John"}))
    })
});

router.get('/name/', function(req, res){
    var name = req.query.name
    res.render('index', {
    react: React.renderToString(HelloMessage({name: name}))
    })
});

router.get('/map', function(req, res) {

    var origin = "Adelaide, SA";
    var destination = "Adelaide, SA";
    var waypoints = ["Barossa Valley, SA", "Clare, SA", "Connawarra, SA", "McLaren Vale, SA"];
    var optimize = true;



    res.json(body);
});

module.exports = router;
