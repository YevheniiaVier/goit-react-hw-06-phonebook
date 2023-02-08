import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', data => {
  return {
    payload: {
      ...data,
      id: shortid(),
    },
  };
});

export const removeContact = createAction('contacts/removeContact');
