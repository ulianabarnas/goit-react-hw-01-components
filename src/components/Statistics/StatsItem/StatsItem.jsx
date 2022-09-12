import PropTypes from 'prop-types';

export default function StatsItem({label, percentage}) {
  return (
    <li>
        <span>{label}</span>
        <span>{percentage}%</span>
    </li>
  )
}

StatsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}