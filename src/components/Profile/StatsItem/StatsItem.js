import PropTypes from 'prop-types';

export default function StatsItem({ stat }) {
  console.log(stat);
  return (
    <li>
      <span className="label">{stat[0]}</span>
      <span className="quantity">{stat[1]}</span>
    </li>
  );
}

StatsItem.propTypes = {
  stat: PropTypes.array.isRequired,
};
