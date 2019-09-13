import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Keg from './Keg';
import './KegList.css';

function KegList(props){
  let filterButton = null;
  let heading = null;
  if (props.listIsFiltered) {
    filterButton = <button className='KegList-button' onClick={handleClickOnShowAll}>Show All Kegs</button>;
    heading = <h1>Almost Empty Kegs</h1>;
  } else {
    filterButton = <button className='KegList-button' onClick={handleClickOnShowEmpty}>Show Almost Empty Kegs</button>;
    heading = <h1>All Kegs</h1>;
  }

  function handleClickOnShowEmpty() {
    props.onFilterList(true);
  }

  function handleClickOnShowAll() {
    props.onFilterList(false);
  }

  return (
    <div className='KegList'>
      { filterButton }
      <Link to='/newkeg' className='KegList-link'>
        <button className='KegList-button'>Add a Keg</button>
      </Link>
      { heading }
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg
          keg={keg}
          key={index}
          onMinusPint={props.onMinusPint}
          onDeleteKeg={props.onDeleteKeg} />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array.isRequired,
  onMinusPint: PropTypes.func.isRequired,
  onDeleteKeg: PropTypes.func.isRequired,
  onFilterList: PropTypes.func.isRequired
};

export default KegList;
