// https://repl.it/@istrate/Unit-Testing-and-Mocks

const BookService = require('./BookService');

describe('BookService', () => {
  describe('constructor', () => {
    it('should reject a null dbRepository', () => {
      expect(() => {
        new BookService(null);
      }).toThrow(); // asserts the lambda we pass throws exception
    });

    it('it should reject a undefined dbRepository', () => {
      expect(() => {
        new BookService(undefined);
      }).toThrow();
    });

  });


  describe('addBook', () => {
    it('Should reject a null book', () => {
      let dbRepository = {};    // This is mocking, simulating a db to pass to book service
      let bookService = new BookService(dbRepository);
      expect(() => {
        bookService.addBook(null);
      }).toThrow();
    });

    it('Should reject a null or undefined title', () => {
      let dbRepository = {};
      let bookService = new BookService(dbRepository);
      expect(() => {
        bookService.addBook(dbRepository, null, "");
      }).toThrow();
    })

    it('Should reject a null or undefined author', () => {
      let dbRepository = {};
      let bookService = new BookService(dbRepository);
      expect(() => {
        bookService.addBook(dbRepository, "", null);
      }).toThrow();
    })

    it('Should reject a book if the title/author combination already exists', () => {
    })
  })
});



// bookService.addBook(book, title, author)