import React from 'react';
import { Link } from 'react-router-dom';
import './EditKegForm.css'

function EditKegForm(props){
  console.log(props);
  return (
    <div className='EditKegForm'>
      <h1>Edit Keg Info</h1>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='number'
          id='alcoholContent'
          placeholder='ABV'/>
        <input
          type='number'
          id='price'
          placeholder='Price'/>
        <input
          type='number'
          id='pints'
          placeholder='Pints'/>
        <button type='submit'>Submit</button>
      </form>
      <Link to='/' className='EditKegForm-link'>Cancel</Link>
    </div>
  );
}

export default EditKegForm;
