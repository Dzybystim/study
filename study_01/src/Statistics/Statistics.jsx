import './Statistics.css'




function Statistics ({title, stats}) {

    function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');}
    
    return (
    <section className='statistics'>

    {title && (<h2 className='title'>{title}</h2>)}

    <ul className='stat-list'>
     {stats.map(({id, label, percentage})=> {

    const randomColor = getRandomHexColor();

    const boxStyle = {
        backgroundColor: randomColor,}
     

    return (
    <li style={boxStyle} className='item' key={id} >
      <span className='label'>{label}</span>
      <span className='percentage'>{percentage+'%'}</span>
    </li>);

      })}

  </ul>
</section>
    )
}

export default Statistics