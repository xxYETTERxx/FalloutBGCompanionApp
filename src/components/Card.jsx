import React, { useState } from 'react';
import cardData from '../data/cardData';
import { discardCard, addCard, stageCard } from '../functions/cardFunctions'; // Remove unnecessary imports
import { useEncounterDeck } from './EncounterDeck';
import '../styles/Card.css';

const Card = ({ cardNumber, onCardFocus }) => {
    const [isFocused, setIsFocused] = useState(false);
    const { encounterDeck, setEncounterDeck } = useEncounterDeck(); // Ensure proper destructuring
    const { playerCount } = useEncounterDeck();
    const { stagedCards, setStagedCards } = useEncounterDeck();

    const toggleFocus = (e) => {
        e.preventDefault();
        setIsFocused((prev)=> !prev);
    }

    const removeCardFromStaged = (cardNumber) => {
        setStagedCards((prevStagedCards) => {
          return prevStagedCards.filter((card) => card !== cardNumber); // Filter out the specific card
        });
      };


    const cardInfo = cardData[cardNumber]; // Get data for the given card
    if (!cardInfo) {
        return <div>Error: Card data not found for card {cardNumber}</div>; // Handle missing card data
    }



    const { hoverAreas, imagePath, actions } = cardInfo; // Get hover areas and actions
    
    const getDeckByName = (deckName) => {
    switch (deckName) {
        case 'encounterDeck':
            return encounterDeck;
        case 'settlementDeck':
        default:
            return null; // Handle unknown deck names
    }
};


    const handleHoverClick = (index) => {
        const action = actions[index]; // Get the action based on hover area index
        if (!action) return; // If no action, do nothing

        const deck = getDeckByName(action.deck);

        switch (action.type) {
            case 'discard':
                const updatedDeck = discardCard(deck, cardNumber); // Discard to the bottom of the deck
                setEncounterDeck(updatedDeck); // Update the state with the new deck
                console.log(`Discarded card ${cardNumber} into ${action.deck}.`);
                removeCardFromStaged(cardNumber);
                break;

            case 'add':
                const newDeck = addCard(getDeckByName(action.deck), action.addCardID, playerCount); // Add specific card to the deck
                console.log("newDeck: ", newDeck);
                const finalDeck = newDeck.filter((c) => c !== cardNumber); // Trash (remove) the current card
                setEncounterDeck(finalDeck); // Update the state
                console.log(`Added card ${action.addCardID} and trashed card ${cardNumber}.`);
                removeCardFromStaged(cardNumber);
                break;

            case 'trash':
                const newTDeck = getDeckByName(action.deck).filter((c) => c !== cardNumber); // Trash (remove) the current card
                setEncounterDeck(newTDeck);
                removeCardFromStaged(cardNumber);
                break;


            case 'stage':
                setStagedCards(stageCard(stagedCards,action.cardID));
                removeCardFromStaged(cardNumber);
                break;
            default:
                console.log(`Unknown action type for hover area ${index + 1}.`);
                break;
        }
    };

    return (
        <div className= "card-wrapper"
            onContextMenu={(e) => {
                e.preventDefault();
                onCardFocus(cardNumber);
            }}
            >

            <img
                src={imagePath}
                alt={`Card}${cardNumber}`}
                style={{ width: '100%', height: '80vh' }} // Adjust size when focused 
            />
            {hoverAreas.map((area, index) => (
                <div
                    key={index}
                    className="option-overlay"
                    style={area} // Apply hover area styling
                    onClick={() => handleHoverClick(index)} // Trigger appropriate action
                ></div>
            ))}
        </div>
    );
};

export default Card;


