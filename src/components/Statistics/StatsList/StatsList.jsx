import Box from 'components/Box/Box';
import PropTypes from 'prop-types';
import StatsItem from '../StatsItem/StatsItem';

export default function StatsList({items}) {
  return (
    <Box
      as="ul"
      display="flex"
      borderRadius='normal'
      overflow='hidden'
      boxShadow='normal'
    >
      {items.map(({id, label, percentage}) => {
        return <StatsItem key={id} label={label} percentage={percentage}/>
      })}
    </Box>
  )
}

StatsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};