import React from 'react'

function SmurfItem(props) {

  return (
    <div className='smurf-item'>
      <h3>{props.smurf.name}</h3>
      <p>
        <span>{props.smurf.age} yrs old</span>, <span>{props.smurf.height} tall</span>
      </p>
      <button onClick={props.delete}>Delete</button>
    </div>
  )
}

export default SmurfItem;