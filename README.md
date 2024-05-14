# Fallout Board Game Companion App

Welcome to the companion app for **Fallout: The Board Game**. This project aims to streamline gameplay by digitizing the library and encounter decks, reducing setup time and most importantly, gamming time.

## Table of Contents
- [Features](#features)
- [Gameplay Instructions](#gameplay-instructions)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Ackknowledgments](#acknowledgments)

## Features
- **Deck Management**: Digitally replace the library and encounter/settlement/vault decks for quicker playtime.
- **Quest Markers**: Create digital questmarkers that match the physical markers for the board
- **Player Inventory**: Keep track of the 'Take' cards throughout a campaign
-  **Undo**: Every action is tracked from the start of the game till the end
-  **Card Focus**: Right-click on any card to focus on it at native size. This is useful when there are several staged cards
-  **Blurred Result**: All encounter/settlements/Vault cards have the results to the choices blurred for solo play and better co-op play

## Gameplay instructions
- Selet the number of players (mandatory), and enter their names (optional). Then choose the desired scenario. Please note you may need the physical cards 104, 204-213 and 238 from the library deck depending on the scenario chosen. 
- Left click on any action on any card to trigger the listed action (i.e.: stage, add, discard, trash)
- Left click on any encounter/settlement/vault/special deck to draw a card
- Left click the blurred area to remove the blur effect
- Right click any staged cards to focus on it. Right click again to defocus
- Use the Questmarker button to create new quest markers. The colors cycle every time the button is pressed.
- Click and drag Questmarkers to place them on cards. note: when cards are moved, the questmarker must be manually moved
- Remove Questmarkers by right clicking on them
- Click the Undo button to restore the last stored deck history. Note: Every time a deck is changed that history is stored. The undo button takes one step back in that history. It does not affect questmarkers or focused cards or removing blur effects.
- Use the Player Inventory button to display any cards aquired by the players
- (Debug Purposes) Type a number in the input text field below the Stage Card button. Press Enter to focus on that card. Click the Stage Card button to stage that card. Note: the format must be 'xxx' i.e. 006


## Getting Started
To get started with the project, clone the repository to your local machine:

git clone https://github.com/xxYETTERxx/FalloutBGCompanionApp.git

cd FalloutBGCompanionApp

## Installation
Ensure you have Node.js and npm installed. To set up the project, run:

npm install

This will install all required dependencies.

## Usage
To run the app in development mode, use the following command:

npm start
This will start a development server.
Open http://localhost:3000 in your browser to view the app.

To build the project for production, run:

npm run build

## Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

## Fork the repository.
Create a new branch (git checkout -b my-feature).
Commit your changes (git commit -m 'Add new feature').
Push to your branch (git push origin my-feature).
Create a Pull Request to merge your changes into the main repository.
License
This project is licensed under the MIT License.

## Planned Features
Digital Activation Deck
Optional Activation Deck rebalance based on player count
Responsive design (mobile, ipad)
saved sessions
shared sessions (mobile, laptop)

## Notes
There are a few cards that can not be implemented digitally. Set aside 104, 204-213 in case they come up during game play
There still is a lot of testing required



## Acknowledgments
Special thanks to the developers of Fallout: The Board Game and the open-source community for their invaluable resources.
