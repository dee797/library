const addBookBtn = document.querySelector("#addBookBtn");
const cancelBtn = document.querySelector("#cancel");
const dialog = document.querySelector("#addBook");
const form = document.querySelector("#form");
const library = document.querySelector("#library");
const myLibrary = [];
let data;



addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

form.addEventListener("submit", (event) => {
    const tempData = new FormData(form);    // not iterable or an array
    data = Object.fromEntries(tempData);    // returns dictionary
    event.preventDefault();     // prevents submission of the form (stops the event)
    dialog.close();
    addBookToLibrary();
    showBooks();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
    form.reset();   // manually reset form
})




function Book(title, author, pages, read, bookNum) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookNum = bookNum

    this.info = function() {
        if (this.read === "Yes") {
            return `${this.title} by ${this.author}, ${this.pages} pages,
            already read`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages,
            not yet read`;
        }
    }
}

function addBookToLibrary() {
    myLibrary.push(new Book(data.title, data.author, data.pages, data.read, myLibrary.length));
}

function showBooks() {

    if (myLibrary.length === 0) {
        library.textContent = "You currently have no books.";
    }
    else {
        library.textContent = "";

        const titleHeader = document.createElement("div");
        titleHeader.textContent = "Title";
        library.appendChild(titleHeader);

        const authorHeader = document.createElement("div");
        authorHeader.textContent = "Author";
        library.appendChild(authorHeader);
            
        const pagesHeader = document.createElement("div");
        pagesHeader.textContent = "Number of Pages";
        library.appendChild(pagesHeader);

        const readHeader = document.createElement("div");
        readHeader.textContent = "Read or Not";
        library.appendChild(readHeader);
        
        
        myLibrary.forEach(book => {
            const bookTitle = document.createElement("div");
            bookTitle.textContent = book.title;
            library.appendChild(bookTitle);

            const bookAuthor = document.createElement("div");
            bookAuthor.textContent = book.author;
            library.appendChild(bookAuthor);

            const bookPages = document.createElement("div");
            bookPages.textContent = book.pages;
            library.appendChild(bookPages);

            const bookRead = document.createElement("div");
            bookRead.textContent = book.read;
            library.appendChild(bookRead);
        });
    
    }
}

showBooks();
