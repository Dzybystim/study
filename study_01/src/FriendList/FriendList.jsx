import './FriendList.css'


function FriendList ({friends}) {

    return(
<ul className='friend-list'>
     
    {friends.map(({id,avatar,name, isOnline}) => {
        const classNames = ['status'];
        isOnline ? classNames.push('online') : classNames.push('offline')

        console.log (classNames)
return (
      <li className='itemFriend' key={id}>
        <span className={classNames.join(' ')} ></span>
        <img className='avatar' src={avatar} alt="User avatar" width="48" />
        <p className='name'>{name}</p>
      </li>
)

})}
</ul>
    );
};

export default FriendList