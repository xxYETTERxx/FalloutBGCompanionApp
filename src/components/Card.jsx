import React, { useState } from 'react';
import cardData from '../data/cardData';
import { discardCard, addCard, stageCard, shuffleDeck } from '../functions/cardFunctions'; // Remove unnecessary imports
import { useEncounterDeck } from './EncounterDeck';
import '../styles/Card.css';
import { settlementDeck } from '../data/Decks';
import { act } from 'react-dom/test-utils';

const Card = ({ cardNumber, onCardFocus }) => {
    const [isFocused, setIsFocused] = useState(false);
    const { encounterDeck, setEncounterDeck, settlementDeck, setSettlementDeck, vault7Deck, setVault7Deck, vault44Deck, setVault44Deck, vault84Deck, setVault84Deck, vault109Deck, setVault109Deck } = useEncounterDeck(); // Ensure proper destructuring
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
            break;
        case 'settlementDeck':
            return settlementDeck;
            break;
        case 'vault7Deck':
            return vault7Deck;
            break;
        case 'vault44Deck':
            return vault44Deck;
            break;
        case 'vault84Deck':
            return vault84Deck;
            break;
        case 'vault109Deck':
            return vault109Deck;
            break;    
        default:
            console.log("Invalid DeckByNameEntry");
            return null; // Handle unknown deck names
    }
};


    const handleHoverClick = (index) => {
        const action = actions[index]; // Get the action based on hover area index
        if (!action) return; // If no action, do nothing

        const deck = getDeckByName(action.deck);
        
        for(const type of action.type){

            switch (type) {
                case 'discard':
                    const updatedDeck = discardCard(deck, cardNumber); // Discard to the bottom of the deck
                    switch (action.deck){
                        case 'encounterDeck':
                            setEncounterDeck(updatedDeck);
                            break;
                        case 'settementDeck':
                            setSettlementDeck(updatedDeck);
                            break;
                        default:
                            break;
                    }
                    console.log(`Discarded card ${cardNumber} into ${action.deck}.`);
                    removeCardFromStaged(cardNumber);
                    break;

                case 'add':
                    let i =0;
                    let currentDeck; 
            
                    if (action.addDeck.length > 1){  
                        console.log('dualrunning');
                        for(const cardID of action.addCardIDS){
                            console.log();
                            currentDeck = getDeckByName(action.addDeck[i]);
                            currentDeck = addCard(currentDeck, cardID, playerCount); // Add specific card to the deck 
                            console.log("currentDeck: ", currentDeck);                                  
                            
                            switch (action.addDeck[i]){
                                
                            case 'encounterDeck':
                                setEncounterDeck(currentDeck);
                                console.log(action.addDeck[i]);
                                break;
                            case 'settlementDeck':
                                setSettlementDeck(currentDeck);
                                console.log(action.addDeck[i]);
                                break;
                            }
                            i++;

                        }
                    }
                    else{
                    if(action.addDeck.length == 1){
                        console.log('singlerunning');
                        for(const cardID of action.addCardIDS){
                            console.log(action.addDeck[0]);
                            currentDeck = getDeckByName(action.addDeck[0]);
                            currentDeck = addCard(currentDeck, cardID, playerCount); // Add specific card to the deck
                            console.log(currentDeck);
                        }                                   
                        switch (action.addDeck[0]){
                            case 'encounterDeck':
                                setEncounterDeck(currentDeck);
                                break;
                            case 'settlementDeck':
                                setSettlementDeck(currentDeck);
                                break;
                        }
                    }
                    else{
                        switch (action.addDeck[0]){
                            case 'vault84Deck':
                                setVault84Deck(action.addCardIDS);
                                break;
                            case 'vault7Deck':
                                setVault7Deck(action.addCardsIDS);
                                break;
                        }

                    }
                    removeCardFromStaged(cardNumber);
                    break;
                }

                case 'trash':
                    if (!action.deck){
                        removeCardFromStaged(cardNumber);
                        break;
                    }
                    if(getDeckByName(action.deck.length) > 0){
                    const newTDeck = getDeckByName(action.deck).filter((c) => c !== cardNumber); // Trash (remove) the current card
                
                  
                    switch (action.deck){
                            case 'encounterDeck':
                                setEncounterDeck(newTDeck);
                                break;
                            case 'settlementDeck':
                                setSettlementDeck(newTDeck);
                                break;
                            case 'vault7Deck':
                                setVault7Deck(newTDeck);
                                break;
                            case 'vault44Deck':
                                setVault44Deck(newTDeck);
                                break;
                            case 'vault84Deck':
                                setVault84Deck(newTDeck);
                                break;
                            case 'set':
                                setSettlementDeck(newTDeck);
                                break;
                        }
                    }
                    
                    
                removeCardFromStaged(cardNumber);
                break;


                case 'stage':
                    setStagedCards([...stagedCards, ...action.cards]);
                    removeCardFromStaged(cardNumber);
                    break;
              
                case 'createDeck':
                    switch(action.deckType){
                        case 'vault84Deck':
                            setVault84Deck(action.startCards);
                            console.log(actions.deckType);
                            break;
                        case 'vault7Deck':
                            setVault7Deck(action.startCards[0]);
                            break;
                        case 'vault44Deck':
                            setVault44Deck(action.startCards[0]);
                            break;
                        case 'vault109Deck':
                        setVault109Deck(action.startCards[0]);
                        break;
                        default:
                            console.log("invalid Decktype");
                            break;
                    }
                    break;

                case 'buildVault':
                    switch(action.deckType){
                        case 'vault84Deck':
                            const startV84Deck = action.addCardIDS;
                            const shuffleV84Deck = shuffleDeck(startV84Deck);
                            const gameV84Deck = shuffleV84Deck.slice(0,playerCount);
                            setVault84Deck(gameV84Deck);
                            break;
                        case 'vault7Deck':
                            const startV7Deck = action.addCardIDS;
                            const shuffleV7Deck = shuffleDeck(startV7Deck);
                            const gameV7Deck = shuffleV7Deck.slice(0,playerCount);
                            setVault7Deck(gameV7Deck);
                            break;
                        case 'vault44Deck':
                            const startV44Deck = action.addCardIDS;
                            const shuffleV44Deck = shuffleDeck(startV44Deck);
                          
                            const gameV44Deck = shuffleV44Deck.slice(0,playerCount);
                            
                            setVault44Deck(gameV44Deck);
                            break;
                        case 'vault109Deck':
                            const startV109Deck = action.addCardIDS;
                            const shuffleV109Deck = shuffleDeck(startV109Deck);
                            const gameV109Deck = shuffleV109Deck.slice(0,playerCount);
                            setVault109Deck(gameV109Deck);
                            break;
                    }
                    break;
                
                    case 'checkLast':
                        const tempDeck = action.deckName;
                        console.log("LastCard: ", tempDeck);
                        console.log("InsideLastCard",getDeckByName(action.deckName));
                    break;
                    //if(getDeckByName(action.deck).length == 0)
                    default:
                    console.log(`Unknown action type for hover area ${index + 1}.`);
                }
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


