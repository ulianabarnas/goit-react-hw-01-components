import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({friends}) {
  return (
    <ul>
        {friends.map(({avatar, name, isOnline, id}) => {
            return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        })}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};