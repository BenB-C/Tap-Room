import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './NewKegForm.css'

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _alcoholContent = null;
  let _price = null;
  let _pints = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onAddKeg({
      name: _name.value,
      brand: _brand.value,
      alcoholContent: parseInt(_alcoholContent.value),
      price: parseInt(_price.value),
      pints: parseInt(_pints.value)
    });
    props.history.push('/');
  }

  return (
    <div className='NewKegForm'>
      <h1>Add a New Keg</h1>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}} />
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}} />
        <input
          type='number'
          id='alcoholContent'
          placeholder='ABV'
          ref={(input) => {_alcoholContent = input;}} />
        <input
          type='number'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}} />
        <input
          type='number'
          id='pints'
          placeholder='Pints'
          ref={(input) => {_pints = input;}} />
        <button type='submit' onClick={handleNewKegFormSubmission}>Submit</button>
      </form>
      <Link to='/' className='NewKegForm-link'><button>Cancel</button></Link>
    </div>
  );
}

NewKegForm.propTypes = {
  onAddKeg: PropTypes.func.isRequired
};

export default withRouter(NewKegForm);
