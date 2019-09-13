import React from 'react';
import PropTypes from 'prop-types';
import KegInfo from './KegInfo.js';
import VerticalBar from './VerticalBar.js';
import './Keg.css';
import minus from './minus.png';

function Keg(props) {
  const keg = props.keg;
  let barColor = null;
  if (keg.pints < 10) {
    barColor = 'red';
  } else {
    barColor = 'green';
  }
  const kegStyles = {
    backgroundColor: '#d1ac6e' // For lower ABV beers
  }
  if (keg.alcoholContent > 5) {
    kegStyles.backgroundColor = '#966d28'; // For higher ABV beers
  }
  return (
    <div className='Keg' style={kegStyles}>
      <KegInfo className = 'Keg-KegInfo'
        keg={keg}
        onDeleteKeg={props.onDeleteKeg} />
      <div className='Keg-bar-and-minus-button'>
        <VerticalBar
          width={'80px'}
          height={keg.pints + 'px'}
          color={barColor}
          label={keg.pints + ' pints'} />
        <input
          type='image'
          src={minus}
          alt='minus button'
          title='Subtract a Pint'
          className='Keg-button-minus'
          onClick={() => props.onMinusPint(keg) }/>
      </div>
    </div>
  );
}

Keg.propTypes = {
  keg: PropTypes.object.isRequired,
  onMinusPint: PropTypes.func.isRequired
};

export default Keg;
