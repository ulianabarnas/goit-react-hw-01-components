import StatsItem from '../StatsItem/StatsItem';
import PropTypes from 'prop-types';
import { List } from './StatsList.styled';

export default function StatsList({ stats }) {
  const entries = Object.entries(stats);
  return (
    <List>
      {entries.map((entry, index) => {
        const [key, value] = entry;
        return <StatsItem key={index} label={key} quantity={value} />;
      })}
    </List>
  );
}

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
