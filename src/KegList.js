import React from 'react';
import { Link } from 'react-router-dom';
import Keg from './Keg';
import './KegList.css'

var masterKegList = [
  {
    name: 'Coors Light',
    brand: 'Coors Brewing Company',
    price: 134.99,
    alcoholContent: 4.2,
    pints: 124
  },
  {
    name: 'Belgian White Ale',
    brand: 'Blue Moon Brewing Company',
    price: 169.99,
    alcoholContent: 5.4,
    pints: 124
  },
  {
    name: 'Especial',
    brand: 'Modelo',
    price: 194.99,
    alcoholContent: 4.4,
    pints: 124
  },
  {
    name: 'Bud Light',
    brand: 'Anheuser-Busch',
    price: 134.99,
    alcoholContent: 4.2,
    pints: 124
  },
];

function KegList(){
  return (
    <div className='KegList'>
      <Link to='/newkeg' className='KegList-link'>Add a Keg</Link>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}          
          key={index}/>
      )}
    </div>
  );
}

export default KegList;
