import PropTypes from 'prop-types';
import Description from './Description/Description';
import StatsList from 'components/Profile/StatsList/StatsList';
import Box from 'components/Box/Box';

export default function Profile({ user }) {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Box
      maxWidth={300}
      mx='auto'
      borderRadius='normal'
      boxShadow='normal'
      overflow="hidden">
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <StatsList stats={stats} />
    </Box>
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
