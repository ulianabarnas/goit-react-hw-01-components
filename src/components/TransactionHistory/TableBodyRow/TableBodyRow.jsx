import PropTypes from 'prop-types';

export default function TableBodyRow({ item }) {

  return (
    <tr>
        {Object.values(item).slice(1).map((el, i) => (
          <td key={item.id + i}>{el}</td>
        ))}
    </tr>
  )
}

TableBodyRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}

