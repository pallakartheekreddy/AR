var express = require('express')
var app = express()
var fs = require('fs');
var https = require('https')

app.use('/', express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(8080, function () {
    console.log('Server up, Go to https://localhost:8080/')
  })
