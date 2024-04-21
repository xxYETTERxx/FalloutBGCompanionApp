import React, { useState } from 'react';
import { encounterDeckData }  from './encounterDeckData';
import Card from './Card'; // Reference to your Card component

// Component for managing the encounter deck and drawing cards
const EncounterDeck = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Track the current card index

  const drawNextCard = () => {
    // Advance to the next card, loop back if at the end
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % encounterDeckData.length);
  };

  const currentCard = encounterDeckData[currentCardIndex]; // Get the current card data
  console.log(currentCard);

  return (
    <div>
      <h2>Encounter Deck</h2>
      <Card cardNumber={currentCard.cardNumber} /> {/* Display the current card */}
      <button onClick={drawNextCard}>Draw Next Card</button> {/* Button to draw the next card */}
    </div>
  );
};

export default EncounterDeck;
