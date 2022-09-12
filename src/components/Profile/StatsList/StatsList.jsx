import StatsItem from '../StatsItem/StatsItem';
import PropTypes from 'prop-types';

export default function StatsList({ stats }) {
  const entries = Object.entries(stats);
  return (
    <ul>
      {entries.map((entry, index) => {
        const [key, value] = entry;
        return <StatsItem key={index} label={key} quantity={value} />;
      })}
    </ul>
  );
}

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
