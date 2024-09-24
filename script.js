"use strict";

const addBookBtn = document.querySelector("#addBookBtn");
const dialog = document.querySelector("#addBook");
const cancelBtn = document.querySelector("#cancel");
const submitBtn = document.querySelector("#submit");



addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
});

submitBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    dialog.close();
});




const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (this.read === true) {
            return `${this.title} by ${this.author}, ${this.pages} pages,
            already read`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages,
            not yet read`;
        }
    }
}

