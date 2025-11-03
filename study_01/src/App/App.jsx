import './App.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import Statistics from '../Statistics/Statistics'
import FriendList from '../FriendList/FriendList'
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'


function App() {
const {username, tag, location, avatar, stats} = user;
const {avataro, name, isOnline, ido} = friends;

  return (
    <>
      <div className='container'>
        <ProfileCard 
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}/>
        <Statistics title="Upload stats" stats={data}/>
        <FriendList 
        avatar={avataro}
        name={name}
        isOnline={isOnline}
        id={ido}/>
      </div>
    </>
  )
}

export default App
