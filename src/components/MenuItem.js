import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, imageName, quantity, onAdd, onRemove}) => {
  return (
    <div className="menu-item">
      <img
        src={`https://huynhry.github.io/cs378-p2/images/${imageName}`}
        alt={title}
        className="menu-item-image"
      />
      <div className="menu-item-text">
        <h2 className="menu-item-title">{title}</h2>
        <p className="menu-item-description">{description}</p>
        <div className="menu-item-bottom">
          <span className="menu-item-price">${price}</span>
          <div className="quantity-controls">
            <button onClick={onRemove} disabled={quantity === 0}>−</button>
            <span>{quantity}</span>
            <button onClick={onAdd}>+</button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default MenuItem;
