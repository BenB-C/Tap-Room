import React from 'react';
import PropTypes from 'prop-types';
import VerticalBar from './VerticalBar.js'
import './KegInfo.css';
import minus from './minus.png';

function KegInfo(props) {
  const priceStyles = {
    color: 'red',
    fontWeight: 'bold'
  }
  if (props.price < 5) {
    priceStyles.color = 'green';
  } 
  const kegStyles = {
    backgroundColor: '#d1ac6e' // For lower ABV beers
  }
  if (props.alcoholContent > 5) {
    kegStyles.backgroundColor = '#966d28'; // For higher ABV beers
  }
  
  return (
    <div style={kegStyles} className='KegInfo'>
      <div className='KegInfo-name-and-buttons-container'>
        <div className='KegInfo-name'>{props.name}</div>
        <div className='KegInfo-edit-delete-buttons'>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div className='KegInfo-brand'>{props.brand}</div>        <div className='KegInfo-price' style={priceStyles}>Price: ${props.price}</div>
      <div className='KegInfo-alcoholContent'>ABV: {props.alcoholContent}%</div>
    </div>
          
  );
}

KegInfo.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired
};

export default KegInfo;
