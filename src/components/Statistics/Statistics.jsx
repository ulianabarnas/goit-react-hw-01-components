import PropTypes from 'prop-types';
import StatsList from 'components/Statistics/StatsList/StatsList'
import Box from 'components/Box/Box';
import { Title } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Box
      as="section"
      pt={5}
      textAlign="center"
    >
      {title && (<Title>{title}</Title>)}
      <StatsList items={stats} />
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};