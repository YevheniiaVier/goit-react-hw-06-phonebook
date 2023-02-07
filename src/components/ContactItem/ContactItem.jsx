import PropTypes from 'prop-types';
import { IconButton } from './IconButton';
import { Button } from 'components/ContactForm/Button';
import { StyledItem, ContactImg, Box } from './ContactItem.styled';
import defaultUserImg from '../../images/default.png';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';
import { ReactComponent as StarIcon } from '../../icons/star.svg';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';

export const ContactItem = ({
  name,
  avatar,
  number,
  favorite,
  removeContact,
}) => {
  console.log(name);
  return (
    <StyledItem>
      <Box>
        <StarIcon width="30" height="30" fill={favorite ? 'yellow' : 'grey'} />
        <ContactImg src={avatar === '' ? defaultUserImg : avatar} alt={name} />
        {name}
        <PhoneIcon width="20" height="20" fill="#29668b"></PhoneIcon>
        {number}
      </Box>
      <IconButton
        // onClick={toggleModal}
        type="button"
        aria-label="Add to favorite"
      >
        <EditIcon width="20" height="20" fill="#29668b" />
      </IconButton>
      <Button
        type="button"
        text="Delete"
        active
        onClick={removeContact}
      ></Button>
    </StyledItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  favorite: PropTypes.bool,
};
