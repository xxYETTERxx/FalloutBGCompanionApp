import React from 'react';
import cardData from './cardData';
import '../styles/Card.css'; // Import the CSS file

// Component for displaying a card with a number and corresponding picture
const Card = ({ cardNumber }) => {
  const cardInfo = cardData[cardNumber]; // Get the data for the given card number

  if (!cardInfo) {
    return <div>Error: Card data not found for card {cardNumber}</div>; // Handle missing card data
  }

 
  const { hoverAreas, imagePath} = cardInfo; // Extract relevant data

  return (
    <div className="card-wrapper">
      <img
        src={imagePath}
        alt={`Card ${cardNumber}`}
        style={{ width: '100%', height: 'auto' }}
      />
      {hoverAreas.map((area, index) => (
        <div
          key={index}
          className="option-overlay"
          style={area} // Apply the hover area from cardData
        ></div>
      ))}
    </div>
  );
};

export default Card;


