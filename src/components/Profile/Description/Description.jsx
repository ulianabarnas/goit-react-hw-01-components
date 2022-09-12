import PropTypes from 'prop-types';

export default function Description({ username, tag, location, avatar }) {
  return (
    <div>
      <img src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
}

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
