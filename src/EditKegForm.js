import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './EditKegForm.css';

function EditKegForm(props){
  const keg = props.keg;
  if (!keg) {
    props.history.push('/');
    return null;
  }
  let _name = null;
  let _brand = null;
  let _alcoholContent = null;
  let _price = null;
  let _pints = null;

  function handleSubmitEditKeg(event) {
    event.preventDefault();
    props.onEditKeg(keg, {
      name: _name.value,
      brand: _brand.value,
      alcoholContent: parseInt(_alcoholContent.value),
      price: parseInt(_price.value),
      pints: parseInt(_pints.value)
    });
    props.history.push('/');
  }

  return (
    <div className='EditKegForm'>
      <h1>Edit Keg {props.kegIndex} Info</h1>
      <form>
        Name
        <input
          type='text'
          id='name'
          defaultValue={keg.name}
          ref={(input) => {_name = input;}} />
        Brand
        <input
          type='text'
          id='brand'
          defaultValue={keg.brand}
          ref={(input) => {_brand = input;}} />
        Alcohol Content
        <input
          type='number'
          id='alcoholContent'
          defaultValue={keg.alcoholContent}
          ref={(input) => {_alcoholContent = input;}} />
        Price
        <input
          type='number'
          id='price'
          defaultValue={keg.price}
          ref={(input) => {_price = input;}} />
        Pints
        <input
          type='number'
          id='pints'
          defaultValue={keg.pints}
          ref={(input) => {_pints = input;}} />
        <button type='submit' onClick={handleSubmitEditKeg}>Submit</button>
      </form>
      <Link to='/' className='EditKegForm-link'><button>Cancel</button></Link>
    </div>
  );
}

EditKegForm.props = {
  keg: PropTypes.object.isRequired,
  onEditKeg: PropTypes.func.isRequired
}

export default withRouter(EditKegForm);
