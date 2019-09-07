const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/yael:dog', (req, res) => {
  let dog = req.params.dog;
  let likesPugs = req.query.pug === true;
  let pug = likesPugs ? " Yael like's pugs!" : ' ';
  res.send('Yael is the best!')
});

// route parameter
app.get('/birthdaycard/:name', (req, res) => {
  let name = req.params.name;
  let hasConfetti = req.query.confetti === true;   // Query parameter
  let confetti = hasConfetti ? "kfjas;lkdfji3in2ina;skdfasdfk!" : ' ';
  res.send(`Happy Birthday ${name}! ${confetti}`);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));