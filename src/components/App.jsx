import Profile from '../components/Profile/Profile'
import userData from '../userData.json'
import FriendList from '../components/FriendList/FriendList'
import friend from '../friend.json'
import TransactionHistory from '../components/TransactionHistory/TransactionHistory'
import transactions from '../transactions.json'
import css from './App.module.css'
import "modern-normalize";


export default function App(){
    return(
      <div className={css.container}>
      <Profile userdata = {userData} />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions}/>
      </div>
    );
  }