//query selectoooooor
let addBookBtn = document.querySelector('.add-book');
let bookForm = document.querySelector('form');
let submitBtn =  document.querySelector('.submit');
let closeBookForm = document.querySelector('.X');

let form = document.querySelector('form');
let content = document.querySelector('.content');

let bookTitle = form.querySelector('#title');
let bookAuthor = form.querySelector('#author');
let bookPages = form.querySelector('#pages');
let bookRead = form.querySelector('#read');

//array for all the books to be stored
let library = [];

//same as library but only shows the current book, mostly used to create the new divs to show off the book info
let currentBook = [];

// book object
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

//adds the book & its information to the library array
function addBookToLibrary(title, author, pages, read) {
    title = bookTitle.value;
    author = bookAuthor.value;
    pages = bookPages.value;
    read = bookRead.value;
    let book = new Book(title, author, pages, read);
    library.push(book);
    currentBook.push(book);
}

//creates a div where the book information will be shown
function showNewBook() {
    let newBook = document.createElement('div');
    content.appendChild(newBook);
    newBook.classList.add('book')
    Object.values(currentBook[0]).forEach(value => {
        let newBookInfo = document.createElement('div');
        newBook.appendChild(newBookInfo);
        newBookInfo.textContent = `${value}`;
    });
};

//clears the values in the add book form
function clearForm() {
    bookAuthor.value = '';
    bookTitle.value = '';
    bookPages.value = '';
    bookRead.checked = false;
};

//opens the form to add a book
addBookBtn.addEventListener('click', () => {
    clearForm();
    bookForm.style = 'transform: translate(-50%, -50%) scale(1)';
});

//close the add book form
closeBookForm.addEventListener('click', () => {
    bookForm.style = 'transform: translate(-50%, -50%) scale(0)'; 
});

//adds book to library & current book array + show the new book information in the content div
submitBtn.addEventListener('click', () => {
    addBookToLibrary();
    bookForm.style = 'transform: translate(-50%, -50%) scale(0)'; 
    showNewBook();
    //clear current book after the book info is displayed
    currentBook = [];
});
