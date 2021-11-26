/* eslint-disable no-unused-vars, no-undef, no-return-assign */
class UI {
  static displayBooks() {
    const addButton = document.getElementById('add');
    const booksUL = document.getElementById('books');
    const { allBooks } = Storage;

    allBooks.forEach((book, index) => {
      const li = document.createElement('li');
      if (index % 2 === 0) {
        li.classList.add('gray');
      } else {
        li.classList.add('whiteSmoke');
      }
      li.innerHTML = `
                <div>
                  <h3>"${book.title}" </h3>
                  <span> by ${book.author}</span>
                </div> 
                <button 
                  data-id="${book.id}" 
                  type="button">Remove
                </button>
            `;

      booksUL.appendChild(li);
    });

    addButton.addEventListener('click', UI.addBook);

    booksUL.addEventListener('click', (event) => UI.remove(event));
  }

  static addBook(event) {
    event.preventDefault();

    if (UI.formIsValid('form input')) {
      const form = document.querySelector('form');

      const id = Storage.allBooks.length + 1;
      const newBook = {
        id,
        title: form.title.value,
        author: form.author.value,
      };

      Book.save(newBook);
      UI.appendBook(newBook);
      UI.resetForm();

      const bookList = [...document.querySelectorAll('#books li')];

      bookList.forEach((item, index) => {
        if (index % 2 === 0) {
          item.classList.add('gray');
        } else {
          item.classList.add('whiteSmoke');
        }
      });
      
    }
  }

  static formIsValid(form) {
    const inputs = [...document.querySelectorAll(form)];
    return inputs.every((input) => input.value.trim().length > 2);
  }

  static appendBook(newBook) {
    const booksUL = document.getElementById('books');
    const newBookToAppend = document.createElement('li');

    newBookToAppend.innerHTML = `
            
            <div>
              <h3>"${newBook.title}" </h3>
              <span> by ${newBook.author}</span>
            </div> 

            <button data-id="${newBook.id}" type="button">Remove</button>

        `;

    booksUL.appendChild(newBookToAppend);
  }

  static remove(event) {
    if (event.target.tagName === 'BUTTON') {
      const bookId = event.target.getAttribute('data-id');
      Book.remove(bookId);

      const listItem = event.target.parentElement;
      listItem.remove();
    }
  }

  static resetForm() {
    const inputs = [...document.querySelectorAll('form input')];
    inputs.forEach((input) => input.value = '');
  }
}