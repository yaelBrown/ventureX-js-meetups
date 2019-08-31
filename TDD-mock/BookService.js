class BookService {
  constructor(dbRepository) {
    if (dbRepository === null || dbRepository === undefined) {      throw 'dbRepository is required';
    }
  }

  // add book method
  addBook(book, title, author) {
    if (book === null) throw 'book is required';
    if (title === null || title === undefined) throw 'title is required';
    if (author === null || author === undefined) throw 'author is requred';
    return { "title": title, "author": author };
  }
}

module.exports = BookService;