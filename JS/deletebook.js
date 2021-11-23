const theBooks = document.getElementById('books');
const removeBook = (e) => {
  if (e.target.tagName.toLowerCase() === 'button') {
    const buttonId = e.target.getAttribute('data-id');
    const storedBooks = JSON.parse(localStorage.getItem('mybooks'));
    const afterDeleted = storedBooks.filter((book) => book.id !== buttonId);

    e.target.parentElement.remove();

    localStorage.setItem('mybooks', JSON.stringify(afterDeleted));
  }
};

theBooks.addEventListener('click', removeBook);