var express = require('express');
var router = express.Router();
var maps = require('./controllers/maps');
var client = require('node-rest-client').Client;

client = new Client();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/map', function(req, res) {

    var origin = "Adelaide, SA";
    var destination = "Adelaide, SA";
    var waypoints = ["Barossa Valley, SA", "Clare, SA", "Connawarra, SA", "McLaren Vale, SA"];
    var optimize = true;

    

    res.json(body);
});

module.exports = router;
