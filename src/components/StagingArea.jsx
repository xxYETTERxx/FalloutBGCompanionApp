// StagingArea.jsx
import React, { useState } from 'react';
import Card from './Card'; // Importing other required components
import '../styles/StagingArea.css'; // Importing CSS
import {  useEncounterDeck } from './EncounterDeck';

const StagingArea = ({ onCardFocus }) => {
    const { stagedCards } = useEncounterDeck();

    const [drawnCard, setDrawnCard] = useState(null); // State to track the last drawn card
    const DrawCardButton = ({ setDrawnCard }) => {
    const { drawEncounter, drawSettlement } = useEncounterDeck();
   
    const handleDraw = () => {
        const drawnCard = drawEncounter(); // Draw a card from the deck
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

    return (
       
        <div className="staging-area"> {/* Ensure context access */}
            {stagedCards.map((card) => (
                <div key={card} onContextMenu={() => onCardFocus(card)}>
                    <Card cardNumber={card} onCardFocus={onCardFocus}/> {/* Render the card */}
                </div>
            ))}
            <div>
                {drawnCard && <Card cardNumber={drawnCard} />} {/* Conditionally render drawn card */}
            </div>
            <div>
                <DrawCardButton setDrawnCard={setDrawnCard} /> {/* Draw card button */}
            </div>
            
        </div>
        
      
    );
};

export default StagingArea; // Default export
