import React, { useContext } from 'react';
import { MenuContext } from './MenuContext';
import './UserMenu.css';

function UserMenu() {
  const { menuData } = useContext(MenuContext);

  return (
    <div>
      <h2>Menu</h2>
      {menuData.map((item, index) => (
        <div key={index} className="menuItem">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default UserMenu;