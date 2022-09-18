import PropTypes from 'prop-types';
import { TableHeadData, TableHeadRow } from './TableHead.styled';

export default function TableHead({ titles }) {
  return (
    <thead>
      <TableHeadRow>
        {titles.map((title) => (
          <TableHeadData key={title}>{title}</TableHeadData>
          )
        )}
      </TableHeadRow>
    </thead>
  )
}

TableHead.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string.isRequired),
}




