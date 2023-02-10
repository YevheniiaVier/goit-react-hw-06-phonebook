import { createSlice } from '@reduxjs/toolkit';
// import { store } from 'redux/store';
import shortid from 'shortid';

import initialContacts from '../../contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: shortid(),
          },
        };
      },
    },
    removeContact: (store, { payload }) =>
      store.filter(item => item.id !== payload),

    editContact: (store, { payload }) => {
      // const index = store.findIndex(({ id }) => id === payload.id);

      // return store.map((item, i) => (i === index ? payload : item));
      return store.map(contact =>
        contact.id === payload.id ? payload : contact
      );
      // console.log('i', index);
      // console.log('p', payload);
      // console.log('st i', store[index]);

      // // const index = store.indexOf(item);
      // store[index] = payload;
    },
  },
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
