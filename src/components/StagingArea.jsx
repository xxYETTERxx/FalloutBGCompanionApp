// StagingArea.jsx
import React, { useState } from 'react';
import Card from './Card'; // Importing other required components
import '../styles/StagingArea.css'; // Importing CSS
import {  useEncounterDeck } from './EncounterDeck';
import DrawCardButton from './DrawCardButton'; // Import draw card button
import QuestMarkers from './QuestMarkers';
import PlayerInventory from './PlayerInventory';

const StagingArea = ({ onCardFocus }) => {
    
    
    const { setShowOverlay, showOverlay, overlayContent, players, playerCards, setPlayerCards, stagedCards, drawCard, vault7Active, vault44Active, vault84Active, vault109Active, specialStarActive, specialShieldActive, setStagedCards, storeHistory, restoreHistory} = useEncounterDeck();
    const [ questMarkers,  ] = useState(['Y','LB','B','P','R','O']);
    const [currentMarkerIndex, setCurrentMarkerIndex] = useState(0); // To track current index
    const [renderedMarkers, setRenderedMarkers] = useState([]);
    const [playerInventoryActive, setPlayerInventoryActive] = useState(false);
    
    
    const togglePlayerInventory = () => {
        setPlayerInventoryActive((prevState) => !prevState);
    };

    //testing
    const generateNumberArray = (start, end) => {
        const arr = [];
        for (let i = start; i <= end; i++) {
            // Convert number to a three-digit string with leading zeros
            const formattedNumber = i.toString().padStart(3, '0');
            arr.push(formattedNumber); // Add the formatted string to the array
        }
        return arr;
    };
    
    const numberArray = generateNumberArray(1, 244); // Array from '001' to '244'
    
    const [testNumber, setTestNumber] = useState(0);
    
    const testingF = () => {
        setTestNumber(testNumber+1);
        onCardFocus(numberArray[testNumber]);
    };
    const testingR = () => {
        setTestNumber(testNumber-1);
        onCardFocus(numberArray[testNumber]);
    };
    
    const [inputText, setInputText] = useState('');
    const handleChange = (event) => {
        setInputText(event.target.value);
    };
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents the default behavior of the Enter key (e.g., adding new lines)
            setTestNumber(parseInt(inputText, 10));
            onCardFocus(inputText);
        }
    };

    const setInputCard = () => {
        setStagedCards([...stagedCards, inputText]);
    }
    //testing complete
    
    
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
        {showOverlay && (
            <div className="overlay">
                {overlayContent}
                <button onClick={() => setShowOverlay(false)}>Cancel</button>
            </div>
            )}
        <div className="staging-area"> {/* Ensure context access */}
            {stagedCards.map((card) => (
                <div className='p-2.5' key={card} onContextMenu={() => onCardFocus(card)}>
                    <Card cardNumber={card} onCardFocus={onCardFocus} /> {/* Render the card */}
                </div>
            ))}
            {/* Conditionally render PlayerInventory as an overlay */}
            {playerInventoryActive && (
                <PlayerInventory
                players={players}
                playerCards={playerCards}
                setPlayerCards={setPlayerCards} // Pass set function to update the state
                onClose={togglePlayerInventory}
                onCardFocus={onCardFocus}
              />
            )}
                    
                
            </div>
            <div className="button-area"> {/* Inline button area below the play area */}
            <DrawCardButton
                    type="encounter"
                    onClick={() => {onCardFocus(drawCard('encounter'));storeHistory();}} // Placeholder
                />
                <DrawCardButton
                    type="settlement"
                    onClick={() => {onCardFocus(drawCard('settlement'));storeHistory();}} // Placeholder
                />
                {vault7Active && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="vault7"
                            onClick={() => {onCardFocus(drawCard('vault7'));storeHistory();}} // Placeholder
                        />
                    </>
                )}    
                {vault84Active && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="vault84"
                            onClick={() => {onCardFocus(drawCard('vault84'));storeHistory();}} // Placeholder
                        />
                    </>
                )}    
                {vault109Active && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="vault109"
                            onClick={() => {onCardFocus(drawCard('vault109'));storeHistory();}} // Placeholder
                        />
                    </>
                )}    
                {vault44Active && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="vault44"
                            onClick={() => {onCardFocus(drawCard('vault44'));storeHistory();}} // Placeholder
                        />
                    </>
                )}
                {specialStarActive && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="specialStar"
                            onClick={() => {onCardFocus(drawCard('specialStar'));storeHistory();}} // Placeholder
                        />
                    </>
                )}
                {specialShieldActive && ( /* Conditional rendering for vault buttons */
                    <>
                        <DrawCardButton
                            type="specialShield"
                            onClick={() => {onCardFocus(drawCard('specialShield'));storeHistory();}} // Placeholder
                        />
                    </>
                )}

                <div className='utility-buttons'> 
                    <button className='button-84' onClick={createMarker}>Quest Marker</button>
                    <button className='button-84'onClick={restoreHistory}>Undo</button>
                    <button className='button-84' onClick={testingF}>Fwd</button>
                    {/* <button className='button-84' onClick={testingR}>Bkwd</button> */}
                    <button className='button-84' onClick={togglePlayerInventory}>Player Inventory</button>
                    <button className='button-84' onClick={setInputCard}>Stage Card</button>
                    <input
                        type="text" // Specifies a text input field
                        value={inputText} // Binds the state variable to the input field
                        onChange={handleChange} // Updates state when the input changes
                        onKeyDown={handleKeyDown}
                    />
                </div>
                
        </div>
        {renderedMarkers.map((markerId, index) => (
                <QuestMarkers className='quest-marker'
                    key={markerId} 
                    markerId={markerId}
                    onRemove={() => removeMarker(index)}
                />
            ))}
    </div>
    );
};

export default StagingArea; // Default export
