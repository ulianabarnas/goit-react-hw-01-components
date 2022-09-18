import Box from 'components/Box/Box';
import PropTypes from 'prop-types';
import TableBodyRow from '../TableBodyRow/TableBodyRow';


export default function TableBody({ items }) {
  return (
    <Box
      as="tbody"
      color="text"
      textAlign="center"
    >
      {items.map((item) => (
        <TableBodyRow key={item.id} item={item} />
      ))}
    </Box>
  )
}

TableBody.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
}