import React, { useState } from 'react';

const Popup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md text-left">
        <h2 className="text-2xl mb-4">Instructions</h2>
        <p className="mb-4">- Select Staged Card option to trigger event (stage, add, etc..) </p>
        <p className="mb-4">- Use encounter/settlement and vault/special decks (when available) to draw the corresponding card </p>
        <p className="mb-4">- Create digital Quest markers that correspond with the physical markers </p>
        <p className="mb-4">- Click and drag to move Quest Markers </p>
        <p className="mb-4">- Right-click or double tap to remove Quest-markers </p>
        <p className="mb-4">- Set players names (optional) and track the 'keep' cards through-out the game</p>
        <h2 className="text-2xl mb-4">Upcoming Features</h2>
        <p className="mb-4">- Quest Markers will properly attach to cards for better mobile support</p>
        <p className="mb-4">- Quest Markers will be removed when card is trashed</p>
        <p className="mb-4">- Better handling of action Text</p>
        <p className="mb-4">- Descriptive Undo action Text</p>
        <p className="mb-4">- Better support for smaller screens</p>
        <p className="mb-4">- Offline options</p>

        <h2 className="text-2xl mb-4">Contributions To the Project Welcome!</h2>
        <p className="mb-4"><a href = "https://github.com/xxYETTERxx/FalloutBGCompanionApp">GitHub </a></p>
        <p className="mb-4">PR required</p>
        
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;