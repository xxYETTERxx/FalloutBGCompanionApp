// StagingArea.jsx
import React, { useState } from 'react';
import Card from './Card'; // Importing other required components
import '../styles/StagingArea.css'; // Importing CSS
import {  useEncounterDeck } from './EncounterDeck';
import DrawCardButton from './DrawCardButton'; // Import draw card button
import QuestMarkers from './QuestMarkers';

const StagingArea = ({ onCardFocus,  }) => {
    const { stagedCards, drawCard, vault7Active, vault44Active, vault84Active, vault109Active   } = useEncounterDeck();
    const [ questMarkers,  ] = useState(['Y','LB','B','P','R','O']);
    const [currentMarkerIndex, setCurrentMarkerIndex] = useState(0); // To track current index
    const [renderedMarkers, setRenderedMarkers] = useState([]); 

    const createMarker = () => {
        const token = questMarkers[currentMarkerIndex];
        const nextIndex = (currentMarkerIndex + 1) % questMarkers.length;
        setCurrentMarkerIndex(nextIndex);
        setRenderedMarkers([...renderedMarkers, token]);
    };

    const removeMarker = (index) => {
        const updatedMarkers = renderedMarkers.filter((_, i) => i !== index); // Remove by index
        setRenderedMarkers(updatedMarkers); // Update the state
    };

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
                    onClick={() => onCardFocus(drawCard('encounter'))} // Placeholder
                />
                <DrawCardButton
                    type="settlement"
                    onClick={() => onCardFocus(drawCard('settlement'))} // Placeholder
                />
                {vault7Active && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="vault7"
                            onClick={() => onCardFocus(drawCard('vault7'))} // Placeholder
                        />
                    </>
                )}    
                {vault44Active && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="vault44"
                            onClick={() => console.log("Vault 1 button clicked")} // Placeholder
                        />
                    </>
                )}    
                {vault84Active && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="vault84"
                            onClick={() => console.log("Vault 1 button clicked")} // Placeholder
                        />
                    </>
                )}    
                {vault109Active && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="vault109"
                            onClick={() => console.log("Vault 1 button clicked")} // Placeholder
                        />
                    </>
                )}
                <div className='utility-buttons'> 
                    <button className='quest-marker-button' onClick={createMarker}>Quest Marker</button>
                    <button className='undo'>Undo</button>
                </div>    
        </div>
        {renderedMarkers.map((markerId, index) => (
                <QuestMarkers 
                    key={index} 
                    markerId={markerId}
                    onRemove={() => removeMarker(index)}
                />
            ))}
    </div>
    );
};

export default StagingArea; // Default export
