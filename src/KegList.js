import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Keg from './Keg';
import './KegList.css';

function KegList(props){
  return (
    <div className='KegList'>
      <Link to='/newkeg' className='KegList-link'><button>Add a Keg</button></Link>
      <h1>Available Kegs</h1>
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg
          keg={keg}
          key={index}
          onMinusPint={props.onMinusPint} />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array.isRequired,
  onMinusPint: PropTypes.func.isRequired
};

export default KegList;
