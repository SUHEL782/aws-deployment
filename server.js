const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Lagta hai ho gaya!');
});

app.get('/a', function (req, res) {
  res.send("Hello Everyone How are you!");  
});

app.listen(3000);
