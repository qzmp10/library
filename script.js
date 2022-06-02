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
    if (bookRead.checked === true) {
        read = "Read";
    } else {
        read = 'Not read yet';
    }
    let book = new Book(title, author, pages, read);
    library.push(book);
}


//creates new book in content, creates toggle button & remove button
function newBook() {
    let bookDiv = document.createElement('div');
    content.appendChild(bookDiv);
    bookDiv.classList.add('book');

    let titleDiv = document.createElement('div');
    bookDiv.appendChild(titleDiv);
    titleDiv.textContent = `${library[library.length - 1].title}`;

    let authorDiv = document.createElement('div');
    bookDiv.appendChild(authorDiv);
    authorDiv.textContent = `by ${library[library.length - 1].author}`;

    let pagesDiv = document.createElement('div');
    bookDiv.appendChild(pagesDiv);
    pagesDiv.textContent = `${library[library.length - 1].pages} pages`;

    let toggleRead = document.createElement('button');
    bookDiv.appendChild(toggleRead);
    toggleRead.classList.add('read-toggle');
    if (library[library.length - 1].read == 'Not read yet') {
        toggleRead.classList.add('not-read-toggle');
        toggleRead.textContent = 'Not read yet';
    } else {
        toggleRead.textContent = 'Read';
    }
    toggleRead.onclick = function toggleReadStatus(bookFound) {
        //find the book object with the same title in the library array, then toggle the read status of that book when button is clicked
        bookFound = library.find(Book => Book.title === titleDiv.textContent);
        if(bookFound.read == 'Read') {
            bookFound.read = 'Not read yet';
            toggleRead.textContent = 'Not read yet';
        } else {
            bookFound.read = 'Read';
            toggleRead.textContent = 'Read';
        }
        toggleRead.classList.toggle('not-read-toggle');
    };

    let removeBook = document.createElement('button');
    bookDiv.appendChild(removeBook);
    removeBook.classList.add('remove-book');
    removeBook.textContent = '❌ REMOVE';
    removeBook.onclick = function removeCurrentBook(currentBook) {
        //finds index of currentbook by checking which object.title has the same title
        currentBook = library.findIndex(Book => Book.title === titleDiv.textContent);
        //splice the book from the library array
        library.splice(currentBook, 1);
        //remove the book from the dom
        removeBook.parentElement.remove()
    }
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
    newBook();
});
