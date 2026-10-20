
let myLibrary = [];

let addBookButton = document.querySelector('.add-book');
let modal = document.querySelector('.book-modal');
let submitButton = document.querySelector('.submit-button');

//You need to work on delete functionality 


addBookButton.addEventListener('click', (e) => {
    modal.showModal();
});

submitButton.addEventListener('click', (e) => {
    //e.preventDefault();

    let form = document.querySelector('form');
    let container = document.querySelector('.container');
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let readStatus = document.querySelector('input[name="book-status"]:checked').value;
    
    form.reset();
    addBookToLibrary(author, title, pages, readStatus);
    container.innerHTML = "";
    displayBooks();

    
    modal.close();

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
        //give each card a data-attribute
        card.setAttribute("data-uid", myLibrary[i].uid);
        

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

        //delete button
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-book");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener('click', (e) => {
            let targetUid = e.target.parentElement.dataset.uid;
            let targetIdx;
            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].uid === targetUid) {
                    targetIdx = i;
                }
            }
            myLibrary.splice(i, 1);
            container.innerHTML = '';
            displayBooks();

        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus)
        card.appendChild(deleteButton);

        container.appendChild(card);
    }
}

addBookToLibrary('Tolkien', 'Hobbit', '273', 'Complete');
addBookToLibrary('Herbert', 'Dune', '750', 'Incomplete');
//console.log(myLibrary);
displayBooks();