class Book {
  static save(book) {
    const existingBooks = JSON.parse(localStorage.getItem('mybooks'));
    const updatedBooks = [...existingBooks, book];

    localStorage.setItem('mybooks', JSON.stringify(updatedBooks));
  }

  static remove(bookId) {
    const existingBooks = JSON.parse(localStorage.getItem('mybooks'));
    const afterRemoved = existingBooks.filter((book) => book.id != bookId);

    localStorage.setItem('mybooks', JSON.stringify(afterRemoved));
  }
}
export default Book;