import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

import React, { useState } from 'react';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {

  const [cart, setCart] = useState({}); 

  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCount = (prev[id] || 0) - 1;
      if (newCount <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newCount };
    });
  };

  const clearCart = () => setCart({});

  const subtotal = menuItems.reduce((total, item) => {
    return total + (cart[item.id] || 0) * item.price;
  }, 0);

  const placeOrder = () => {
    const orderedItems = menuItems.filter(item => cart[item.id]);
    if (orderedItems.length === 0) {
      alert("No items in cart.");
      return;
    }
    const summary = orderedItems.map(item =>
      `${item.title}: ${cart[item.id]}`
    ).join('\n');
    alert(`Order placed!\n\n${summary}\n\nTotal: $${subtotal.toFixed(2)}`);
  };

  return (
    <div>
      <MenuHeader />
      <div className="menu">
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            {...item}
            quantity={cart[item.id] || 0}
            onAdd={() => addToCart(item.id)}
            onRemove={() => removeFromCart(item.id)}
          />
        ))}
      </div>
      <div className="cart-controls">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <button onClick={placeOrder}>Order</button>
        <button onClick={clearCart}>Clear All</button>
      </div>
    </div>
  );
}


export default App;
