import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box } from './FavoriteContactsPage.styled';
import { getFavoriteContacts } from 'redux/contacts/contacts-selectors';
// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useSelector } from 'react-redux/es/exports';
import { ContactList } from 'components/ContactList/ContactList';
// import { MyContacts } from 'components/MyContacts/MyContacts';
import { removeContact } from 'redux/contacts/contacts-actions';
import { useDispatch } from 'react-redux';

const FavoriteContactsPage = () => {
  const contacts = useSelector(getFavoriteContacts);

  const dispatch = useDispatch();

  const onRemoveContact = payload => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(removeContact(payload));
    }
  };

  return (
    <Box>
      <ContactList contacts={contacts} removeContact={onRemoveContact} />
    </Box>
  );
};

FavoriteContactsPage.defaultProps = {
  movies: [],
};

FavoriteContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default FavoriteContactsPage;
