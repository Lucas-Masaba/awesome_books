let myBooksCollection = [
    {
        id: "1",
        title: "My first book in the list",
        author: "Gabriel Hilarion",
    },
    {
        id: "2",
        title: "My second book in the list",
        author: "Infinite Spirit",
    },
    {
        id: "3",
        title: "My third book in the list",
        author: "Invisible God",
    },
];

if ( !localStorage.getItem("mybooks") ) {
    localStorage.setItem( "mybooks", JSON.stringify(myBooksCollection) )
}
