const listSection = document.getElementById('list-section');
const addNewSection = document.getElementById('add-new');
const contactSection = document.getElementById('contact-section');

addNewSection.style.display = 'none';
contactSection.style.display = 'none';

export const List = () => {
  listSection.style.display = 'flex';
  contactSection.style.display = 'none';
  addNewSection.style.display = 'none';
};

export const addNew = () => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'flex';
  contactSection.style.display = 'none';
};

export const contact = () => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'flex';
};
