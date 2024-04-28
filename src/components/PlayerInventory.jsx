import React, { useState } from 'react';
import Card from './Card'; // Import a component to display individual cards
import '../styles/PlayerInventory.css'; // Apply styles for full-screen overlay

const PlayerInventory = ({ players, playerCards }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null); // State to track the selected player
  const [isVisible, setIsVisible] = useState(false); // State to control visibility of the inventory

  const handleButtonClick = (playerName) => {
    setSelectedPlayer(playerName); // Set the selected player
    setIsVisible(true); // Show the inventory
  };

  const handleClose = () => {
    setIsVisible(false); // Close the inventory
  };

  return (
    <div>
      {/* Button area to select a player and open the inventory */}
      <div className="button-area">
        {players.map((player, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(player)} // Open the inventory for the selected player
            className="player-button"
          >
            Player {index + 1}
          </button>
        ))}
      </div>

      {/* Full-screen overlay for the inventory */}
      {isVisible && (
        <div className="player-inventory-overlay">
          <button onClick={handleClose} className="close-button">Close</button> {/* Button to close the overlay */}
          <h2>Player {selectedPlayer}'s Inventory</h2>
          <div className="player-cards">
            {playerCards[selectedPlayer]?.map((card) => (
              <Card key={card} cardNumber={card} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerInventory;
