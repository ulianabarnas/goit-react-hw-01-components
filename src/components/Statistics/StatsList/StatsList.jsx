import PropTypes from 'prop-types';
import StatsItem from '../StatsItem/StatsItem';

export default function StatsList({items}) {
  return (
    <ul>
      {items.map(({id, label, percentage}) => {
        return <StatsItem key={id} label={label} percentage={percentage}/>
      })}
    </ul>
  )
}

StatsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};