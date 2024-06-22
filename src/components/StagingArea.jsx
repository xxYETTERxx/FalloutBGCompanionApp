// StagingArea.jsx
import React, { useState, useEffect, useRef } from 'react';
import Card from './Card'; // Importing other required components
import '../styles/StagingArea.css'; // Importing CSS
import {  useEncounterDeck } from './EncounterDeck';
import DrawCardButton from './DrawCardButton'; // Import draw card button
import QuestMarkers from './QuestMarkers';
import PlayerInventory from './PlayerInventory';
import MessageDisplay from './MessageDisplay';
import MessageLog from './MessageLog';

const StagingArea = ({ onCardFocus }) => {
    const { autoSave, setShowOverlay, showOverlay, overlayContent, players, playerCards, setPlayerCards, stagedCards, drawCard, vault7Active, vault44Active, vault84Active, vault109Active, specialStarActive, specialShieldActive, setStagedCards, storeHistory, restoreHistory} = useEncounterDeck();
    const [ questMarkers,  ] = useState(['Y','LB','B','P','R','O']);
    const [currentMarkerIndex, setCurrentMarkerIndex] = useState(0); // To track current index
    const [renderedMarkers, setRenderedMarkers] = useState([]);
    const [playerInventoryActive, setPlayerInventoryActive] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [showMessageLog, setShowMessageLog] = useState(false);
    const stagingAreaRef = useRef(null);
    const cardRefs = useRef([]);
    
    
    
    const toggleMessageLog = () => {
        setShowMessageLog(!showMessageLog);
      };


    const onMarkerDragEnd = (markerRef, collidedCard) => {
        if (collidedCard) {
            console.log('Marker collided with a card:', collidedCard);
    
            if (markerRef instanceof Node && collidedCard instanceof Node) {
                // Update marker position relative to the container
                const markerRect = markerRef.getBoundingClientRect();
                const containerRect = document.querySelector('.quest-marker-container').getBoundingClientRect();
    
                markerRef.style.left = `${markerRect.left - containerRect.left}px`;
                markerRef.style.top = `${markerRect.top - containerRect.top}px`;
    
                // Your existing logic for appending the marker to the card
            }
        } else {
            console.log('No collision detected, marker dropped in staging area');
        }
    };

    const onMarkerDragStart = (markerRef) => {
        if (markerRef && markerRef.parentElement !== stagingAreaRef.current) {
            
            stagingAreaRef.current.appendChild(markerRef);
            markerRef.style.position = 'absolute';
        }
    };

    useEffect(() => {
        if (stagingAreaRef.current) {
            // Center the scroll position on the first load
            const firstCard = stagingAreaRef.current.querySelector('.card');
            if (firstCard) {
                stagingAreaRef.current.scrollLeft = firstCard.offsetLeft - (stagingAreaRef.current.offsetWidth / 2) + (firstCard.offsetWidth / 2);
            }
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    
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
    
    const numberArray = generateNumberArray(1, 244); 
    
    const [testNumber, setTestNumber] = useState(0);
    
    const testingF = () => {
        setTestNumber(testNumber+1);
        onCardFocus(numberArray[testNumber]);
    };
    
    const [inputText, setInputText] = useState('');
    const handleChange = (event) => {
        setInputText(event.target.value);
    };
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setTestNumber(parseInt(inputText, 10));
            onCardFocus(inputText);
        }
    };

    const setInputCard = () => {
        if (inputText)
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
         <div className= "message"><MessageDisplay /></div>
        {showOverlay && (
            <div className="overlay">
                {overlayContent}
                <button onClick={() => setShowOverlay(false)}>Cancel</button>
            </div>
            )}
        <div ref= {stagingAreaRef} className="staging-area">
            {stagedCards.map((card, index) => (
                <div className='card-container' key={card}>
                    <Card ref={(el) => (cardRefs.current[index] = el)} className='card' cardNumber={card} onCardFocus={onCardFocus} />
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
            <div className= 'utility-container'>
                        {(screenWidth <= 600 || screenHeight < 850) && (
                            <>
                                <button
                                    className="button-84"
                                    style={{ width: '100%' }}
                                    onClick={() => { onCardFocus(drawCard('encounter')); storeHistory(); }}
                                    >
                                    Encounter
                                    </button>
                                    <button
                                    className="button-84"
                                    style={{ width: '100%' }}
                                    onClick={() => { onCardFocus(drawCard('settlement')); storeHistory(); }}
                                    >
                                    Settlement
                                    </button>
                                    {vault7Active && (
                                    <button
                                        className="button-84"
                                        style={{ width: '100%' }}
                                        onClick={() => { onCardFocus(drawCard('vault7')); storeHistory(); }}
                                    >
                                        Vault 7
                                    </button>
                                    )}
                                    {vault84Active && (
                                    <button
                                        className="button-84"
                                        style={{ width: '100%' }}
                                        onClick={() => { onCardFocus(drawCard('vault84')); storeHistory(); }}
                                    >
                                        Vault 84
                                    </button>
                                    )}
                                    {vault109Active && (
                                    <button
                                        className="button-84"
                                        style={{ width: '100%' }}
                                        onClick={() => { onCardFocus(drawCard('vault109')); storeHistory(); }}
                                    >
                                        Vault 109
                                    </button>
                                    )}
                                    {vault44Active && (
                                    <button
                                        className="button-84"
                                        style={{ width: '100%' }}
                                        onClick={() => { onCardFocus(drawCard('vault44')); storeHistory(); }}
                                    >
                                        Vault 44
                                    </button>
                                    )}
                                    {specialStarActive && (
                                    <button
                                        className="button-84"
                                        style={{ width: '100%' }}
                                        onClick={() => { onCardFocus(drawCard('specialStar')); storeHistory(); }}
                                    >
                                        Special Star
                                    </button>
                                    )}
                                    {specialShieldActive && (
                                    <button
                                        className="button-84"
                                        style={{ width: '100%' }}
                                        onClick={() => { onCardFocus(drawCard('specialShield')); storeHistory(); }}
                                    >
                                        Special Shield
                                    </button>
                                    )}
                                    <button
                                    className="button-84"
                                    style={{ width: '100%' }}
                                    onClick={restoreHistory}
                                    >
                                    Undo
                                    </button>
                                    <button
                                    className="button-84"
                                    style={{ width: '100%' }}
                                    onClick={togglePlayerInventory}
                                    >Inventory</button>
                                    <button
                                    className="button-84"
                                    style={{ width: '100%' }}
                                    onClick={createMarker}
                                    >QuestMarker</button>
                            </>
                        )}
                            {(screenWidth > 600 && screenHeight > 850) && (
                            <> 
                                <button className='button-84' onClick={createMarker}>Quest Marker</button>
                                <button className='button-84' onClick={restoreHistory}>Undo</button>
                                <button className='button-84' onClick={togglePlayerInventory}>Player Inventory</button>
                            </>
                            )}
                            {/* <button className='button-84' onClick={setInputCard}>Stage Card</button>
                            <input
                                className ="border-solid"
                                type="text" // Specifies a text input field
                                value={inputText} // Binds the state variable to the input field
                                onChange={handleChange} // Updates state when the input changes
                                onKeyDown={handleKeyDown}
                            />  */}
                            <button
                    onClick={toggleMessageLog}
                    className="button-84"
                >
                    History Log
                </button>
                        
               
            </div>
            <div className="bottom-segment">
                <div className={`button-area ${screenWidth <= 600} flex flex-row`}>
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
                    </div>
                   
                </div>  
                
                
                <div>
                
                <MessageLog show={showMessageLog} onClose={toggleMessageLog} />
                </div>
                {renderedMarkers.map((markerId, index) => (
                    <QuestMarkers
                        className='quest-marker'
                        key={markerId}
                        markerId={markerId}
                        onRemove={() => removeMarker(index)}
                        onDragEnd={onMarkerDragEnd}
                        onDragStart={onMarkerDragStart}
                        cardRefs={cardRefs.current} // Pass cardRefs.current as an array
                    />
                ))}
        
    </div>
    );
};

export default StagingArea; // Default export


