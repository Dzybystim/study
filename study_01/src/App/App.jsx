import './App.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import user from '../user.json'


function App() {
const {username, tag, location, avatar, stats} = user

  return (
    <>
      <div className='container'>
        <ProfileCard 
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}/>
      </div>
    </>
  )
}

export default App
