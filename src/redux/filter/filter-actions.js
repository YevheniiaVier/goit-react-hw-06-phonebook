// import { SET_FILTER } from './filter-types';
import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/setFilter');

// export const setFilter = payload => {
//   return {
//     type: SET_FILTER,
//     payload,
//   };
// };
