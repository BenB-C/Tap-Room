import React from 'react';
import PropTypes from 'prop-types';
import KegInfo from './KegInfo.js';
import VerticalBar from './VerticalBar.js';
import './Keg.css';
import minus from './../images/minus.png';
import strong from './../images/strong.png'
import expensive from './../images/expensive.png'

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
  const strongImgStyles = {}
  if (keg.alcoholContent >= 5) {
    kegStyles.backgroundColor = '#966d28'; // For higher ABV beers
  } else {
    strongImgStyles.display = 'none';
  }
  const expensiveImgStyles = {}
  if (keg.price < 5) {
    expensiveImgStyles.display = 'none';
  }
  return (
    <div className='Keg-container'>
      <div className='Keg-img-container'>
        <img style={expensiveImgStyles} className='Keg-img' src={expensive} alt='stack of dollar bills'/>
        <img style={strongImgStyles} className='Keg-img' src={strong} alt='strong arm clipart'/>
      </div>
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
    </div>
  );
}

Keg.propTypes = {
  keg: PropTypes.object.isRequired,
  onMinusPint: PropTypes.func.isRequired
};

export default Keg;
