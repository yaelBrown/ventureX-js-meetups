const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// bodyParser tells the express app how to parse the data thats coming in.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// want application to serve static resources from 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

// this is our database
let books = [];

// creates a post request handler. app.post()
  // use singular 'book' instead of 'books' (consistency on what you call endpoints)
app.post('/book', (req, res) => {
  let book = req.body;
  
  // Prevent duplicate of books
  if (books.find(b => b.title == book.title && b.author == book.author)) {
    res.status(400).send('Already have that book');
    return;
  }
 
  if (!book.id) {
    res.sendStatus(400).send('Add a book id and send request again.');
    return;
  } else if (book.find((b) => b.id == book.id)) {
    res.sendStatus(400).send('duplicate ID found.')
    return;
  } else {
    books.push(book);
    console.log("Book was added!")
    res.send();
  }


  // if(!book.id) res.send(400).json({msg: 'bad req'})  // ambers shorthand version

});

app.get('/book', (req, res) => {
  res.send(books);
});

// adds a book id
app.put('book/:id', (req, res) => {
  if (book.find(b => b.id == book.id)) res.sendStatus(400).send('Book ID already exists');
  let id = req.params.id;
  console.log(id);
});

// Deletes a book
app.delete('/book/:id', (req, res) => {
  let id = req.params.bookid;
  let bookIndex = books.findIndex(b => b.id == id);
  books.splice(bookIndex, 1);
  res.send();
});


app.listen(3000, () => console.log('server started'));




// Object.assign ????