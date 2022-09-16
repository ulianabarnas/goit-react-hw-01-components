import PropTypes from 'prop-types';

export default function TableBodyRow({ item }) {
  const values = Object.values(item).slice(1);

  return (
    <tr>
        {values.map((value, index) => (
          <td key={item.id + index}>{value}</td>
        ))}
    </tr>
  )
}

TableBodyRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}

