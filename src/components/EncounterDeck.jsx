import React, { createContext, useContext, useState, useEffect } from 'react';
import { encounterDeck as initialEDeck } from '../data/Decks';
import { settlementDeck as initialSDeck } from '../data/Decks';
import { shuffleDeck } from '../functions/cardFunctions'; // Importing shuffleDeck

const EncounterDeckContext = createContext();

export const EncounterDeckProvider = ({ children }) => {
    const [encounterDeck, setEncounterDeck] = useState([]);
    const [settlementDeck, setSettlementDeck] = useState([]);
    const [vault7Deck, setVault7Deck] = useState([]);
    const [vault44Deck, setVault44Deck] = useState([]);
    const [vault84Deck, setVault84Deck] = useState([]);
    const [vault109Deck, setVault109Deck] = useState([]);
    const [playerCount, setPlayerCount] = useState(1);
    const [stagedCards, setStagedCards] = useState([]);
    const [vault7Active, setVault7Active] = useState(false);
    const [vault44Active, setVault44Active] = useState(false);
    const [vault84Active, setVault84Active] = useState(false);
    const [vault109Active, setVault109Active] = useState(false);


    useEffect(() => {
       
        const shuffledEDeck = shuffleDeck(initialEDeck);   
        setEncounterDeck(shuffledEDeck); // Set the shuffled deck at initializatio
        const shuffledSDeck = shuffleDeck(initialSDeck);
        setSettlementDeck(shuffledSDeck);
        

    }, []); // This effect runs only once

    useEffect(() => {
        console.log("Updated encounterDeck:", encounterDeck); // Check if the state is updating after set
    }, [encounterDeck]); // Runs every time encounterDeck changes

    useEffect(() => {
        console.log("Updated settlementDeck:", settlementDeck); // Check if the state is updating after set
    }, [settlementDeck]); // Runs every time encounterDeck changes

    useEffect(() => {
        console.log("Updated stagedCards:", stagedCards); // Check if the state is updating after set
    }, [stagedCards]); // Runs every time encounterDeck changes

    useEffect(() => {
        console.log("Updated vault7Deck:", vault7Deck); // Check if the state is updating after set
        if (vault7Deck.length > 0) setVault7Active(true);
        else setVault7Active(false);
    }, [vault7Deck]); // Runs every time encounterDeck changes

    useEffect(() => {
        console.log("Updated vault44Deck:", vault44Deck); // Check if the state is updating after set
        if (vault44Deck.length > 0) setVault44Active(true);
        else setVault44Active(false);
    }, [vault44Deck]); // Runs every time encounterDeck changes

    useEffect(() => {
        console.log("Updated vault84Deck:", vault84Deck, vault84Deck.length); // Check if the state is updating after set
        if (vault84Deck.length > 0) setVault84Active(true);
        else setVault84Active(false);
    }, [vault84Deck]); // Runs every time encounterDeck changes

    useEffect(() => {
        console.log("Updated vault109Deck:", vault109Deck); // Check if the state is updating after set
        if (vault109Deck.length > 0) setVault109Active(true);
        else setVault109Active(false);
    }, [vault109Deck]); // Runs every time encounterDeck changes


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
            setVault7Deck,
            setVault44Deck,
            setVault84Deck,
            setVault109Deck,
            vault109Active,
            vault44Active,
            vault84Active,
            vault7Active,
            setStagedCards }}>
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
