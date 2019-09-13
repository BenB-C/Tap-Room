import React from 'react';
import PropTypes from 'prop-types';
import KegInfo from './KegInfo.js';
import VerticalBar from './VerticalBar.js';
import './Keg.css';
import minus from './minus.png';

function Keg(props) {
  const keg = props.keg;
  return (
    <div className='Keg'>
      <div className='Keg-info-and-bar'>
        <KegInfo
          keg={keg}
          onDeleteKeg={props.onDeleteKeg}
        />
        <VerticalBar
          width={'75px'}
          height={keg.pints + 'px'}
          color={'green'}
          label={keg.pints + ' pints'}
        />
        <input
          type='image'
          src={minus}
          alt='minus button'
          title='Subtract a Pint'
          className='Keg-button-minus'
          onClick={() => props.onMinusPint(keg) }/>
      </div>
      <hr />
    </div>
  );
}

Keg.propTypes = {
  keg: PropTypes.object.isRequired,
  onMinusPint: PropTypes.func.isRequired
};

export default Keg;
