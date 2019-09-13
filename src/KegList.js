import React from 'react';
import { Link } from 'react-router-dom';
import Keg from './Keg';
import './KegList.css'

function KegList(props){
  const kegList = props.kegList;
  return (
    <div className='KegList'>
      <h1>Available Kegs</h1>
      <hr/>
      {kegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          key={index}/>
      )}
      <Link to='/newkeg' className='KegList-link'>Add a Keg</Link>
    </div>
  );
}

export default KegList;
