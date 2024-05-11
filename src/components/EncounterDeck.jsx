import React, { createContext, useContext, useState, useEffect } from 'react';
import { encounterDeck as initialEDeck } from '../data/Decks';
import { settlementDeck as initialSDeck } from '../data/Decks';
import { shuffleDeck } from '../functions/cardFunctions'; // Importing shuffleDeck
import '../styles/StagingArea.css'; // Importing CSS

const EncounterDeckContext = createContext();

export const EncounterDeckProvider = ({ children }) => {
    const [encounterDeck, setEncounterDeck] = useState([]);
    const [settlementDeck, setSettlementDeck] = useState([]);
    const [vault7Deck, setVault7Deck] = useState([]);
    const [vault44Deck, setVault44Deck] = useState([]);
    const [vault84Deck, setVault84Deck] = useState([]);
    const [vault109Deck, setVault109Deck] = useState([]);
    const [specialStarDeck, setSpecialStarDeck] = useState([]);
    const [specialShieldDeck, setSpecialShieldDeck] = useState([]);
    const [playerCount, setPlayerCount] = useState(1);
    const [stagedCards, setStagedCards] = useState([]);
    const [vault7Active, setVault7Active] = useState(false);
    const [vault44Active, setVault44Active] = useState(false);
    const [vault84Active, setVault84Active] = useState(false);
    const [vault109Active, setVault109Active] = useState(false);
    const [specialShieldActive, setSpecialShieldActive] = useState(false);
    const [specialStarActive, setSpecialStarActive] = useState(false);
    const [hasBeenDrawn74, setHasBeenDrawn74] = useState(false);
    const [systemMessage, setSystemMessage] = useState('');
    const [history, setHistory] = useState([]);
    const [players, setPlayers] = useState([]); // Example player identifiers
    const [playerCards, setPlayerCards] = useState([[],[],[],[]]);
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayContent, setOverlayContent] = useState(null);
    const [ debug, setDebug ] = useState(true);
    

    useEffect(() => {
       
        const shuffledEDeck = shuffleDeck(initialEDeck);   
        setEncounterDeck(shuffledEDeck); // Set the shuffled deck at initializatio
        const shuffledSDeck = shuffleDeck(initialSDeck);
        setSettlementDeck(shuffledSDeck);
    }, []); // This effect runs only once

    const promptPlayerForCard = (cardNumber) => {
        // Assume we have a modal or overlay component that can be rendered
        // This could be a simple prompt or a more complex UI element
        setOverlayContent(
          <div className="overlay-content">
            <p>Select a player to keep the card:</p>
            {players.map((player, index) => (
              <button key={index} onClick={() => handleKeepCard(player, cardNumber)}>
                {players[index]}
              </button>
            ))}
            <div> <button className="cancel-button" onClick={() => setShowOverlay(false)}>Cancel</button></div>
          </div>
        );
        setShowOverlay(true);  // Assuming you have state to show/hide an overlay
      };
      
      const handleKeepCard = (player, cardNumber) => {
        setPlayerCards(prev => {
          const updatedCards = [...prev];
          if (!updatedCards[player]) {
            // Initialize the array if it does not exist
            updatedCards[player] = [];
        }
          updatedCards[player] = [...updatedCards[player], cardNumber];
          return updatedCards;
        });
        setShowOverlay(false); // Hide the selection overlay after assigning the card
      };

    const storeHistory = () =>{
        const prevState = [{
            storedEncounterDeck : encounterDeck,
            storedStagedCards: stagedCards,
            storedSettlementDeck: settlementDeck,
            storedVault7Deck: vault7Deck,
            storedVault84Deck: vault84Deck,
            storedVault109Deck: vault109Deck,
            storedPlayersCards: playerCards,
            storedSpecialStarDeck: specialStarDeck,
            storedSpecialShieldDeck: specialShieldDeck,            
        }];
        
        let newHistory = [...history, ...prevState];
        setHistory(newHistory);
    };

    const restoreHistory  = () =>{
        if (history.length === 0){
            console.log("No history stored");
            return;
        }
            const prevState = history[history.length - 1]; // Get the last state to restore
            const newHistory = history.slice(0, history.length - 1);

            setEncounterDeck(prevState.storedEncounterDeck);
            setStagedCards(prevState.storedStagedCards);
            setSettlementDeck(prevState.storedSettlementDeck);
            setVault7Deck(prevState.storedVault7Deck);
            setVault84Deck(prevState.storedVault84Deck);
            setVault109Deck(prevState.storedVault109Deck);
            setSpecialStarDeck(prevState.storedSpecialStarDeck);
            setSpecialShieldDeck(prevState.storedSpecialShieldDeck);
            setPlayerCards(prevState.storedPlayersCards);
            setHistory(newHistory);
    }
        useEffect(() => {
            console.log("Updated encounterDeck:", encounterDeck); // Check if the state is updating after set
        }, [encounterDeck]); 

        useEffect(() => {
            console.log("Updated settlementDeck:", settlementDeck); // Check if the state is updating after set
        }, [settlementDeck]); 

        useEffect(() => {
            console.log("Updated stagedCards:", stagedCards); // Check if the state is updating after set
        }, [stagedCards]); 

        useEffect(() => {
            console.log("Updated vault7Deck:", vault7Deck); // Check if the state is updating after set
            if (vault7Deck.length > 0) setVault7Active(true);
            else setVault7Active(false);
        }, [vault7Deck]); 

        useEffect(() => {
            console.log("Updated vault44Deck:", vault44Deck); // Check if the state is updating after set
            if (vault44Deck.length > 0) setVault44Active(true);
            else setVault44Active(false);
        }, [vault44Deck]); 

        useEffect(() => {
            console.log("Updated vault84Deck:", vault84Deck); // Check if the state is updating after set
            if (vault84Deck.length > 0) setVault84Active(true);
            else setVault84Active(false);
        }, [vault84Deck]); 

        useEffect(() => {
            console.log("Updated vault109Deck:", vault109Deck); // Check if the state is updating after set
            if (vault109Deck.length > 0) setVault109Active(true);
            else setVault109Active(false);
        }, [vault109Deck]); // Runs every time encounterDeck changes
        useEffect(() => {
            console.log("Updated Star Deck:", specialStarDeck); // Check if the state is updating after set
            if (specialStarDeck.length > 0) setSpecialStarActive(true);
            else setSpecialStarActive(false);
        }, [specialStarDeck]); // Runs every time encounterDeck changes
        useEffect(() => {
            console.log("Updated Shield Deck:", specialShieldDeck); // Check if the state is updating after set
            if (specialShieldDeck.length > 0) setSpecialShieldActive(true);
            else setSpecialShieldActive(false);
        }, [specialShieldDeck]); // Runs every time encounterDeck changes


    const drawCard = (deckType) => {
        
        switch(deckType){
            case 'encounter':
                const [drawnCard, ...remainingDeck] = encounterDeck;
                setEncounterDeck(remainingDeck);
                return drawnCard;

            case 'settlement':
                const [drawnSCard, ...remainingSDeck] = settlementDeck;
                setSettlementDeck(remainingSDeck);
                return drawnSCard;

            case 'vault7':
                const [drawnV7Card, ...remainingV7Deck] = vault7Deck;
                setVault7Deck(remainingV7Deck);
                return drawnV7Card;

            case 'vault44':
                const [drawnV44Card, ...remainingV44Deck] = vault44Deck;
                setVault44Deck(remainingV44Deck);
                return drawnV44Card;

            case 'vault84':
                const [drawnV84Card, ...remainingV84Deck] = vault84Deck;
                setVault84Deck(remainingV84Deck);
                return drawnV84Card;

            case 'vault109':
                const [drawnV109Card, ...remainingV109Deck] = vault109Deck;
                setVault109Deck(remainingV109Deck);
                return drawnV109Card;
            
            case 'specialStar':
                const [drawnStarCard, ...remainingStarDeck] = specialStarDeck;
                setSpecialStarDeck(remainingStarDeck);
                return drawnStarCard;
            
            case 'specialShield':
                const [drawnShieldCard, ...remainingShieldDeck] = specialShieldDeck;
                setSpecialShieldDeck(remainingShieldDeck);
                return drawnShieldCard;    
                
            default:
                console.log("invalid deck type");
                
        }
    
        
    };


    return (
        <EncounterDeckContext.Provider value={{ 
            encounterDeck,
            setEncounterDeck,
            settlementDeck, 
            setSettlementDeck, 
            drawCard,
            playerCount, 
            setPlayerCount,
            stagedCards,
            vault7Deck,
            setVault7Deck,
            vault44Deck,
            setVault44Deck,
            vault84Deck,
            setVault84Deck,
            vault109Deck,
            setVault109Deck,
            vault109Active,
            vault44Active,
            vault84Active,
            vault7Active,
            specialShieldActive,
            specialStarActive,
            setStagedCards,
            hasBeenDrawn74,
            setHasBeenDrawn74,
            specialStarDeck,
            setSpecialStarDeck,
            specialShieldDeck,
            setSpecialShieldDeck,
            storeHistory,
            restoreHistory,
            playerCards,
            players,
            setPlayerCards,
            setOverlayContent,
            showOverlay,
            overlayContent,
            setShowOverlay,
            promptPlayerForCard,
            setPlayers,
             }}>
            {children}
        </EncounterDeckContext.Provider>
    );
};

export const useEncounterDeck = () => {
    const context = useContext(EncounterDeckContext);
    if (!context) {
        throw new Error('useEncounterDeck must be used within an EncounterDeckProvider');
    }
    return context;
};
