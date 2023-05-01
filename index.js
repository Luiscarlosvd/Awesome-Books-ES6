import BookList from './modules/booksList.js';
import Book from './modules/bookClass.js';
import { List, contact, addNew } from './modules/displaySections.js';
import dt from './modules/date.js';

const booksContainer = document.querySelector('.books');
const form = document.getElementById('addBook');
const title = document.getElementById('title');
const author = document.getElementById('author');

const menuList = document.getElementById('menu-list');
const menuAddNew = document.getElementById('menu-add-new');
const menuContact = document.getElementById('menu-contact');

const bookslist = new BookList(booksContainer);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(title.value, author.value);
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

menuList.addEventListener('click', List);
menuAddNew.addEventListener('click', addNew);
menuContact.addEventListener('click', contact);

const dateDiv = document.querySelector('.date');
dateDiv.innerHTML = dt;

document.addEventListener('DOMContentLoaded', bookslist.displayBooks());