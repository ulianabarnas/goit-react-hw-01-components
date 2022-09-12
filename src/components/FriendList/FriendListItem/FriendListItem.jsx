import PropTypes from 'prop-types';

export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <li>
        <span className="status"></span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}