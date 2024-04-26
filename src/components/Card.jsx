import React, { useState } from 'react';
import cardData from '../data/cardData';
import { discardCard, addCard, stageCard } from '../functions/cardFunctions'; // Remove unnecessary imports
import { useEncounterDeck } from './EncounterDeck';
import '../styles/Card.css';
import { settlementDeck } from '../data/Decks';

const Card = ({ cardNumber, onCardFocus }) => {
    const [isFocused, setIsFocused] = useState(false);
    const { encounterDeck, setEncounterDeck, settlementDeck, setSettlementDeck } = useEncounterDeck(); // Ensure proper destructuring
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
            return settlementDeck;
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
                if (action.deck == 'encounterDeck') setEncounterDeck(updatedDeck); // Update the state with the new deck
                if (action.deck == 'settlementDeck') setSettlementDeck(updatedDeck);
                console.log(`Discarded card ${cardNumber} into ${action.deck}.`);
                removeCardFromStaged(cardNumber);
                break;

            case 'add':
                const newDeck = getDeckByName(action.deck).filter((c) => c !== cardNumber); // Trash (remove) the current card
                const finalDeck = addCard(getDeckByName(action.deck), action.addCardID, playerCount); // Add specific card to the deck
                if (action.deck == 'encounterDeck') setEncounterDeck(finalDeck); // Update the state with the new deck
                if (action.deck == 'settlementDeck') setSettlementDeck(finalDeck);
                removeCardFromStaged(cardNumber);
                break;

            case 'trash':
                if (!action.deck){
                    removeCardFromStaged(cardNumber);
                    break;
                }
                const newTDeck = getDeckByName(action.deck).filter((c) => c !== cardNumber); // Trash (remove) the current card
                if (action.deck == 'encounterDeck') setEncounterDeck(newTDeck); // Update the state with the new deck
                if (action.deck == 'settlementDeck') setSettlementDeck(newTDeck);
                removeCardFromStaged(cardNumber);
                break;


            case 'stage':
                setStagedCards([...stagedCards, ...action.cards]);
                if (action.type2 == 'add'){
                    const finalDeck = addCard(getDeckByName(action.deck), action.addCardID, playerCount); // Add specific card to the deck
                    if (action.deck == 'encounterDeck') setEncounterDeck(finalDeck); // Update the state with the new deck
                    if (action.deck == 'settlementDeck') setSettlementDeck(finalDeck);
                } 
                removeCardFromStaged(cardNumber);
                break;
            default:
                console.log(`Unknown action type for hover area ${index + 1}.`);
            
          
    
        }
        onCardFocus(null);
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
                style={{ width:'420px', height:'auto', }}
           
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


