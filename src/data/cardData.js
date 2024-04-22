// cardData.js
const cardData = {
    '001': {
        hoverAreas: [
            { top: '23%', width: '100%', height: '12%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '62%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/001.png`)
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
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E01.png`)
    },
    'E02': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E02.png`)
    },
    'E03': {
        hoverAreas: [
            { top: '17%', width: '100%', height: '7%' }, // Area for the first option
            { top: '43%', width: '100%', height: '6%' }, // Area for the second option
            { top: '56%', width: '100%', height: '6%' }, // Area for the third option
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
                type: 'addAndTrash',
                deck: 'encounterDeck',
                addCardID: '161',
            },
        ],
    },
    'E04': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E04.png`)
    },
    'E05': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E05.png`)
    },
    'E06': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E06.png`)
    },
    'E07': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E07.png`)
    },
    'E08': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E08.png`)
    },
    'E09': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E09.png`)
    },
    'E10': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E10.png`)
    },
    'E11': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E11.png`)
    },
    'E12': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E12.png`)
    },
    'E13': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E13.png`)
    },
    'E14': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E14.png`)
    },
    'E15': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E15.png`)
    },
    'E16': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E16.png`)
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
  