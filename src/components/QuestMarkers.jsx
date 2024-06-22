import React, { useState, useRef, useEffect } from 'react';

const QuestMarkers = ({ onDragEnd, onDragStart, markerId, onRemove }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 }); // Initial position
    const [isDragging, setIsDragging] = useState(false);
    const markerRef = useRef(null); // Reference to the marker element
    const lastTap = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            handleDrag(e);
        };

        const handleMouseUp = () => {
            if (isDragging) handleDragEnd();
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    useEffect(() => {
        const markerElement = markerRef.current;

        const handleTouchStart = (e) => {
            e.preventDefault(); // Prevent the default behavior for touch start
            handleDragStart(e);
        };

        const handleTouchMove = (e) => {
            if (!isDragging) return;
            handleDrag(e);
            e.preventDefault();
        };

        const handleTouchEnd = (e) => {
            if (isDragging) handleDragEnd();
            handleTouchEndInternal(e);
        };

        const handleTouchCancel = (e) => {
            if (isDragging) handleDragEnd();
            e.preventDefault();
        };

        markerElement.addEventListener('touchstart', handleTouchStart, { passive: false });
        markerElement.addEventListener('touchmove', handleTouchMove, { passive: false });
        markerElement.addEventListener('touchend', handleTouchEnd, { passive: false });
        markerElement.addEventListener('touchcancel', handleTouchCancel, { passive: false });

        return () => {
            markerElement.removeEventListener('touchstart', handleTouchStart);
            markerElement.removeEventListener('touchmove', handleTouchMove);
            markerElement.removeEventListener('touchend', handleTouchEnd);
            markerElement.removeEventListener('touchcancel', handleTouchCancel);
        };
    }, [isDragging]);

    const handleRightClick = (e) => {
        e.preventDefault();
        if (onRemove) {
            onRemove();
        }
    };

    const handleDragStart = (e) => {
        //e.preventDefault(); // Prevent the default drag behavior

        setIsDragging(true); // Start dragging
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;

        markerRef.current.startX = clientX;
        markerRef.current.startY = clientY;

        if (onDragStart) {
            onDragStart();
        }
    };

    const handleDrag = (e) => {
        e.preventDefault(); // Prevent the default drag behavior
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);

        if (clientX === undefined || clientY === undefined) {
            // Prevent dragging on initialization
            return;
        }

        // Calculate the new position
        const deltaX = clientX - markerRef.current.startX;
        const deltaY = clientY - markerRef.current.startY;

        setPosition((prevPosition) => ({
            x: prevPosition.x + deltaX,
            y: prevPosition.y + deltaY,
        }));

        // Update the start position for the next drag event
        markerRef.current.startX = clientX;
        markerRef.current.startY = clientY;
    };

    const handleDragEnd = () => {
        setIsDragging(false); // stop dragging
        
        if (onDragEnd) {
            onDragEnd(markerRef.current);
        }
    };

    const handleTouchEndInternal = (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap.current;

        if (tapLength < 300 && tapLength > 0) {
            // Double-tap detected
            if (onRemove) {
                onRemove();
            }
        } else {
            lastTap.current = currentTime;
        }
        handleDragEnd();
    };

    let markerImage = require('../images/misc_assets/RQmark.png');

    switch (markerId) {
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
            break;
        case 'O':
            markerImage = require('../images/misc_assets/OQmark.png');
            break;
        case 'R':
            markerImage = require('../images/misc_assets/RQmark.png');
            break;
    }

    return (
        <img
            ref={markerRef}
            src={markerImage} // Path to the quest marker image
            alt="Quest Marker"
            className="quest-marker" // Apply your CSS styles
            draggable="false" // Prevent native dragging
            onContextMenu={handleRightClick}
            onMouseDown={handleDragStart} // Start drag for mouse
            onTouchStart={handleDragStart} // Start drag for touch
            style={{
                position: 'absolute', // Ensure it can be positioned absolutely
                width: '200px',
                height: 'auto',
                left: `${position.x}px`, // Use position state for left
                top: `${position.y}px`, // Use position state for top
                cursor: isDragging ? 'grabbing' : 'grab',
                transition: isDragging ? 'none' : 'left 0.2s, top 0.2s',
            }}
        />
    );
};

export default QuestMarkers;
