import logo from './logo.svg';
import './App.css';
import FriendListItem from './FriendListItem';
import friends from './friends.json'
import transaction from './transactions.json'
import TransactionHistory from './TransactionHistory';

function App() {
  return (
    <FriendListItem
      items={friends}
    />,
    <TransactionHistory
      items={transaction}
    />
  );
}

export default App;
