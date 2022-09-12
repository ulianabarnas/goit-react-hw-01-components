import PropTypes from 'prop-types';
import TableBodyRow from '../TableBodyRow/TableBodyRow';


export default function TableBody({ items }) {
  return (
    <tbody>
      {items.map((item) => (
        <TableBodyRow key={item.id} item={item} />
        )
      )}
    </tbody>
  )
}

TableBody.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}