import store from './store';

export const getContacts = store => store.contacts;
export const getFavoriteContacts = store => {
  const favoriteContacts = store.contacts.filter(({ favorite }) => favorite);
  return favoriteContacts;
};

export const getFilter = ({ filter }) => filter;

export const getFilteredContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return filteredContacts;
};

// const getFilteredContacts = () => {
//     if (filter) {
//       const normalizedFilter = filter.toLowerCase();
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter)
//       );
//     }
//     return contacts;
//   };
