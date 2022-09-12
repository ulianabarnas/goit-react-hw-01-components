import PropTypes from 'prop-types';
import Description from './Description/Description';
import StatsList from 'components/Profile/StatsList/StatsList';

export default function Profile({ user }) {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className="profile">
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
