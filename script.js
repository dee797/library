"use strict";

const addBookBtn = document.querySelector("#addBookBtn");
const dialog = document.querySelector("#addBook");
const form = document.querySelector("form");
let data;


addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

form.addEventListener("submit", (event) => {
    data = new FormData(form);
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

