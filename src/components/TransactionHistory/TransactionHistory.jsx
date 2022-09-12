import PropTypes from 'prop-types';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';


export default function TransactionHistory({ items }) {
  //get keys for columns' name
  const tableTitles = Object.keys(items[0]).slice(1);
  // console.log(tableTitles);

  return (
    <table>
      <TableHead titles={tableTitles} />
      <TableBody items={items} />
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}
