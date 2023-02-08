import { createReducer } from '@reduxjs/toolkit';

import { addContact, removeContact } from './contacts-actions';
import initialContacts from '../../contacts.json';

const strgContacts = JSON.parse(window.localStorage.getItem('contacts'));

const initialStore = strgContacts ? [...strgContacts] : [...initialContacts];

const contactsReducer = createReducer(initialStore, {
  [addContact]: (store, { payload }) => [...store, payload],
  [removeContact]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

// const contactsReducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case addContact.type:
//       return [...store, payload];
//     case removeContact.type:
//       return store.filter(({ id }) => id !== payload);
//     default:
//       return store;
//   }
// };

export default contactsReducer;
