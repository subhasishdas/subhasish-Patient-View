var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
// var Home = require('../pages/abc.html');

app.get('/', function(request, response) {
    // var html = ReactDOMServer.renderToString(
    //     React.createElement(Home)
    // );
    response.sendHTML('C:/Users/subha/Desktop/garbage/hci review/simple-react-router-demo-master/simple-react-router-demo-master/src/pages');
});

var PORT = 5000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});
