require('node-jsx').install({extension: '.jsx'});

var express = require('express')
    , app = express()
    , React = require('react/addons')
    , routes = require('./routes/index');

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

var server = app.listen(8080, '0.0.0.0');
server.on('listening', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
    console.log('Listening on port 8080...')
});
