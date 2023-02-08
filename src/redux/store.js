import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-reducers';
import filterReducer from './filter/filter-reducers';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
