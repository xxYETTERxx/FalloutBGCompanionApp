// functions.js
// Fisher-Yates Shuffle Algorithm
export function shuffleDeck(deck){
    const shuffledDeck = [...deck]; // Create a copy of the deck to avoid mutating the original
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck;
};

export function addCard(deck, card, numberOfPlayers){
    let deckSize = numberOfPlayers;
    if (deck.length < numberOfPlayers) deckSize = deck.length;
    const smallerDeck = deck.slice(0, deckSize); // Draw a smaller deck based on the number of players
    const newDeck = [card, ...smallerDeck]; // Add the new card to the front
    const shuffledNewDeck = shuffleDeck(newDeck); // Shuffle the smaller deck with the new card

    return [...shuffledNewDeck, ...deck.slice(deckSize)]; // Join with the rest of the original deck
    console.log("card ",card, "added to ", deck);
};

export const discardCard = (deck, card) => {
    deck = deck.filter((c) => c !== card); // Trash (remove) the current card
    return [...deck, card]; // Appends the card to the end of the deck
};

export const stageCard = (existingArray, newCard) => {
    if (existingArray.includes(newCard)) {
        return existingArray; // No duplicates allowed
    }
    return [...existingArray, newCard]; // Return the array with the new card added
};