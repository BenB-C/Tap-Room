import React from 'react';
import PropTypes from 'prop-types';
import './Keg.css';

function Keg(props){
  return (
    <div className='Keg'>
      <p><span className='Keg-name'>{props.name}</span> - <span className='Keg-brand'>{props.brand}</span></p>
      <p className='Keg-info'><span className='Keg-price'>Price: ${props.price}</span> <span className='Keg-alcoholContent'>ABV: {props.alcoholContent}%</span> <span className='Keg-pints'>Pints: {props.pints}<button>Sell Pint</button></span></p>
      
      <button>Edit</button>
      <button>Delete</button>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired
};

export default Keg;
