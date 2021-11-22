

const books = document.getElementById('books');
let listItems = "";
const collection = JSON.parse(localStorage.getItem("mybooks"))
collection.forEach( book => listItems += `
    <li> 
        <h3> ${book.title} </h3> 
        <p> Author: ${book.author} </p>
        <button type="button"> Remove </button>
        <hr/>
    </li>` 
)
books.innerHTML = listItems
