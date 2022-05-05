import logo from './logo.svg';
import './App.css';
import FriendListItem from './FriendListItem';
import friends from './friends.json'


function App() {
  return (
    <FriendListItem
      items={friends}
    />
  );
}

export default App;
