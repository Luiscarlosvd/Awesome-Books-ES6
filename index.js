import BookList from "./modules/booksList.js";
import Book from "./modules/bookClass.js";
import * as display from "./modules/displaySections.js";
import * as date from "./modules/date.js"

const booksContainer = document.querySelector('.books')
const form = document.getElementById('addBook');
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookslist = new BookList(booksContainer);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const book = new Book(title.value, author.value)
    bookslist.addBook(book);
    bookslist.clearFields();
});

booksContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      bookslist.removeBook(
        e.target.previousElementSibling.previousElementSibling.textContent,
      );
    }
});


document.addEventListener('DOMContentLoaded', bookslist.displayBooks());