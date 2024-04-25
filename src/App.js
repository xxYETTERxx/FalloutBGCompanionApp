import React, { useState, useEffect } from 'react';
import { EncounterDeckProvider } from './components/EncounterDeck';
import StagingArea from './components/StagingArea';
import Menu from './components/Menu';

const App = () => {
    const [isScenarioSet, setIsScenarioSet] = useState(false); // New state to track if a scenario is set
    const [zoomLevel, setZoomLevel] = useState(1); // Default zoom level
    const [isScrolling, setIsScrolling] = useState(false); // Track if middle mouse button is pressed
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 }); // Initial scroll position

    useEffect(() => {
        const handleWheel = (e) => {
            if (e.ctrlKey) { // Optional: Hold Ctrl to zoom
                const zoomChange = e.deltaY > 0 ? -0.1 : 0.1; // Zoom in/out
                setZoomLevel((prev) => Math.max(0.5, prev + zoomChange)); // Ensure min zoom
                e.preventDefault(); // Prevent default scrolling behavior
            }
        };

        const handleMouseDown = (e) => {
            if (e.button === 1) { // Middle mouse button
                setIsScrolling(true);
                setScrollPosition({ x: e.pageX, y: e.pageY }); // Set initial position
            }
        };

        const handleMouseMove = (e) => {
            if (isScrolling) { // If middle button is pressed, allow scrolling
                const deltaX = e.pageX - scrollPosition.x;
                const deltaY = e.pageY - scrollPosition.y;
                // Adjust viewport or scroll element based on deltaX/deltaY
                setScrollPosition({ x: e.pageX, y: e.pageY }); // Update scroll position
            }
        };

        const handleMouseUp = (e) => {
            if (e.button === 1) {
                setIsScrolling(false); // Stop scrolling
            }
        };

        document.addEventListener('wheel', handleWheel);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => { // Clean up event listeners
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isScrolling, scrollPosition]); // Track scrolling and position changes


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
