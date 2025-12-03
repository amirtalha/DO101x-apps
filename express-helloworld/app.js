var express = require('express');
var app = express();

console.log(">>> LOADING MY APP.JS <<<");

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

console.log("Routes loaded:",
  app._router.stack
    .filter(r => r.route)
    .map(r => r.route.path)
);

app.listen(8080, "127.0.0.1", function () {
  console.log('Server listening on 127.0.0.1:8080');
});



