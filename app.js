require('node-jsx').install({extension: '.jsx'});

var express = require('express')
    , app = express()
    , React = require('react/addons')
    , components = require('./public/components.jsx');
    
var HelloMessage = React.createFactory(components.HelloMessage);

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index', {
    react: React.renderToString(HelloMessage({name: "John"}))
    })
});

var server = app.listen(8080, '0.0.0.0');
server.on('listening', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
    console.log('Listening on port 8080...')
});
