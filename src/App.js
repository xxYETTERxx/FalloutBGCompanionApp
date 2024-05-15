import React, { useState, useEffect } from 'react';
import { EncounterDeckProvider } from './components/EncounterDeck';
import StagingArea from './components/StagingArea';
import Menu from './components/Menu';
import Card from './components/Card';


const App = () => {
    const [isScenarioSet, setIsScenarioSet] = useState(false); // New state to track if a scenario is set
    const [focusedCard, setFocusedCard] = useState(null);

    const toggleFocusCard = (cardNumber) => {
      setFocusedCard(focusedCard === cardNumber ? null : cardNumber);
    };


    return (
        <EncounterDeckProvider> {/* Wrap with EncounterDeckProvider */}
            <div className="app-container">
                {isScenarioSet ? ( // Conditional rendering based on scenario status
                    <StagingArea onCardFocus={toggleFocusCard}/> // Render StagingArea if the scenario is set
                ) : (
                    <Menu onScenarioSet={setIsScenarioSet} />
                         // Pass the new callback
                )}
                {focusedCard && ( // Render the focused card if one is set
                <div
                    className="focused-card"
                    style={{
                        position: 'fixed', // Position fixed to overlay everything
                        top: '50%',
                        left: '50%',
                        width: '370px', // Set a fixed width
                        height: '600px', // Set a fixed height
                        transform: 'translate(-50%, -50%)', // Center the card
                        zIndex: 999, // Ensure it overlaps everything
                        overflow: 'hidden'
                    }}
       
                >
                    <Card cardNumber={focusedCard} onCardFocus={toggleFocusCard}/> {/* Render a cloned card */}
                </div>
            )}
            </div>
        </EncounterDeckProvider>
    );
};

export default App;
