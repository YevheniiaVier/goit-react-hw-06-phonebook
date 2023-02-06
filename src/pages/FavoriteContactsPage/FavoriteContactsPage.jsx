import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box } from './FavoriteContactsPage.styled';
import { getFavoriteContacts } from 'redux/selectors';
// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useSelector } from 'react-redux/es/exports';
import { ContactList } from 'components/ContactList/ContactList';
// import { MyContacts } from 'components/MyContacts/MyContacts';
const FavoriteContactsPage = () => {
  const contacts = useSelector(getFavoriteContacts);

  return (
    <Box>
      <ContactList contacts={contacts} />
    </Box>
  );
};

// MoviesPage.defaultProps = {
//   movies: [],
// };

// MoviesPage.propTypes = {
//   movies: PropTypes.array.isRequired,
// };

export default FavoriteContactsPage;