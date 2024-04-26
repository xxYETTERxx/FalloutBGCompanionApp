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
                type: 'trash',
                deck: 'encounterDeck'             
            },
        ],
    },
    '002': {
      hoverAreas: [
            { top: '27%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '72%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/002.png`),
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
                addCardID: '002'             
            },
        ],
    },
    '003': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '71%', width: '100%', height: '8%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/003.png`),
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
                deck: 'encounterDeck'             
            },
        ],
    },
    '004': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/004.png`),
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
                deck: 'encounterDeck'             
            },
        ],
    },
    '005': {
        hoverAreas: [
            { top: '36%', width: '100%', height: '30%' }, // Area for the first option
            { top: '67%', width: '100%', height: '10%' }, // Area for the second option
            { top: '78%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/005.png`),
          actions: [
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '006'
            },
            {
                type: 'discard',
                deck: 'settlementDeck'
                
            },
            {
                type: 'discard',
                deck: 'settlementDeck'             
            },
        ],
    },
    '006': {
      hoverAreas: [
            { top: '31%', width: '100%', height: '18%' }, // Area for the first option
            { top: '50%', width: '100%', height: '10%' }, // Area for the second option
            { top: '67%', width: '100%', height: '25%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/006.png`),
          actions: [
            {
                type: 'trash',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck'             
            },
        ],
    },
    '007': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '65%', width: '100%', height: '8%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/007.png`),
          actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck'             
            },
        ],
    },
    '008': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '43%', width: '100%', height: '8%' }, // Area for the second option
            { top: '63%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/008.png`),
          actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck'             
            },
        ],
    },
    '008': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '43%', width: '100%', height: '8%' }, // Area for the second option
            { top: '63%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/008.png`),
          actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck'             
            },
        ],
    },
    '008': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '43%', width: '100%', height: '8%' }, // Area for the second option
            { top: '63%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/008.png`),
          actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck'             
            },
        ],
    },
    '009': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
            { top: '68%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/009.png`),
          actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck'             
            },
        ],
    },
    '010': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/010.png`),
          actions: [
            {
                type: 'trash',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
        ],
    },
    '011': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '45%', width: '100%', height: '8%' }, // Area for the second option
     
          ],
          imagePath : require(`../images/library_deck/011.png`),
          actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
        ],
    },
    '012': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '43%', width: '100%', height: '8%' }, // Area for the second option
            { top: '57%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/012.png`),
          actions: [
            {
                type: 'trash',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck',
            },
            {
                type: 'discard',
                deck: 'encounterDeck'             
            },
        ],
    },
    '013': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '47%', width: '100%', height: '11%' }, // Area for the second option
            { top: '59%', width: '100%', height: '13%' }, // Area for the third option
            { top: '74%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/013.png`),
          actions: [
            {
                type: 'trash',
                deck: 'settlementDeck',
            },
            {
                type: 'trash',
                deck: 'settlementDeck',
            },
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '013'             
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
                addCardID: '013'             
            },
        ],
    },
    '014': {
      hoverAreas: [
            { top: '52%', width: '100%', height: '10%' }, // Area for the first option
            { top: '82%', width: '100%', height: '15%' }, // Area for the second option
  
          ],
          imagePath : require(`../images/library_deck/014.png`),
          actions: [
            {
                type: 'stage',
                cards: ['015','134']
            },
            {
                type: 'stage',
                type2: 'add',
                addCardID: '017',
                deck: 'encounterDeck',
                cards: ['016','067']
            }   
        ],
    },
    '015': {
      hoverAreas: [
            { top: '51%', width: '100%', height: '10%' }, // Area for the first option
            { top: '85%', width: '100%', height: '12%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/015.png`),
          actions: [
             {
                type: 'stage',
                cards: ['018','067']
            },
            {
                type: 'stage',
                cards: ['019','067']
            }
          
        ],
    },
    '016': {
      hoverAreas: [
            { top: '65%', width: '100%', height: '11%' }, // Area for the first option
            { top: '90%', width: '100%', height: '11%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/016.png`),
          actions: [
            {
                type: 'stage',
                cards: ['019','094']
            },
            {
                type: 'stage',
                cards: ['020','134']
            }
        ],
    },
    '017': {
      hoverAreas: [
            { top: '28%', width: '100%', height: '8%' }, // Area for the first option
            { top: '51%', width: '100%', height: '9%' }, // Area for the second option
            { top: '69%', width: '100%', height: '9%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/017.png`),
          actions: [
            {
                type: 'add',
                addCardID: '017',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                addCardID: '017',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                addCardID: '017',
                deck: 'encounterDeck',
            }
        ],
    },
    '018': {
      hoverAreas: [
            { top: '56%', width: '100%', height: '11%' }, // Area for the first option
            { top: '84%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/018.png`),
          actions: [
             {
                type: 'stage',
                cards: ['024','130']
            },
            {
                type: 'stage',
                type2: 'add',
                addCardID: '022',
                deck: 'encounterDeck', 
                cards: ['021','125']
            }      
        ],
    },
    '019': {
      hoverAreas: [
            { top: '60%', width: '100%', height: '15%' }, // Area for the first option
            { top: '90%', width: '100%', height: '10%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/019.png`),
          actions: [
            {
                type: 'stage',
                type2: 'add',
                deck: 'encounterDeck',
                addCardID: '022',
                cards: ['021','150']
            },
            {
                type: 'stage',
                cards: ['023','150']
            }
        ],
    },
    '020': {
      hoverAreas: [
            { top: '51%', width: '100%', height: '11%' }, // Area for the first option
            { top: '82%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/020.png`),
          actions: [
            {
                type: 'stage',
                cards: ['023','107']
            },
            {
                type: 'stage',
                cards: ['028','148']
            }
        ],
    },
    '021': {
      hoverAreas: [
            { top: '49%', width: '100%', height: '11%' }, // Area for the first option
            { top: '75%', width: '100%', height: '20%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/021.png`),
          actions: [
            {
                type: 'stage',
                cards: ['024','157']
            },
            {
                type: 'stage',
                cards: ['028','148']
            }
        ],
    },
    '022': {
      hoverAreas: [
            { top: '31%', width: '100%', height: '8%' }, // Area for the first option
            { top: '57%', width: '100%', height: '9%' }, // Area for the second option
            { top: '83%', width: '100%', height: '9%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/022.png`),
          actions: [
            {
                type: 'add',
                addCardID: '022',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                addCardID: '022',
                deck: 'encounterDeck',
            },
            {
                type: 'add',
                addCardID: '022',
                deck: 'encounterDeck',
            }
        ],
    },
    '023': {
      hoverAreas: [
            { top: '51%', width: '100%', height: '11%' }, // Area for the first option
            { top: '82%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/023.png`),
          actions: [
            {
                type: 'stage',
                cards: ['023','107']
            },
            {
                type: 'stage',
                cards: ['028','148']
            }
        ],
    },
    '024': {
      hoverAreas: [
            { top: '51%', width: '100%', height: '11%' }, // Area for the first option
            { top: '82%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/024.png`),
          actions: [
            {
                type: 'stage',
                cards: ['023','107']
            },
            {
                type: 'stage',
                cards: ['028','148']
            }
        ],
    },
    '025': {
      hoverAreas: [
            { top: '51%', width: '100%', height: '11%' }, // Area for the first option
            { top: '82%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/025.png`),
          actions: [
            {
                type: 'stage',
                cards: ['023','107']
            },
            {
                type: 'stage',
                cards: ['028','148']
            }
        ],
    },
    '026': {
      hoverAreas: [
            { top: '51%', width: '100%', height: '11%' }, // Area for the first option
            { top: '82%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/026.png`),
          actions: [
            {
                type: 'stage',
                cards: ['023','107']
            },
            {
                type: 'stage',
                cards: ['028','148']
            }
        ],
    },
    '027': {
      hoverAreas: [
            { top: '51%', width: '100%', height: '11%' }, // Area for the first option
            { top: '82%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/027.png`),
          actions: [
            {
                type: 'stage',
                cards: ['023','107']
            },
            {
                type: 'stage',
                cards: ['028','148']
            }
        ],
    },
    '028': {
      hoverAreas: [
            { top: '51%', width: '100%', height: '11%' }, // Area for the first option
            { top: '82%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/028.png`),
          actions: [
            {
                type: 'stage',
                cards: ['023','107']
            },
            {
                type: 'stage',
                cards: ['028','148']
            }
        ],
    },
    '029': {
      hoverAreas: [
            { top: '51%', width: '100%', height: '11%' }, // Area for the first option
            { top: '82%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/029.png`),
          actions: [
            {
                type: 'stage',
                cards: ['023','107']
            },
            {
                type: 'stage',
                cards: ['028','148']
            }
        ],
    },
    '030': {
      hoverAreas: [
            { top: '51%', width: '100%', height: '11%' }, // Area for the first option
            { top: '82%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/030.png`),
          actions: [
            {
                type: 'stage',
                cards: ['023','107']
            },
            {
                type: 'stage',
                cards: ['028','148']
            }
        ],
    },
    '244(1)': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/244(1).png`)
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
            { top: '43%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S01.png`),
           actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
        ],
          
    },
    'S02': {
      hoverAreas: [
            { top: '27%', width: '100%', height: '8%' }, // Area for the first option
            { top: '45%', width: '100%', height: '8%' }, // Area for the second option
          ],
          imagePath : require(`../images/settlement_deck/S02.png`),
           actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
        ],
    },
    'S03': {
        hoverAreas: [
            { top: '21%', width: '100%', height: '7%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '61%', width: '100%', height: '7%' }, // Area for the third option
        ],
        imagePath: require('../images/settlement_deck/S03.png'),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck'
            },
        ],
    },
    'S04': {
      hoverAreas: [
            { top: '21%', width: '100%', height: '8%' }, // Area for the first option
            { top: '41%', width: '100%', height: '8%' }, // Area for the second option
            { top: '60%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S04.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck'
            },
        ],
    },
    'S05': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '60%', width: '100%', height: '7%' }, // Area for the second option
           ],
          imagePath : require(`../images/settlement_deck/S05.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
        ],
    },
    'S06': {
      hoverAreas: [
            { top: '26%', width: '100%', height: '8%' }, // Area for the first option
            { top: '48%', width: '100%', height: '8%' }, // Area for the second option
          ],
          imagePath : require(`../images/settlement_deck/S06.png`),
        actions: [
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '164'
            },
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '165'
            }
        ],
    },
    'S07': {
      hoverAreas: [
            { top: '33%', width: '100%', height: '8%' }, // Area for the first option
            { top: '55%', width: '100%', height: '8%' }, // Area for the second option
          ],
          imagePath : require(`../images/settlement_deck/S07.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'trash',
                deck: 'settlementDeck',
            },
        ],
    },
    'S08': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '42%', width: '100%', height: '8%' }, // Area for the second option
          ],
          imagePath : require(`../images/settlement_deck/S08.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
        ],
    },
    'S09': {
      hoverAreas: [
            { top: '26%', width: '100%', height: '8%' }, // Area for the first option
            { top: '46%', width: '100%', height: '8%' }, // Area for the second option
          ],
          imagePath : require(`../images/settlement_deck/S09.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
        ],
    },
    'S10': {
      hoverAreas: [
            { top: '29%', width: '100%', height: '12%' }, // Area for the first option
            { top: '52%', width: '100%', height: '8%' }, // Area for the second option
          ],
          imagePath : require(`../images/settlement_deck/S10.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
        ],
    },
    'S11': {
      hoverAreas: [
            { top: '27%', width: '100%', height: '8%' }, // Area for the first option
            { top: '43%', width: '100%', height: '8%' }, // Area for the second option
            { top: '68%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S11.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '009'
            },
        ],
    },
    'S12': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '53%', width: '100%', height: '21%' }, // Area for the second option
            { top: '75%', width: '100%', height: '18%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S12.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '008',
            },
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '007',
            },
        ],
    },
    'S13': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '42%', width: '100%', height: '8%' }, // Area for the second option
            { top: '74%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S13.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck'
            },
        ],
    },
    'S14': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '48%', width: '100%', height: '8%' }, // Area for the second option
            { top: '79%', width: '100%', height: '7%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S14.png`),
        actions: [
            {
                type: 'trash',
                deck: 'settlementDeck',
            },
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '013',
            },
            {
                type: 'discard',
                deck: 'settlementDeck'
            },
        ],
    },
    'S15': {
      hoverAreas: [
            { top: '23%', width: '100%', height: '8%' }, // Area for the first option
            { top: '42%', width: '100%', height: '8%' }, // Area for the second option
            { top: '69%', width: '100%', height: '14%' }, // Area for the third option
            { top: '84%', width: '100%', height: '11%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S15.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck'
            },
            {
                type: 'discard',
                deck: 'settlementDeck'
            },
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '012'
            },
            {
                type: 'discard',
                deck: 'settlementDeck'
            },
        ],
    },
    'S16': {
      hoverAreas: [
            { top: '26%', width: '100%', height: '8%' }, // Area for the first option
            { top: '49%', width: '100%', height: '8%' }, // Area for the second option
            { top: '75%', width: '100%', height: '14%' }, // Area for the third option
            { top: '90%', width: '100%', height: '10%' }, // Area for the third option
          ],
          imagePath : require(`../images/settlement_deck/S16.png`),
        actions: [
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'discard',
                deck: 'settlementDeck',
            },
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '011'
            },
            {
                type: 'add',
                deck: 'settlementDeck',
                addCardID: '010'
            },
        ],
    },


    
    // Add more cards with different hover zones as needed
  };
  
  export default cardData;
  