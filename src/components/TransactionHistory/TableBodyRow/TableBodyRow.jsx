import PropTypes from 'prop-types';
import { Data, Row } from './TableBodyRow.styled';

export default function TableBodyRow({ item }) {
  const values = Object.values(item).slice(1);

  return (
    <Row>
        {values.map((value, index) => (
          <Data key={item.id + index}>{value}</Data>
        ))}
    </Row>
  )
}

TableBodyRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}

