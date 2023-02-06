import { Box, Title, StyledLink as Link } from './NotExistingPage.styled.';

const NotExistingPage = () => {
  return (
    <Box>
      <Title>Not Existing Page</Title>
      <Link to="/">To Home page</Link>
    </Box>
  );
};

export default NotExistingPage;
