const express = require('express');
const ejs = require('ejs');

const app = express();
const port = 3030;

//TEMPLATE ENGINE
app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(express.static('public'));


//ROUTES
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
