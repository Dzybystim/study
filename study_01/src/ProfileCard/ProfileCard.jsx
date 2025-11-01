import './ProfileCard.css'

function ProfileCard ({username, tag, location, avatar, stats}) {

    return (
<div className='profile'>
  <div className='description'>
    <img 
      src={avatar}
      alt={username}
      className='avatar'
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
    )
}

export default ProfileCard