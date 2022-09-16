import Box from 'components/Box/Box';
import PropTypes from 'prop-types';
import {Photo, Name, Info} from './Description.styled';

export default function Description({ username, tag, location, avatar }) {
  return (
    <Box
      pt={5}
      pb={4}
      px={4}
      textAlign="center">
      <Photo src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Info>@{tag}</Info>
      <Info>{location}</Info>
    </Box>
  );
}

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
