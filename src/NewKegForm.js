import React from 'react';
import { Link } from 'react-router-dom';
import './NewKegForm.css'

function NewKegForm(){
  return (
    <div className='NewKegForm'>
      <h1>Add a New Keg</h1>
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
      <Link to='/' className='NewKegForm-link'>Cancel</Link>
    </div>
  );
}

export default NewKegForm;
