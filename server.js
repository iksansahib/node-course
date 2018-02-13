const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

app.set('view_engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home',
    welcomeMessage: 'Welcome to my web',
    currentYear: new Date().getFullYear()
  });
});

app.listen(port);
