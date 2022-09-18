import user from 'data/user.json'
import data from 'data/data.json'
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics'
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import Box from 'components/Box/Box';

export const App = () => {
  return (
    <Box
      width="70%"
      mx="auto"
      py={5}
      color='black'
      as="main"
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
