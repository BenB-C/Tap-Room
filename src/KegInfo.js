import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './KegInfo.css';

function KegInfo(props) {
  const keg = props.keg;
  const priceStyles = {}
  if (keg.price > 5) {
    priceStyles.fontWeight = 'bold';
  }
  const abvStyles = {}
  if (keg.alcoholContent > 5) {
    abvStyles.fontWeight = 'bold';
  }

  function handleClickOnDelete() {
    props.onDeleteKeg(keg);
  }

  return (
    <div className='KegInfo'>
      <div className='KegInfo-name'>{keg.name}</div>
      <div className='KegInfo-brand'>{keg.brand}</div>
      <div className='KegInfo-price' style={priceStyles}>${keg.price}</div>
      <div className='KegInfo-alcoholContent' style={abvStyles}>{keg.alcoholContent}%</div>
      <div>
        <Link to={{
          pathname: '/editkeg',
          state: { keg: props.keg }
        }}><button>Edit</button></Link>
      </div>
      <div>
        <button onClick={handleClickOnDelete}>Delete</button>
      </div>
    </div>

  );
}

KegInfo.propTypes = {
  keg: PropTypes.object.isRequired
};

export default KegInfo;
