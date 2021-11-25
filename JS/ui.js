class UI {
  static displayBooks() {
    const addButton = document.getElementById("add");
        const booksUL = document.getElementById("books");
        const allBooks = Storage.allBooks;

        allBooks.forEach( book => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <button data-id="${book.id}" type="button">Remove</button>
                <hr>
            `;

            booksUL.appendChild(li);
        } )

        
        addButton.addEventListener("click", UI.addBook)

        booksUL.addEventListener( "click", (event) => UI.remove(event) );
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