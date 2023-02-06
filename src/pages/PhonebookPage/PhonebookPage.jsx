import { Box, Title } from './PhonebookPage.styled';
import { MyContacts } from 'components/MyContacts/MyContacts';

const PhonebookPage = () => {
  return (
    <Box>
      <Title>Phonebook</Title>
      <MyContacts />
    </Box>
  );
};

export default PhonebookPage;
