import StatsItem from '../StatsItem/StatsItem';
import PropTypes from 'prop-types';

export default function StatsList({ stats }) {
  // // console.log(stats);
  // const keys = Object.keys(stats);
  // const values = Object.values(stats);
  // console.log(keys);
  // console.log(values);
  // for (const key of keys) {
  //   // Ключ
  //   console.log(key);
  //   // Значение свойства
  //   console.log(stats[key]);
  // }
  const entries = Object.entries(stats);
  console.log(entries);
  return (
    <ul>
      {entries.map((entry, index) => (
        <StatsItem key={index} stat={entry} />
      ))}
    </ul>
  );
}

StatsList.propTypes = {
  stats: PropTypes.object.isRequired,
};
