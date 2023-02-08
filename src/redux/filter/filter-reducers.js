// import { SET_FILTER } from './filter-types';
import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

// const filterReducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case SET_FILTER:
//       return payload;
//     default:
//       return store;
//   }
// };

export default filterReducer;
