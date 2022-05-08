import logo from './logo.svg';
import './App.css';
import FriendListItem from './FriendListItem';
import friends from './friends.json'
import transaction from './transactions.json'
import TransactionHistory from './TransactionHistory';
import statistic from './statistic.json';
import Statistic from './StaticRender';
import user from './user.json'
import UserRender from './UserRender';


function App() {
  return (
    <FriendListItem
      items={friends}
    />,
    <TransactionHistory
      items={transaction}
    />,
    <Statistic
      items={statistic}
    />,
    <UserRender
      items={user}
      />
  );
}

export default App;
