import React from 'react';
import menuData from './menuData';

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      {menuData.map(item => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
