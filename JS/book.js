/* eslint-disable no-unused-vars, no-undef, no-return-assign */
class Book {
  static save(book) {
    const existingBooks = JSON.parse(localStorage.getItem('mybooks'));
    const updatedBooks = [...existingBooks, book];

    localStorage.setItem('mybooks', JSON.stringify(updatedBooks));
  }

  static remove(bookId) {
    const existingBooks = JSON.parse(localStorage.getItem('mybooks'));
    const afterRemoved = existingBooks.filter((book) => Number(book.id) !== Number(bookId));

    localStorage.setItem('mybooks', JSON.stringify(afterRemoved));
  }
}
