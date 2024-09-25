const addBookBtn = document.querySelector("#addBookBtn");
const cancelBtn = document.querySelector("#cancel");
const dialog = document.querySelector("#addBook");
const form = document.querySelector("#form");
const library = document.querySelector("#library");
const myLibrary = [];
let data;



addBookBtn.addEventListener("click", () => {
    form.reset();
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




function Book(title="", author="", pages="", read="", bookNum="") {
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
        document.querySelector("#noBooks").style.display = "block";
        library.textContent = "";
    }
    else {
        document.querySelector("#noBooks").style.display = "none";
        library.textContent = "";

        for (let i = 0; i < 4; i++) {
            const headerDiv = document.createElement("h2");
            const keyList = Object.keys(new Book());
            headerDiv.textContent = keyList[i].charAt(0).toUpperCase() + keyList[i].substring(1).toLowerCase();
            library.appendChild(headerDiv);
        }


        const toggleDiv = document.createElement("h2");
        toggleDiv.textContent = "Toggle Read Status";
        library.appendChild(toggleDiv);

        const removeDiv = document.createElement("h2");
        removeDiv.textContent = "Remove Book";
        library.appendChild(removeDiv);

        
        myLibrary.forEach(book => {
            const valueList = Object.values(book);

            for (let i = 0; i < 4; i++) {
                const bookAttr = document.createElement("div");
                bookAttr.textContent = valueList[i];
                library.appendChild(bookAttr);
            }

            const toggleRead = document.createElement("button");
            toggleRead.type = "button";
            toggleRead.textContent = "Toggle";
            library.appendChild(toggleRead);

            toggleRead.addEventListener("click", () => {
                const bookRead = toggleRead.previousSibling;
                book.read = bookRead.textContent === "Yes" ? "No" : "Yes";
                bookRead.textContent = book.read;
            });
            

            const removeBtn = document.createElement("button");
            removeBtn.type = "button";
            removeBtn.textContent = "Remove";
            library.appendChild(removeBtn);

            

        });
    
    }
}

showBooks();
