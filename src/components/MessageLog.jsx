import React, { useState } from 'react';
import {  useEncounterDeck } from './EncounterDeck';

const Popup = ({ show, onClose }) => {
  const {messageLog} = useEncounterDeck();
  
  if (!show) {
    return null;
  }

  return (
    <div className="messages">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
              <div className="bg-white p-8 rounded shadow-md text-left">
            {messageLog.map((msg, index) => (
                <div className='message-container' key={msg}>
                  
                    <p>{msg}</p>
                
                </div>
            ))}
          
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;