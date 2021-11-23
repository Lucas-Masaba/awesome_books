const books = document.getElementById('books');
let listItems = '';
const collection = JSON.parse(localStorage.getItem('mybooks'));

collection.forEach((book) => {
  listItems += `
    <li> 
        <h3> ${book.title} </h3> 
        <p> Author: ${book.author} </p>
        <button  data-id="${book.id}" type="button"> Remove </button>
        <hr/>
    </li>`;
});
books.innerHTML = listItems;
