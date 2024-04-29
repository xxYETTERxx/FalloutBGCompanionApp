// PlayerInventory.jsx
import React, { useState } from 'react';
import Card from './Card'; // Component for individual cards
import '../styles/PlayerInventory.css'; // Ensure proper overlay styles

const PlayerInventory = ({ players, playerCards, setPlayerCards, onClose }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null); // State for the selected player

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  const handleCardClick = ( player, cardNumber) => {

     setPlayerCards((prevPlayerCards) => {
        const updatedCards = { ...prevPlayerCards };
        updatedCards[player] = updatedCards[player].filter((card) => card !== cardNumber);
        return updatedCards; // Return the updated cards without the one that was right-clicked
      });
    };



  return (
    <div className="player-inventory-overlay">
      <button onClick={onClose} className="close-button">Close</button> {/* Button to close overlay */}
      <h2>Player Inventory</h2>

      {/* Player selection buttons */}
      <div className="player-buttons">
        {players.map((player, index) => (
          <button key={index} onClick={() => handlePlayerSelect(player)}>
            Player {index + 1}
          </button>
        ))}
      </div>

      {/* Display the selected player's cards */}
      {selectedPlayer && (
        <div className="player-cards">
          {playerCards[selectedPlayer]?.map((cardNumber) => (
            <div 
            key={cardNumber} 
            onClick={(event) => handleCardClick(selectedPlayer, cardNumber)} // Attach right-click handler
          >
            <Card cardNumber={cardNumber} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayerInventory;
