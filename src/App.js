import React, { useState } from 'react';
import Card from './components/Card'; // Adjust the import path based on your project structure
import { EncounterDeckProvider, useEncounterDeck } from './components/EncounterDeck';

const DrawCardButton = ({ setDrawnCard }) => {
    const { drawCard } = useEncounterDeck(); // Use the drawCard function from the context

    const handleDraw = () => {
        const drawnCard = drawCard(); // Draw a card from the deck
        if (drawnCard) {
            setDrawnCard(drawnCard); // Set the drawn card in the parent state
        } else {
            console.log('No cards left in the deck'); // If the deck is empty, log a message
        }
    };

    return (
        <button onClick={handleDraw}>
            Draw Card
        </button>
    );
};

// Main component
const App = () => {
  const [drawnCard, setDrawnCard] = useState(null); // State to track the last drawn card

  return (
    <div style={{ display: 'flex', justifyContent: 'left', margin: '10px', height: '100vh' }}>
      <EncounterDeckProvider>
            <div>
              <DrawCardButton setDrawnCard={setDrawnCard} />
            </div>
            {drawnCard && <Card cardNumber={drawnCard} />} {/* Conditionally render Card */}
      
        <Card cardNumber={"E03"} /> {/* This will display the card with number 1 and its corresponding image */}
        {/*<Card cardNumber={"001"} /> {/* This will display the card with number 1 and its corresponding image */}
        </EncounterDeckProvider>
    </div>
  );
};

export default App;

