"use strict";

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

