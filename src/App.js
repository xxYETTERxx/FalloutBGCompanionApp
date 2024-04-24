import React, { useState } from 'react';
import { EncounterDeckProvider } from './components/EncounterDeck';
import StagingArea from './components/StagingArea';
import Menu from './components/Menu';

const App = () => {
    const [isScenarioSet, setIsScenarioSet] = useState(false); // New state to track if a scenario is set


    return (
        <EncounterDeckProvider> {/* Wrap with EncounterDeckProvider */}
            <div className="app-container">
                {isScenarioSet ? ( // Conditional rendering based on scenario status
                    <StagingArea /> // Render StagingArea if the scenario is set
                ) : (
                    <Menu onScenarioSet={setIsScenarioSet} />
                         // Pass the new callback
                )}
            </div>
        </EncounterDeckProvider>
    );
};

export default App;
