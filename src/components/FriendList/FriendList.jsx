import Box from 'components/Box/Box';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({friends}) {
  return (
    <Box
      as="ul"
      pt={5}
      maxWidth="300px"
      mx="auto"
    >
        {friends.map(({avatar, name, isOnline, id}) => {
            return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        })}
    </Box>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};