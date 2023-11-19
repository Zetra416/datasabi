const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = {
    title: 'Welcome to EJS!',
    message: 'This is a simple one-page EJS application.',
  };

  res.render('index', data);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
