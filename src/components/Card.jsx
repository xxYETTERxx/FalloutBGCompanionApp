import React, { useState, useEffect } from 'react';
import cardData from '../data/cardData';
import { discardCard, addCard, shuffleDeck } from '../functions/cardFunctions';
import { useEncounterDeck } from './EncounterDeck';
import '../styles/Card.css';

const Card = ({ cardNumber, onCardFocus, isDisabled }) => {
    const { showMessage, promptPlayerForCard, drawCard, encounterDeck, setEncounterDeck, settlementDeck, setSettlementDeck, vault7Deck, setVault7Deck, vault44Deck, setVault44Deck, vault84Deck, setVault84Deck, vault109Deck, setVault109Deck, hasBeenDrawn74, setHasBeenDrawn74, specialStarDeck, setSpecialStarDeck, specialShieldDeck, setSpecialShieldDeck, storeHistory } = useEncounterDeck(); // Ensure proper destructuring
    const { playerCount } = useEncounterDeck();
    const { stagedCards, setStagedCards } = useEncounterDeck();
    const [blurVisibility, setBlurVisibility] = useState({});
    const cardInfo = cardData[cardNumber];
    
    useEffect(() => {
        if (cardInfo && cardInfo.blurAreas) {
            const initialVisibility = cardInfo.blurAreas.reduce((acc, _, index) => {
                acc[index] = true;  // Start with all blur areas visible
                return acc;
            }, {});
            setBlurVisibility(initialVisibility);
        }
    }, [cardNumber, cardInfo]); 

    const removeCardFromStaged = (cardNumber) => {
        setStagedCards((prevStagedCards) => {
          return prevStagedCards.filter((card) => card !== cardNumber); // Filter out the specific card
        });
      };

      
      
    if (!cardInfo) {
        return <div>Error: Card data not found for card {cardNumber}</div>; // Handle missing card data
    }
    
 




    const { hoverAreas, imagePath, actions, blurAreas } = cardInfo; // Get hover areas and actions
    
    // Toggle blur visibility
    const toggleBlur = (index) => {
        setBlurVisibility(prev => ({
            ...prev,
            [index]: !prev[index] // Toggle the visibility state for the clicked blur area
        }));
    };

    const getDeckByName = (deckName) => {
   
    switch (deckName) {
        case 'encounterDeck':
            return encounterDeck;
        case 'settlementDeck':
            return settlementDeck;
        case 'vault7Deck':
            return vault7Deck;
        case 'vault44Deck':
            return vault44Deck;
        case 'vault84Deck':
            return vault84Deck;
        case 'vault109Deck':
            return vault109Deck;
        case 'specialStarDeck':
            return specialStarDeck;
        case 'specialShieldDeck':
            return specialShieldDeck;       
        default:
            console.log("Invalid DeckByNameEntry:", deckName);
            return null; // Handle unknown deck names
    }
};


    const handleHoverClick = (index) => {
        storeHistory();
        const action = actions[index]; // Get the action based on hover area index
        if (!action) return; // If no action, do nothing
        if (!isDisabled){
            for(const type of action.type){
    

                switch (type) {
                    case 'discard':
                        const updatedDeck = discardCard(getDeckByName(action.deck), cardNumber); // Discard to the bottom of the deck
                        
                        switch (action.deck){
                            case 'encounterDeck':
                                setEncounterDeck(updatedDeck);
                                break;
                            case 'settlementDeck':
                                setSettlementDeck(updatedDeck);
                                break;
                            case 'vault84Deck':
                                setVault84Deck(updatedDeck);
                                break;
                            case 'vault109Deck':
                                setVault109Deck(updatedDeck);
                                break;
                            case 'vault7Deck':
                                setVault7Deck(updatedDeck);
                            break;
                            default:
                                console.log("discard deck not found");
                                break;
                        }
                        removeCardFromStaged(cardNumber);
                        showMessage(cardNumber + " discarded into " + action.deck);
                        break;

                    case 'add':
                        let i =0;
                        let currentDeck; 
                
                        if (action.addDeck.length > 1){  
                          
                            for(const cardID of action.addCardIDS){
        
                                currentDeck = getDeckByName(action.addDeck[i]);
                                currentDeck = addCard(currentDeck, cardID, playerCount); // Add specific card to the deck 
                                                    
                                
                                switch (action.addDeck[i]){
                                    
                                case 'encounterDeck':
                                    setEncounterDeck(currentDeck);
                                    
                                    break;
                                case 'settlementDeck':
                                    setSettlementDeck(currentDeck);
                                    break;
                                }
                                showMessage(action.addCardsIDS[i] + " added to " + action.addDeck[i]);
                                i++;
                            }

                        }
                        else{
                            currentDeck = getDeckByName(action.addDeck[0]);
                          
                            for(const cardID of action.addCardIDS){
                                currentDeck = addCard(currentDeck, cardID, playerCount); // Add specific card to the deck
                            }                                   
                            switch (action.addDeck[0]){
                                case 'encounterDeck':
                                    setEncounterDeck(currentDeck);
                                    break;
                                case 'settlementDeck':
                                    setSettlementDeck(currentDeck);
                                    break;
                                case 'vault84Deck':
                                    setVault84Deck(currentDeck);
                                    break;
                                case 'vault7Deck':
                                    setVault7Deck(currentDeck);
                                    break;
                                case 'vault109Deck':
                                    setVault109Deck(currentDeck);
                                    break;
                                case 'vault44Deck':
                                    setVault44Deck(currentDeck);
                                    break;
                                case 'specialStarDeck':
                                    setSpecialStarDeck(currentDeck);
                                    break;
                                case 'specialShieldDeck':
                                    setSpecialShieldDeck(currentDeck);
                                    break;
                            }
                            showMessage(action.addCardIDS + " added to " + action.addDeck[0]);

                        }
                        removeCardFromStaged(cardNumber);
                        break;

                    case 'trash':
                        if (!action.deck){
                            removeCardFromStaged(cardNumber);
                            showMessage(cardNumber + " Trashed");
                            break;
                        }
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
                                    setVault109Deck(newTDeck);
                                    break;
                            }

                        
                        
                    removeCardFromStaged(cardNumber);
                    showMessage(cardNumber + " Trashed");
                    break;


                    case 'stage':
                        setStagedCards([...stagedCards, ...action.cards]);
                        removeCardFromStaged(cardNumber);
                        showMessage(action.cards +" Staged");
                        break;
                
                    case 'createDeck':
               
                        switch(action.deckType){
                            case 'vault84Deck':
                                setVault84Deck(action.startCards);
                                break;
                            case 'vault7Deck':
                                setVault7Deck(action.startCards);
                                break;
                            case 'vault44Deck':
                                setVault44Deck(action.startCards);
                                break;
                            case 'vault109Deck':
                                setVault109Deck(action.startCards);
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
                        showMessage(action.deckType + " Built");
                        break;
                    
                        case 'checkLast':
                            switch(action.deckType){
                                case 'vault84Deck':
                                    if(vault84Deck.length == 0){
                                        if(hasBeenDrawn74){ 
                                            setVault84Deck(['081']);
                                            showMessage("081 Added to Vault 84 Deck");
                                        }
                                        else{
                                            setVault84Deck(['080']);
                                            showMessage("080 Added to Vault 84 Deck");
                                        }
                                    }
                                    break;
                                default:
                                    console.log('no type');
                            }
                        break;

                        case 'vault84Special':
                            setHasBeenDrawn74(true);
                            break;
                        case 'vault109Special':
                            const cardNumbersToRemove = ['086', '088', '090', '092'];
                                                  
                            const new2Deck = getDeckByName(action.deck).filter(
                            (card) => !cardNumbersToRemove.includes(card)
                            );
                            showMessage("Appropriate cards removed from Vault 109 Deck");                         
                            setVault109Deck(new2Deck);
                            break;
                        case 'specialShieldAction':
                            setSpecialStarDeck([]);

                            break;
                        case 'specialStarAction':
                            setSpecialShieldDeck([]);
                            break;
                        case 'vault4Special':
                            setVault7Deck([]);
                            break;
                        case 'deck224Special':
                            onCardFocus(drawCard('encounter'));
                            break;

                        case 'keep':
                            promptPlayerForCard(cardNumber);
                            showMessage(cardNumber + " added to players hand")
                            break;

                        case 'multiAdd':
                            let newDeck;
                            let finalDeck;
                            switch(action.card){
                                case '240':
                                    newDeck = shuffleDeck(['240(1)','240(2)','240(3)','240(4)']);
                                    finalDeck = [newDeck[0],action.cards[0]];
                                    
                                    setStagedCards([...stagedCards, ...finalDeck]);
                                    alert("Resolve 240 immidiately");
                                    removeCardFromStaged(cardNumber);
                                    break;


                                case '244':
                                    newDeck = shuffleDeck(['244(1)','244(2)','244(3)']);
                                    finalDeck = [newDeck[0],action.cards[0]];
                                
                                    setStagedCards([...stagedCards, ...finalDeck]);
                                    alert("Resolve 244 immidiately");
                                    removeCardFromStaged(cardNumber);
                                    break;
                                }
                            break;

                        default:
                        console.log(`Unknown action type for hover area ${index + 1}.`);
                    }
            }
            onCardFocus(null);
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
                style={{ width:'380px', height:'auto', }}
           
            />
            {hoverAreas.map((area, index) => (
                <div
                    key={index}
                    className="option-overlay"
                    style={area} // Apply hover area styling
                    onClick={() => handleHoverClick(index)} // Trigger appropriate action
                ></div>
            ))}
            {blurAreas && blurAreas.map((area, index) => (
                <div
                    key={index}
                    className={`blur-overlay ${blurVisibility[index] ? '' : 'disabled'}`}
                    style={{...area, display: blurVisibility[index] ? 'block' : 'none'}}
                    onClick={() => toggleBlur(index)} // Disable blur on click
                ></div>
            ))}
            
        </div>
    );
    
};

export default Card;


