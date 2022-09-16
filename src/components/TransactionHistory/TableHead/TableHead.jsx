import Box from 'components/Box/Box';
import PropTypes from 'prop-types';

export default function TableHead({ titles }) {
  return (
    <Box
      bg='primary'
      color='white'
      textTransform='uppercase'
    >
      <tr>
        {titles.map((title) => (
          <th key={title}>{title}</th>
          )
        )}
      </tr>
    </Box>
  )
}

TableHead.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string.isRequired),
}




