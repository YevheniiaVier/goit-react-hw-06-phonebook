import shortid from 'shortid';
import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-types';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: shortid.generate(),
      ...payload,
    },
  };
};

export const removeContact = payload => {
  return {
    type: REMOVE_CONTACT,
    payload,
  };
};
