const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT ? process.env.PORT : 8080, process.env.HOST ? process.env.HOST : '127.0.0.1', () => {
  console.log('server is live');
})