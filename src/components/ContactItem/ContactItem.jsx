import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
import { IconButton } from 'components/IconButton/IconButton';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { ContactEditForm } from 'components/ContactEditModal/ContactEditForm';

import { Button } from 'components/ContactForm/Button';
import { StyledItem, ContactImg, Box } from './ContactItem.styled';
import defaultUserImg from '../../images/default.png';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';
import { ReactComponent as StarIcon } from '../../icons/star.svg';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { editContact } from 'redux/contacts/contacts-slice';

export const ContactItem = ({
  id,
  name,
  avatar,
  number,
  favorite,
  removeContact,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();

  const onEditContactSubmit = payload => {
    const action = editContact(payload);
    dispatch(action);
    toggleEditModal();
  };

  const toggleEditModal = () => {
    setShowEditModal(prevState => !prevState);
  };

  return (
    <>
      {showEditModal && (
        <Modal onClose={toggleEditModal}>
          <ContactEditForm
            contactId={id}
            name={name}
            avatar={avatar}
            number={number}
            favorite={favorite}
            onSubmit={onEditContactSubmit}
          />
          <IconButton
            onClick={toggleEditModal}
            type="button"
            aria-label="Close modal window"
          >
            <CloseIcon width="20" height="20" fill="#29668b" />
          </IconButton>
        </Modal>
      )}
      <StyledItem>
        <Box>
          <StarIcon
            width="30"
            height="30"
            fill={favorite ? 'yellow' : 'grey'}
          />
          <ContactImg
            src={avatar === '' ? defaultUserImg : avatar}
            alt={name}
          />
          {name}
          <PhoneIcon width="20" height="20" fill="#29668b"></PhoneIcon>
          {number}
        </Box>
        <Button
          onClick={toggleEditModal}
          type="button"
          aria-label="Edit contact"
        >
          <EditIcon width="20" height="20" fill="#29668b" />
        </Button>
        <Button
          type="button"
          text="Delete"
          active
          onClick={removeContact}
        ></Button>
      </StyledItem>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  favorite: PropTypes.bool,
};
