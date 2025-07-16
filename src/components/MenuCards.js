import React from 'react';
import '../styles.css';

const menuItems = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
    title: 'Greek Salad',
    info: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/4969892/pexels-photo-4969892.jpeg',
    title: 'Bruschetta',
    info: 'Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg',
    title: 'Lemon Cake',
    info: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

const MenuCards = () => {
  return (
    <div className="menu-container">
      <h2 className="menu-heading">Our Menu</h2>
      <br />
      <br/>
      <div className="card-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.title} className="menu-image" />
            <div className="menu-content">
              <h3 className="menu-title">{item.title}</h3>
              <p className="menu-info">{item.info}</p>
              <div className="menu-footer">
                <button className="reserve-button">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCards;
