
import {  useEncounterDeck } from './EncounterDeck';

const MessageDisplay = () => {
    const { message, isMessageVisible } = useEncounterDeck(); // Use your custom hook to access context

    if (!isMessageVisible) return null;

    return (
        <div>
            {message}
        </div>
    );
};

export default MessageDisplay;