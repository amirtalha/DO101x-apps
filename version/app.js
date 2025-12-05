const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

  response = 'This is version 4 of the app.' + '\n';

  //send the response to the client
  res.send(response);

});

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
