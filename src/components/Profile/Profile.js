import PropTypes from 'prop-types';
import Description from './Description/Description';
import StatsList from './StatsList/StatsList';

export default function Profile({ user }) {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <StatsList stats={stats} />
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
