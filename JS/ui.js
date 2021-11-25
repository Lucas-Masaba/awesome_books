class UI {
  static displayBooks() {
    
  }

  static validateForm(input) {
    const inputFields = [...document.querySelectorAll(input)];
    inputFields.every((inputField) => inputField.trim().length > 2);
  }

  static addBook(event) {
    event.preventDefault();
    if (UI.validateForm('form input')) {
      const form = document.querySelector('form');

      const id = Storage.books.length + 1;
      const newBook = {
        id,
        title: form.title.value,
        author: form.author.value,
      };

      Book.save(newBook);
      UI.appendBook(newBook);
      UI.resetForm();
    }
  }

  static removeBook() {

  }
}