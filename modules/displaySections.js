
const menuList = document.getElementById('menu-list');
const menuAddNew = document.getElementById('menu-add-new');
const menuContact = document.getElementById('menu-contact');

const listSection = document.getElementById('list-section');
const addNewSection = document.getElementById('add-new');
const contactSection = document.getElementById('contact-section');

addNewSection.style.display = 'none';
contactSection.style.display = 'none';

const List = displayList => {
  listSection.style.display = 'flex';
  contactSection.style.display = 'none';
  addNewSection.style.display = 'none';
}

const addNew = displayAddNew => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'flex';
  contactSection.style.display = 'none';
}

const contact = displayContact => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'flex';
}

menuList.addEventListener('click', List);
menuAddNew.addEventListener('click', addNew);
menuContact.addEventListener('click', contact);

