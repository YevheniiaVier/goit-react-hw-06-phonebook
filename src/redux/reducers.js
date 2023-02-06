import { devToolsEnhancer } from '@redux-devtools/extension';

import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';
import initialContacts from '../contacts.json';

const initialStore = {
  contacts: [...initialContacts],
  filter: '',
};

const rootReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return { ...store, contacts: [...store.contacts, payload] };
    case REMOVE_CONTACT:
      const newContacts = store.contacts.filter(({ id }) => id !== payload);
      return { ...store, contacts: newContacts };
    case SET_FILTER:
      return { ...store, filter: payload };
    default:
      return store;
  }
};

export default rootReducer;
