const axios = require('axios')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.get('/api/categories', (req, res) => {
  axios.get('https://api.chucknorris.io/jokes/categories')
  .then((response) => {
    res.send(response.data)
    console.log('aqui', response)
  })
  .catch((err) => {
    console.log(err)
    res.send(err.data)
    console.log('aqui2', err)
  })
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));
