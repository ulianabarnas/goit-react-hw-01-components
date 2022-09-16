import PropTypes from 'prop-types';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import Box from 'components/Box/Box';


export default function TransactionHistory({ items }) {
  //get keys for columns' titles
  const tableTitles = Object.keys(items[0]).slice(1);

  return (
    <Box
      mt={5}
      boxShadow='normal'
      borderRadius='normal'
      overflow='hidden'
    >
      <TableHead titles={tableTitles} />
      <TableBody items={items} />
    </Box>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
