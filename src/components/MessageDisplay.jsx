
import {  useEncounterDeck } from './EncounterDeck';

const MessageDisplay = () => {
    const { message, isMessageVisible } = useEncounterDeck(); // Use your custom hook to access context

    if (!isMessageVisible) return null;

    return (
        <div style={{ top: '10%', left: '30%', color: 'black', marginLeft:'30px', padding: '10px', borderRadius: '10px', zIndex: 1500 }}>
            {message}
        </div>
    );
};

export default MessageDisplay;