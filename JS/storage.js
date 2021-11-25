/* eslint-disable no-unused-vars, no-undef, no-return-assign */
class Storage {
  static get allBooks() {
    const bookCollection = [
      {
        id: '1',
        title: 'The book of truth',
        author: 'Angel Moraiah',
      },
      {
        id: '2',
        title: 'The book of truth',
        author: 'Angel Moraiah',
      },
    ];

    if (localStorage.getItem('mybooks')) {
      return JSON.parse(localStorage.getItem('mybooks'));
    }

    localStorage.setItem('mybooks', JSON.stringify(bookCollection));
    return bookCollection;
  }
}
