import React, { useState, useRef } from 'react';
import '../styles/QuestMarkers.css'; // Import CSS for styling

const QuestMarkers = ({ markerId, onRemove }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 }); // Initial position
    const markerRef = useRef(null); // Reference to the marker element

    const handleRightClick = (e) => {
        e.preventDefault();
        if(onRemove) {
            onRemove();
        }
    }

    const handleDragStart = (e) => {
        // Store the initial click position
        markerRef.current.startX = e.clientX;
        markerRef.current.startY = e.clientY;
    };

    const handleDrag = (e) => {
        if (e.clientX === 0 && e.clientY === 0) {
            // Prevent dragging on initialization
            return;
        }

        // Calculate the new position
        const deltaX = e.clientX - markerRef.current.startX;
        const deltaY = e.clientY - markerRef.current.startY;

        setPosition({
            x: position.x + deltaX,
            y: position.y + deltaY,
        });

        // Update the start position for the next drag event
        markerRef.current.startX = e.clientX;
        markerRef.current.startY = e.clientY;
    };
/* 
    const handleDragEnd = (e) => {
        onDragEnd(position); // Inform parent component of new position
    }; */
    let markerImage = require('../images/misc_assets/RQmark.png');
    let rotation = 0;

    switch(markerId){
        case 'Y':
        markerImage = require('../images/misc_assets/YQmark.png');
        break;

        case 'LB':
        markerImage = require('../images/misc_assets/LBQmark.png');
        break;

        case 'B':
        markerImage = require('../images/misc_assets/BQmark.png');
        break;

        case 'P':
        markerImage = require('../images/misc_assets/PQmark.png');
        rotation = -208;
        break;

        case 'O':
        markerImage = require('../images/misc_assets/OQmark.png');
        break;

        case 'R':
        markerImage = require('../images/misc_assets/RQmark.png');
        rotation = -155;
        break;
    }

    
return (
        <img
            ref={markerRef}
            src= {markerImage} // Path to the quest marker image
            alt="Quest Marker"
            className="quest-marker" // Apply your CSS styles
            draggable="true" // Allow dragging
            onContextMenu={handleRightClick}
            onDragStart={handleDragStart} // Start drag
            onDrag={handleDrag} // During drag
            
            style={{
                position: 'absolute', // Ensure it can be positioned absolutely
                left: `${position.x}px`, // Use position state for left
                top: `${position.y}px`, // Use position state for top
                cursor: 'move', // Change cursor to indicate dragging
                 transform: `rotate(${rotation}deg)` // Apply the rotation
            }}
        />
    );
};

export default QuestMarkers;
