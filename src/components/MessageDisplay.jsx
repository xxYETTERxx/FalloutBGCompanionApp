
import {  useEncounterDeck } from './EncounterDeck';

const MessageDisplay = () => {
    const { message, isMessageVisible } = useEncounterDeck(); // Use your custom hook to access context

    if (!isMessageVisible) return null;

    return (
        <div className="top-10 left-2 text-xl font-semibold text-black p-4 rounded-lg z-50">
            {message}
        </div>
    );
};

export default MessageDisplay;