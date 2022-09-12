import PropTypes from 'prop-types';
import StatsList from 'components/Statistics/StatsList/StatsList'

export default function Statistics({ title, stats }) {
  return (
    <section>
      {title && (<h2>{title}</h2>)}
      <StatsList items={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};