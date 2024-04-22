import React, { createContext, useContext, useState, useEffect } from 'react';
import { encounterDeck as initialDeck } from '../data/Decks';
import { shuffleDeck } from '../functions/cardFunctions'; // Importing shuffleDeck

const EncounterDeckContext = createContext();

export const EncounterDeckProvider = ({ children }) => {
    const [encounterDeck, setEncounterDeck] = useState([]);

    useEffect(() => {
        console.log('EncounterDeckProvider initialized'); // Ensure this is logged
        const shuffledDeck = shuffleDeck(initialDeck);
        
        setEncounterDeck(shuffledDeck); // Set the shuffled deck at initialization
        
        console.log("shuffled deck", shuffledDeck);
        
    }, []); // This effect runs only once

    useEffect(() => {
        console.log("Updated encounterDeck:", encounterDeck); // Check if the state is updating after set
    }, [encounterDeck]); // Runs every time encounterDeck changes

    const drawCard = () => {
        if (encounterDeck.length === 0) {
            return null;
        }
        const [drawnCard, ...remainingDeck] = encounterDeck;
        setEncounterDeck(remainingDeck);
        return drawnCard;
    };

    return (
        <EncounterDeckContext.Provider value={{ encounterDeck, setEncounterDeck, drawCard }}>
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
