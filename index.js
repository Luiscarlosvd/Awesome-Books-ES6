import BookList from './modules/booksList.js';
import Book from './modules/bookClass.js';
import { List, contact, addNew } from './modules/displaySections.js';
import { DateTime, Settings } from './modules/luxon.js';

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

const Date = document.querySelector('.date');

Settings.defaultLocale = 'en-US';

setInterval(() => {
  Date.textContent = DateTime.utc().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);

document.addEventListener('DOMContentLoaded', bookslist.displayBooks());