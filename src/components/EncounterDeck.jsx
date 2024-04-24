import React, { createContext, useContext, useState, useEffect } from 'react';
import { encounterDeck as initialEDeck } from '../data/Decks';
import { settlementDeck as initialSDeck } from '../data/Decks';
import { shuffleDeck } from '../functions/cardFunctions'; // Importing shuffleDeck

const EncounterDeckContext = createContext();

export const EncounterDeckProvider = ({ children }) => {
    const [encounterDeck, setEncounterDeck] = useState([]);
    const [settlementDeck, setSettlementDeck] = useState([]);
    const [playerCount, setPlayerCount] = useState(1);
    const [stagedCards, setStagedCards] = useState([]);

    console.log("Encounter Deck Initialized");

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

    const drawEncounter = () => {
        if (encounterDeck.length === 0) {
            return null;
        }
        const [drawnCard, ...remainingDeck] = encounterDeck;
        setEncounterDeck(remainingDeck);
        return drawnCard;
    };

     const drawSettlement = () => {
        if (settlementDeck.length === 0) {
            return null;
        }
        const [drawnCard, ...remainingDeck] = encounterDeck;
        setEncounterDeck(remainingDeck);
        return drawnCard;
    };

    return (
        <EncounterDeckContext.Provider value={{ 
            encounterDeck,
            setEncounterDeck,
            settlementDeck, 
            setSettlementDeck, 
            drawEncounter, 
            drawSettlement, 
            playerCount, 
            setPlayerCount,
            stagedCards,
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
