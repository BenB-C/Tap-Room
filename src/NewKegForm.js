import React from 'react';
import { Link } from 'react-router-dom';
import './NewKegForm.css'

function NewKegForm(){
  return (
    <div className='NewKegForm'>
    <Link to='/' className='NewKegForm-link'>Back to Keg List</Link>
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
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

export default NewKegForm;
