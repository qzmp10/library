let btn = document.querySelector('.add-book');
let bookInfo = document.querySelector('.book-shelf');


let library = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read //this probably will have to be toggled using prototypes, gluck my friend
    };
};

function addBookToLibrary(title, author, pages, read) {
    title = prompt('Title?');
    author = prompt('Author?');
    pages = prompt('Pages?');
    read = prompt('Have you read it yet?');
//change this to actual inputs
    let book = new Book(title, author, pages, read)
    library.push(book);
};

btn.addEventListener('click', () => {
    addBookToLibrary();
    const newBook = document.createElement('div');
    bookInfo.appendChild(newBook);
    library.forEach(book => {
        newBook.textContent = `${book.title}`;
    });

});

//works good enough so far