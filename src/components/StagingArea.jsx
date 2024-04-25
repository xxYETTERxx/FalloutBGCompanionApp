// StagingArea.jsx
import React, { useState } from 'react';
import Card from './Card'; // Importing other required components
import '../styles/StagingArea.css'; // Importing CSS
import {  useEncounterDeck } from './EncounterDeck';
import DrawCardButton from './DrawCardButton'; // Import draw card button

const StagingArea = ({ onCardFocus, vaultActive }) => {
    const { stagedCards } = useEncounterDeck();

    return (
       <div>
        <div className="staging-area"> {/* Ensure context access */}
            {stagedCards.map((card) => (
                <div style={{padding:'10px'}} key={card} onContextMenu={() => onCardFocus(card)}>
                    <Card cardNumber={card} onCardFocus={onCardFocus}/> {/* Render the card */}
                </div>
            ))}
          
            
                
            </div>
            <div className="button-area"> {/* Inline button area below the play area */}
            <DrawCardButton
                    type="encounter"
                    onClick={() => console.log("Encounter button clicked")} // Placeholder
                />
                <DrawCardButton
                    type="settlement"
                    onClick={() => console.log("Settlement button clicked")} // Placeholder
                />
                {vaultActive && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="vault1"
                            onClick={() => console.log("Vault 1 button clicked")} // Placeholder
                        />
                        <DrawCardButton
                            type="vault2"
                            onClick={() => console.log("Vault 2 button clicked")} // Placeholder
                        />
                        <DrawCardButton
                            type="vault3"
                            onClick={() => console.log("Vault 3 button clicked")} // Placeholder
                        />
                        <DrawCardButton
                            type="vault4"
                            onClick={() => console.log("Vault 4 button clicked")} // Placeholder
                        />
                    </>
                )}
        </div>
    </div>
    );
};

export default StagingArea; // Default export
