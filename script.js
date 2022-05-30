//Don't know why not working, will restart
let addBookBtn = document.querySelector('.add-book');
let bookForm = document.querySelector('form');
let submitBtn =  document.querySelector('.submit');
let closeBookForm = document.querySelector('.X');


let form = document.querySelector('form');

let bookTitle = form.querySelector('#title');
let bookAuthor = form.querySelector('#author');
let bookPages = form.querySelector('#pages');
let bookRead = form.querySelector('#read');

let library = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    title = bookTitle.value;
    author = bookAuthor.value;
    pages = bookPages.value;
    read = bookRead.value;
    let book = new Book(title, author, pages, read);
    library.push(book);
}

function showNewBook {

};

addBookBtn.addEventListener('click', () => {
    bookForm.style = 'transform: translate(-50%, -50%) scale(1)';
})

closeBookForm.addEventListener('click', () => {
    bookForm.style = 'transform: translate(-50%, -50%) scale(0)'; 
})

submitBtn.addEventListener('click', () => {
    addBookToLibrary();
    bookForm.style = 'transform: translate(-50%, -50%) scale(0)'; 
})
