import React from 'react';
import PropTypes from 'prop-types';
import KegInfo from './KegInfo.js';
import VerticalBar from './VerticalBar.js';
import './Keg.css';
import minus from './minus.png';

function Keg(props) {
  return (
    <div className='Keg'>
      <div className='Keg-info-and-bar'>
        <KegInfo
          name={props.name}
          brand={props.brand}
          price={props.price}
          alcoholContent={props.alcoholContent}
          pints={props.pints}
        />
        <VerticalBar
          width={'50px'}
          height={props.pints + 'px'}
          color={'green'}
          label={props.pints + ' pints left'}
        />
        <input type='image' src={minus} alt='minus button' title='Subtract a Pint' className='Keg-button-minus' />
      </div>
      <hr />
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
