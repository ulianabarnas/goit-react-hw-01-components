import PropTypes from 'prop-types';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import {Table} from './TransactionHistory.styled';


export default function TransactionHistory({ items }) {
  //get keys for columns' titles
  const tableTitles = Object.keys(items[0]).slice(1);

  return (
    <Table>
      <TableHead titles={tableTitles} />
      <TableBody items={items} />
    </Table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
