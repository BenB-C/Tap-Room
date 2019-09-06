import React from 'react';
import { Link } from 'react-router-dom';
import Keg from './Keg';
import './KegList.css'

var masterKegList = [
  {
    name: 'Coors Light',
    brand: 'Coors Brewing Company',
    price: 3,
    alcoholContent: 4.2,
    pints: 124
  },
  {
    name: 'Belgian White Ale',
    brand: 'Blue Moon Brewing Company',
    price: 5,
    alcoholContent: 5.4,
    pints: 124
  },
  {
    name: 'Especial',
    brand: 'Modelo',
    price: 6,
    alcoholContent: 4.4,
    pints: 124
  },
  {
    name: 'Bud Light',
    brand: 'Anheuser-Busch',
    price: 3,
    alcoholContent: 4.2,
    pints: 124
  },
];

function KegList(){
  return (
    <div className='KegList'>
      <h1>Available Kegs</h1>
      <hr/>
      {masterKegList.map((keg, index) =>
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
