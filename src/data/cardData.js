import { addCard } from '../functions/cardFunctions';

// cardData.js
const cardData = {
    '001': {
        hoverAreas: [
            { top: '23%', width: '100%', height: '12%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '62%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/001.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'trash',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '161',
            },
        ],
    },
    '002': {
      hoverAreas: [
            { top: '27%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '72%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/002.png`)
    },
    '003': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '71%', width: '100%', height: '8%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/003.png`)
    },
    '004': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/004.png`)
    },
    '005': {
        hoverAreas: [
            { top: '23%', width: '100%', height: '12%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '62%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/005.png`)
    },
    '006': {
      hoverAreas: [
            { top: '27%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '72%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/006.png`)
    },
    '007': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '71%', width: '100%', height: '8%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/007.png`)
    },
    '008': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/008.png`)
    },
    'E01': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '9%' }, // Area for the first option
            { top: '41%', width: '100%', height: '9%' }, // Area for the second option
            { top: '73%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E01.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '162',
            },
        ],
    },
    'E02': {
      hoverAreas: [
            { top: '26%', width: '100%', height: '9%' }, // Area for the first option
            { top: '45%', width: '100%', height: '8%' }, // Area for the second option

          ],
          imagePath : require(`../images/encounter_deck/E02.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '214',
            },
        ],
    },
    'E03': {
        hoverAreas: [
            { top: '22%', width: '100%', height: '8%' }, // Area for the first option
            { top: '53%', width: '100%', height: '6%' }, // Area for the second option
            { top: '69%', width: '100%', height: '6%' }, // Area for the third option
        ],
        imagePath: require('../images/encounter_deck/E03.png'),
        actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '161',
            },
        ],
    },
    'E04': {
      hoverAreas: [
            { top: '26%', width: '100%', height: '8%' }, // Area for the first option
            { top: '47%', width: '100%', height: '8%' }, // Area for the second option
            { top: '71%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E04.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
        ],
    },
    'E05': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '71%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E05.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '163',
            },
        ],
    },
    'E06': {
      hoverAreas: [
            { top: '26%', width: '100%', height: '8%' }, // Area for the first option
            { top: '47%', width: '100%', height: '8%' }, // Area for the second option
            { top: '67%', width: '100%', height: '9%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E06.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
        ],
    },
    'E07': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '50%', width: '100%', height: '8%' }, // Area for the second option
          ],
          imagePath : require(`../images/encounter_deck/E07.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '160'
            },
        ],
    },
    'E08': {
      hoverAreas: [
            { top: '26%', width: '100%', height: '8%' }, // Area for the first option
            { top: '52%', width: '100%', height: '21%' }, // Area for the second option
            { top: '74%', width: '100%', height: '20%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E08.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'trash',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
        ],
    },
    'E09': {
      hoverAreas: [
            { top: '26%', width: '100%', height: '8%' }, // Area for the first option
            { top: '59%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E09.png`),
          actions: [
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '005'
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
        ],
    },
    'E10': {
      hoverAreas: [
            { top: '27%', width: '100%', height: '10%' }, // Area for the first option
            { top: '60%', width: '100%', height: '8%' }, // Area for the second option
            { top: '81%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E10.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
        ],
    },
    'E11': {
      hoverAreas: [
            { top: '22%', width: '100%', height: '8%' }, // Area for the first option
            { top: '55%', width: '100%', height: '8%' }, // Area for the second option
            { top: '77%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E11.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
        ],
    },
    'E12': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '55%', width: '100%', height: '8%' }, // Area for the second option
            { top: '76%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E12.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '002'
            },
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '003'
            },
        ],
    },
    'E13': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '10%' }, // Area for the second option
            { top: '71%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E13.png`),
          actions: [
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '004'
            },
            {
                type: 'add',
                deck: 'encounterDeck',
                addCardID: '004'
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
        ],
    },
    'E14': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '67%', width: '100%', height: '17%' }, // Area for the second option
            { top: '86%', width: '100%', height: '13%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E14.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                deck: 'encounterDeck',
                addCard: '001'
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
        ],
    },
    'E15': {
      hoverAreas: [
            { top: '28%', width: '100%', height: '8%' }, // Area for the first option
            { top: '57%', width: '100%', height: '18%' }, // Area for the second option
            { top: '76%', width: '100%', height: '18%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E15.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'trash',
                deck: 'encounterDeck',
            },
        ],
    },
    'E16': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '60%', width: '100%', height: '8%' }, // Area for the second option
          ],
          imagePath : require(`../images/encounter_deck/E16.png`),
          actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            }
        ],
    },
    'S01': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S01.png`)
    },
    'S02': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S02.png`)
    },
    'S03': {
        hoverAreas: [
            { top: '17%', width: '100%', height: '7%' }, // Area for the first option
            { top: '43%', width: '100%', height: '6%' }, // Area for the second option
            { top: '56%', width: '100%', height: '6%' }, // Area for the third option
        ],
        imagePath: require('../images/settlement_deck/S03.png'),
        actions: [
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'addAndTrash',
                deck: 'encounterDeck',
                addCardID: '161',
            },
        ],
    },
    'S04': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S04.png`)
    },
    'S05': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S05.png`)
    },
    'S06': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S06.png`)
    },
    'S07': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S07.png`)
    },
    'S08': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S08.png`)
    },
    'S09': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S09.png`)
    },
    'S10': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S10.png`)
    },
    'S11': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S11.png`)
    },
    'S12': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S12.png`)
    },
    'S13': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S13.png`)
    },
    'S14': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S14.png`)
    },
    'S15': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S15.png`)
    },
    'S16': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S16.png`)
    },


    '244(1)': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/244(1).png`)
    },
    // Add more cards with different hover zones as needed
  };
  
  export default cardData;
  