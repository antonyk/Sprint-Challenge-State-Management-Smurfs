import React from 'react';


function SmurfAdd() {

  return (
    <>
      <form className='add-item-form' onSubmit={(e) => {e.preventDefault()} }>
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

export default SmurfAdd;