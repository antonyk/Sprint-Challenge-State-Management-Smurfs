import React from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../store/smurfActions';

function SmurfAdd(props) {

  function addSmurf(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log({data})
    props.postSmurf(data)
  }

  return (
    <>
      <form className='add-item-form' onSubmit={addSmurf}>
        <label className='form-item'>Name 
          <input name='name' type='text' />
        </label>
        <label className='form-item'>Age 
          <input name='age' type='text' />
        </label>
        <label className='form-item'>Height 
          <input name='height' type='text' />
        </label>
        <button className='form-button' >Add</button>
      </form>
    </>
  )
}

function mapToProps() {
  return {} 
}

export default connect(mapToProps, {
  postSmurf
})(SmurfAdd);