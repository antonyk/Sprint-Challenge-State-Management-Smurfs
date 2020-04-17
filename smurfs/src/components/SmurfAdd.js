import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../store/smurfActions';

function SmurfAdd(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState('');

  const [formData, setFormData] = useState({})

  function addSmurf(e) {
    e.preventDefault();
    // const data = new FormData(e.target);
    console.log('data: ',formData)
    props.postSmurf(formData)
  }

  function formChangeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // console.log(formData)
  }

  return (
    <>
      <form className='add-item-form' onSubmit={(e) => addSmurf(e)}>
        <label className='form-item'>Name 
          <input name='name' type='text' onChange={formChangeHandler} />
        </label>
        <label className='form-item'>Age 
          <input name='age' type='text' onChange={formChangeHandler} />
        </label>
        <label className='form-item'>Height 
          <input name='height' type='text' onChange={formChangeHandler} />
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