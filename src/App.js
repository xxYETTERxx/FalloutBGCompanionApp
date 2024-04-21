import React from 'react';
import Card from './components/Card'; // Adjust the import path based on your project structure
import EncounterDeck from './components/EncounterDeck';

// Main component
const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Example usage of the Card component with a specific card number */}
      {/*<Card cardNumber={"004"} /> { This will display the card with number 1 and its corresponding image */}
      {/*<Card cardNumber={"001"} /> {/* This will display the card with number 1 and its corresponding image */}
      <EncounterDeck /> {/* Include the EncounterDeck component */}
    </div>
  );
};

export default App;

