import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './StatsItem.styled';

export default function StatsItem({label, percentage}) {
  return (
    <Item>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
    </Item>
  )
}

StatsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}