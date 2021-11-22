const add = document.getElementById("add");
const myBooks = document.getElementById("books")
const inputsAreValid = (form) => {
    const allInput = form.querySelectorAll('input')
    const inputArr = [...allInput];
    return inputArr.every( input => input.value.trim().length > 2)
}

const addBook = (e) => {
    e.preventDefault();
  
    const form = document.querySelector('form');
    
    const storedCollection = JSON.parse(localStorage.getItem("mybooks"));

    const id = `${storedCollection.length + 1}`;
    const newBook =  {
            id: id, 
            title: form.title.value, 
            author: form.author.value
    }
    
    const updatedCollection = [...storedCollection, newBook]

    console.log(updatedCollection )
    localStorage.setItem("mybooks", JSON.stringify(updatedCollection) )

    if ( inputsAreValid(form) ) {
        const li = document.createElement("li")

        li.innerHTML = `
            <li>
            <h3> ${form.title.value} </h3>
            <p> ${form.author.value}</p>
            <button type="button">Remove</button>
            <hr>
          </li>
        `
        myBooks.appendChild(li);
    }

}

add.addEventListener('click', addBook)