import PropTypes from 'prop-types';

export default function TableHead({ titles }) {
  return (
    <thead>
      <tr>
        {titles.map((title) => (
          <th key={title}>{title}</th>
          )
        )}
      </tr>
    </thead>
  )
}

TableHead.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
}




