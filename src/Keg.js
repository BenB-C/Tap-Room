import React from 'react';
import PropTypes from 'prop-types';
import './Keg.css';

function Keg(props) {
  const priceStyles = {
    color: 'red',
    fontWeight: 'bold'
  }
  if (props.price < 5) {
    priceStyles.color = 'green';
  } 
  
  return (
    <div className='Keg'>
      <div className='Keg-info' id='Keg-name'>{props.name}</div>
      <div className='Keg-info' id='Keg-brand'>{props.brand}</div>
      <div className='Keg-info'>
        <div id='price' style={priceStyles}>Price: ${props.price}</div>
        <div id='alcoholContent'>ABV: {props.alcoholContent}%</div>
        <div id='pints'>Pints: {props.pints}</div>
      </div>
      <div className='Keg-buttons-container'>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <button id='Keg-button-sell'>Sell Pint</button>
      </div>
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
