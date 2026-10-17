
let myLibrary = [];

let addBookButton = document.querySelector('.add-book');
let modal = document.querySelector('.book-modal');
addBookButton.addEventListener('click', (e) => {
    modal.showModal();
});

function Book(author, title, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.uid = crypto.randomUUID();

    this.info = function () {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
    }   
}

function addBookToLibrary(author, title, pages, read) {
    let book = new Book(author, title, pages, read);

    myLibrary.push(book);
}

function displayBooks() {
    let container = document.querySelector('.container');

    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);

        //create card div
        let card = document.createElement("div");
        card.classList.add("card");

        //title
        let title = document.createElement("div");
        title.textContent = myLibrary[i].title;
        title.classList.add("book-title");

        //author
        let author = document.createElement("div");
        author.textContent = myLibrary[i].author;
        author.classList.add("book-author");

        //pages
        let pages = document.createElement("div");
        pages.classList.add("book-pages");
        pages.textContent = myLibrary[i].pages + " Pages";

        //readStatus
        let readStatus = document.createElement("div");
        readStatus.classList.add("readStatus");
        readStatus.textContent = myLibrary[i].read;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus)

        container.appendChild(card);
    }
}

addBookToLibrary('Tolkien', 'Hobbit', '273', 'Complete');
addBookToLibrary('Herbert', 'Dune', '750', 'Incomplete');
//console.log(myLibrary);
displayBooks();