import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, imageName}) => {
  return (
    <div className="menu-item">
      <img
        src={`./images/${imageName}`}
        alt={title}
        className="menu-item-image"
      />
      <div className="menu-item-text">
        <h2 className="menu-item-title">{title}</h2>
        <p className="menu-item-description">{description}</p>
        <div className="menu-item-bottom">
          <span className="menu-item-price">${price}</span>
          <button className="menu-item-button">Add</button>
        </div>
      </div>
    </div>
  );

};

export default MenuItem;
