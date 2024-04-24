import React, { useState } from 'react';
import { useEncounterDeck } from './EncounterDeck';

const Menu = ({ onScenarioSelect, onScenarioSet }) => {
    const { setPlayerCount, playerCount, setStagedCards } = useEncounterDeck();

     const scenarios = {
        scenario1: ['E03', 'S02'],
        scenario2: ['003', '005'],
    };

    
    const handlePlayerCount = (count) => {
        setPlayerCount(count);
    };

    const handleScenarioClick = (scenarioKey) => {
        const initialCards = scenarios[scenarioKey]; 
        setStagedCards(initialCards);
        onScenarioSet(true); // Set the scenario status to true
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-3/4 p-8 bg-white shadow-lg rounded-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Choose Scenario</h1>
                <div className="flex justify-center mb-6">
                    {Object.keys(scenarios).map((scenarioKey) => (
                        <button
                            key={scenarioKey}
                            onClick={() => handleScenarioClick(scenarioKey)} // Use the new handler
                            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                        >
                            {scenarioKey}
                        </button>
                    ))}
                </div>

                <h2 className="text-xl mb-4">Set Number of Players</h2>
                <div className="flex justify-center">
                    {[1, 2, 3, 4].map((count) => (
                        <button
                            key={count}
                            onClick={() => handlePlayerCount(count)}
                            className={`mx-2 px-4 py-2 ${
                                playerCount === count ? 'bg-green-700' : 'bg-green-500'
                            } text-white rounded-lg hover:bg-green-600 focus:outline-none`}
                        >
                            {count} Player{count > 1 ? 's' : ''}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;

