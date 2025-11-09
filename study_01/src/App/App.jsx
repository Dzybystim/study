import './App.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import Statistics from '../Statistics/Statistics'
import FriendList from '../FriendList/FriendList'
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'


function App() {
const {username, tag, location, avatar, stats} = user;

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
        friends={friends}/>
      </div>
    </>
  )
}

export default App
