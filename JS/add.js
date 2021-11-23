const add = document.getElementById('add');
const buttons = document.querySelectorAll('.deleteBook');

const myBooks = document.getElementById('books');
const inputsAreValid = (form) => {
  const allInput = form.querySelectorAll('input');
  const inputArr = [...allInput];
  return inputArr.every((input) => input.value.trim().length > 2);
};

const addBook = (e) => {
  e.preventDefault();

  const form = document.querySelector('form');

  const storedCollection = JSON.parse(localStorage.getItem('mybooks'));

  const id = `${storedCollection.length + 1}`;
  const newBook = {
    id,
    title: form.title.value,
    author: form.author.value,
  };

  const updatedCollection = [...storedCollection, newBook];

  localStorage.setItem('mybooks', JSON.stringify(updatedCollection));

  if (inputsAreValid(form)) {
    const li = document.createElement('li');

    li.innerHTML = `
            <h3> ${form.title.value} </h3>
            <p> ${form.author.value}</p>
            <button class="deleteBook" data-id="${id}" type="button">Remove</button>
            <hr>
          
    `;

    myBooks.appendChild(li);
  }
};

const removeBook = (e) => {
  const buttonId = e.target.getAttribute('data-id');
  e.target.parentElement.remove();
  const storedBooks = JSON.parse(localStorage.getItem('mybooks'));
  const afterDeleted = storedBooks.filter((book) => book.id !== buttonId);

  localStorage.setItem('mybooks', JSON.stringify(afterDeleted));
};

add.addEventListener('click', addBook);
buttons.forEach((button) => button.addEventListener('click', removeBook));