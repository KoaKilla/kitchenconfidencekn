import React, { useState, useContext } from 'react';
import { MenuContext } from './MenuContext';
import menuData from './menuData';


function AdminMenu() {
  const { menuData, setMenuData } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  // const [initialMenuData, setInitialMenuData] = useState(menuData);

  const handleNameChange = event => setName(event.target.value);
  const handlePriceChange = event => setPrice(parseFloat(event.target.value));
  const handleDescriptionChange = event => setDescription(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const updatedMenuData = [...menuData];
    if (editingIndex !== null) {
      // Editing an existing item
      updatedMenuData[editingIndex] = { name, price, description };
    } else {
      // Adding a new item
      updatedMenuData.push({ name, price, description });
    }
    setMenuData(updatedMenuData);
    setName('');
    setPrice(0);
    setDescription('');
    setEditingIndex(null);
  };

  const handleEdit = index => {
    setName(menuData[index].name);
    setPrice(menuData[index].price);
    setDescription(menuData[index].description);
    setEditingIndex(index);
  };

  const handleDelete = index => {
    const updatedMenuData = [...menuData];
    updatedMenuData.splice(index, 1);
    setMenuData(updatedMenuData);
  };

  return (
    <div>
      <h2>{editingIndex !== null ? 'Edit Item' : 'Add Item'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} required />
        <br />
        <label>Price:</label>
        <input type="number" value={price} onChange={handlePriceChange} min="0" step="0.01" required />
        <br />
        <label>Description:</label>
        <textarea value={description} onChange={handleDescriptionChange} required />
        <br />
        <button type="submit">{editingIndex !== null ? 'Save' : 'Add'}</button>
        {editingIndex !== null && <button type="button" onClick={() => setEditingIndex(null)}>Cancel</button>}
      </form>
      <h2>Current Menu Items</h2>
      {menuData.map((item, index) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>${item.price.toFixed(2)}</p>
          <button type="button" onClick={() => handleEdit(index)}>Edit</button>
          <button type="button" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminMenu;
