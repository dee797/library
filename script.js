const addBookBtn = document.querySelector("#addBookBtn");
const cancelBtn = document.querySelector("#cancel");
const dialog = document.querySelector("#addBook");
const form = document.querySelector("form");
const myLibrary = [];
let data;



addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

form.addEventListener("submit", (event) => {
    const tempData = new FormData(form);    //not iterable or an array
    data = Object.fromEntries(tempData);    //returns dictionary
    event.preventDefault();     //prevents submission of the form (stops the event)
    dialog.close();
    addBookToLibrary();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
    form.reset();   //manually reset form
})




function Book(title, author, pages, read, bookNum) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookNum = bookNum

    this.info = function() {
        if (this.read === "true") {
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

