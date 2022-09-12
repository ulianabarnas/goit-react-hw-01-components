import PropTypes from 'prop-types';

export default function StatsItem({ label, quantity }) {
  // console.log(stat);
  return (
    <li>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
