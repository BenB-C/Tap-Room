import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './KegInfo.css';

function KegInfo(props) {
  const keg = props.keg;
  const priceStyles = {
    color: 'red',
    fontWeight: 'bold'
  }
  if (keg.price < 5) {
    priceStyles.color = 'green';
  }
  const kegStyles = {
    backgroundColor: '#d1ac6e' // For lower ABV beers
  }
  if (keg.alcoholContent > 5) {
    kegStyles.backgroundColor = '#966d28'; // For higher ABV beers
  }

  return (
    <div style={kegStyles} className='KegInfo'>
      <div className='KegInfo-name-and-buttons-container'>
        <div className='KegInfo-name'>{keg.name}</div>
        <div className='KegInfo-edit-delete-buttons'>
          <Link to={{
              pathname: '/editkeg',
              state: { keg: props.keg }
            }}><button>Edit</button></Link>
          <button>Delete</button>
        </div>
      </div>
      <div className='KegInfo-brand'>{keg.brand}</div>
      <div className='KegInfo-price' style={priceStyles}>Price: ${keg.price}</div>
      <div className='KegInfo-alcoholContent'>ABV: {keg.alcoholContent}%</div>
    </div>

  );
}

KegInfo.propTypes = {
  keg: PropTypes.object.isRequired
};

export default KegInfo;
