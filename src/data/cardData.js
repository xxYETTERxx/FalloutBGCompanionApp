import { addCard } from '../functions/cardFunctions';

//cardData.js
//type = array
//deck = string
//addCardID = array    
//cards == array

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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck', 
                addDeck: ['encounterDeck'],
                addCardIDS: ['002']             
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
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
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['006']
            },
            {
                type: ['discard'],
                deck: 'settlementDeck'
                
            },
            {
                type: ['discard'],
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
                type: ['trash'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['trash'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: [['trash']],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
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
                type: ['trash'],
                deck: 'settlementDeck',
            },
            {
                type: ['trash'],
                deck: 'settlementDeck',
            },
            {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addCardIDS: ['013']             
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
                addCardIDS: ['013']             
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
                type: ['stage'],
                cards: ['015','134']
            },
            {
                type: ['stage','add'],
                addCardIDS: ['017'],
                addDeck: ['encounterDeck'],
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
                type: ['stage'],
                cards: ['018','067']
            },
            {
                type: ['stage'],
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
                type: ['stage'],
                cards: ['019','094']
            },
            {
                type: ['stage'],
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
                type: ['trash','add'],
                addCardIDS: ['017'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
            },
            {
                type: ['trash','add'],
                addCardIDS: ['017'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
            },
            {
                type: ['trash','add'],
                addCardIDS: ['017'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
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
                type: ['stage'],
                cards: ['024','130']
            },
            {
                type: ['stage','trash','add'],
                addCardIDS: ['022'],
                addDeck: ['encounterDeck'], 
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
                type: ['stage','trash','add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['022'],
                cards: ['021','150']
            },
            {
                type: ['stage'],
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
                type: ['stage'],
                cards: ['023','107']
            },
            {
                type: ['stage'],
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
                type: ['stage'],
                cards: ['024','157']
            },
            {
                type: ['stage','add'],
                addCardIDS: ['026','027'],
                addDeck: ['settlementDeck','encounterDeck'],
                cards: ['025','148']
            }
        ],
    },
    '022': {
      hoverAreas: [
            { top: '40%', width: '100%', height: '10%' }, // Area for the first option
            { top: '50%', width: '100%', height: '8%' }, // Area for the first option
            { top: '66%', width: '100%', height: '8%' }, // Area for the second option
            { top: '74%', width: '100%', height: '9%' }, // Area for the third option
            { top: '91%', width: '100%', height: '9%' }, // Area for the third option
          ],
          imagePath : require(`../images/library_deck/022.png`),
          actions: [
            {
                type: ['trash'],
                deck: 'encounterDeck'
            },
            {
                type: ['trash','add'],
                addCardIDS: ['022'],
                addDeck: ['encounterDeck'],
                deck: 'encounterDeck'
            },
            {
                type: ['trash'],
                deck: 'encounterDeck'
            },
            {
                type: ['trash','add'],
                addCardIDS: ['022'],
                addDeck: ['encounterDeck'],
                deck: 'encounterDeck'
            },
            {
                type: ['trash','add'],
                addCardIDS: ['022'],
                addDeck: ['encounterDeck'],
                deck: 'encounterDeck'
            },
            
        ],
    },
    '023': {
      hoverAreas: [
            { top: '54%', width: '100%', height: '11%' }, // Area for the first option
            { top: '89%', width: '100%', height: '10%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/023.png`),
          actions: [
            {
                type: ['stage','add'],
                addDeck: ['settlementDeck','encounterDeck'],
                addCardIDS:['026','027'],
                cards: ['025','130']
            },
            {
                type: ['stage'],
                cards: ['028','148']
            }
        ],
    },
    '024': {
      hoverAreas: [
            { top: '64%', width: '100%', height: '10%' }, // Area for the first option
            { top: '89%', width: '100%', height: '10%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/024.png`),
          actions: [
            {
                type: ['trash']
            },
            {
                type: ['trash']
            }
        ],
    },
    '025': {
      hoverAreas: [
            { top: '64%', width: '100%', height: '9%' }, // Area for the first option
            { top: '88%', width: '100%', height: '11%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/025.png`),
          actions: [
            {
                type: ['trash'],
            },
            {
                type: ['trash']
            }
        ],
    },
    '026': {
      hoverAreas: [
            { top: '30%', width: '100%', height: '18%' }, // Area for the first option
            { top: '57%', width: '100%', height: '15%' }, // Area for the second option
            { top: '78%', width: '100%', height: '17%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/026.png`),
          actions: [
            {
                type: ['trash'],
                deck: 'settlementDeck'
              
            },
            {
                type: ['discard'],
                deck: 'settlementDeck'
            },
            {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['026']
            }
        ],
    },
    '027': {
        hoverAreas: [
            { top: '29%', width: '100%', height: '18%' }, // Area for the first option
            { top: '54%', width: '100%', height: '12%' }, // Area for the second option
            { top: '72%', width: '100%', height: '17%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/027.png`),
          actions: [
            {
                type: ['trash'],
                deck: 'encounterDeck'
              
            },
            {
                type: ['discard'],
                deck: 'encounterDeck'
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['027']
            }
        ],
    },
    '028': {
      hoverAreas: [
            { top: '60%', width: '100%', height: '11%' }, // Area for the first option
            { top: '88%', width: '100%', height: '11%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/028.png`),
          actions: [
            {
                type: ['trash']
            },
            {
                type: ['trash']
            },
            
        ],
    },
    '029': {
      hoverAreas: [
            { top: '45%', width: '100%', height: '11%' }, // Area for the first option
            { top: '75%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/029.png`),
          actions: [
            {
                type: ['stage'],
                cards: ['032','094']
            },
            {
                type: ['stage'],
                cards: ['033','067']
            }
        ],
    },
    '030': {
      hoverAreas: [
            { top: '44%', width: '100%', height: '8%' }, // Area for the first option
            { top: '68%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/030.png`),
          actions: [
            {
                type: ['trash']
            }
        ],
    },
    '031': {
        hoverAreas: [
              { top: '40%', width: '100%', height: '8%' }, // Area for the first option
              { top: '49%', width: '100%', height: '11%' }, // Area for the second option
              { top: '67%', width: '100%', height: '11%' }, // Area for the second option
              { top: '86%', width: '100%', height: '11%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/031.png`),
            actions: [
              {
                  type: ['trash','add'],
                  addCardIDS: ['031'],
                  deck: 'settlementDeck',
                  addDeck: ['settlementDeck']
              },
              {
                type: ['trash','add'],
                addCardIDS: ['031'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck']
            },
            {
                type: ['trash','add'],
                addCardIDS: ['031'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck']
            },
            {
                type: ['trash','add'],
                addCardIDS: ['031'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck']
            },
              
          ],
      },
    '066': {
        hoverAreas: [
              { top: '49%', width: '100%', height: '13%' }, // Area for the first option
              { top: '76%', width: '100%', height: '20%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/066.png`),
            actions: [
              {
                  type: ['trash'],
              },
              {
                  type: ['trash'],
              }
          ],
      },
    '067': {
        hoverAreas: [
              { top: '51%', width: '100%', height: '11%' }, // Area for the first option
              { top: '82%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/067.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['068']
              },
              {
                  type: ['stage'],
                  cards: ['069']
              }
          ],
      },
      '068': {
        hoverAreas: [
              { top: '55%', width: '100%', height: '11%' }, // Area for the first option
              { top: '85%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/068.png`),
            actions: [
              {
                  type: ['trash','createDeck'],
                  deckType: 'vault84Deck',
                  startCards  : ['071'],

              },
              {
                type: ['trash','createDeck'],
                deckType: 'vault84Deck',
                startCards  : ['071'],

              },
          ],
      },
      '069': {
        hoverAreas: [
              { top: '42%', width: '100%', height: '11%' }, // Area for the first option
              { top: '68%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/069.png`),
            actions: [
                {
                    type: ['trash','createDeck'],
                    deckType: 'vault84Deck',
                    startCards  : ['070'],
    
                },
                {
                    type: ['trash','createDeck'],
                    deckType: 'vault84Deck',
                    startCards: ['070'],
    
                },
          ],
      },
      '070': {
        hoverAreas: [
              { top: '33%', width: '100%', height: '31%' }, // Area for the first option
              { top: '65%', width: '100%', height: '8%' }, // Area for the second option
              { top: '79%', width: '100%', height: '13%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/070.png`),
            actions: [
                {
                    type: ['buildVault'],
                    deckType: 'vault84Deck',
                    addCardIDS: ['072','073','074','075','076','077','078','079']
                },
                {
                    type: ['trash','add'],
                    addDeck: ['vault84Deck'],
                    addCardIDS: ['070'],
    
                },
                {
                    type: ['trash','add'],
                    addDeck: ['vault84Deck'],
                    addCardIDS: ['070'],
    
                },
          ],
      },
      '071': {
        hoverAreas: [
              { top: '47%', width: '100%', height: '23%' }, // Area for the first option
              { top: '78%', width: '100%', height: '20%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/071.png`),
            actions: [
                {
                    type: ['buildVault'],
                    deckType: 'vault84Deck',
                    addCardIDS: ['072','073','074','075','076','077','078','079']
                },
                {
                    type: ['trash','add'],
                    addDeck: ['vault84Deck'],
                    addCardIDS: ['071'],
    
                },
          ],
      },
      '072': {
        hoverAreas: [
              { top: '35%', width: '100%', height: '8%' }, // Area for the first option
              { top: '63%', width: '100%', height: '20%' }, // Area for the second option
              { top: '84%', width: '100%', height: '16%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/072.png`),
            actions: [
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
          ],
      },
      '073': {
        hoverAreas: [
              { top: '47%', width: '100%', height: '14%' }, // Area for the first option
              { top: '69%', width: '100%', height: '11%' }, // Area for the second option
              { top: '80%', width: '100%', height: '18%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/073.png`),
            actions: [
                {
                    type: ['stage','checkLast'],
                    cards: ['083'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
          ],
      },
      '074': {
        hoverAreas: [
            { top: '43%', width: '100%', height: '23%' }, // Area for the first option
            { top: '76%', width: '100%', height: '11%' }, // Area for the second option
            { top: '87%', width: '100%', height: '11%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/074.png`),
          actions: [
              {
                  type: ['trash','checkLast'],
                  deckName: 'vault84Deck'
              },
              {
                  type: ['trash','checkLast'],
                  deckName: 'vault84Deck'
              },
              {
                  type: ['trash','checkLast'],
                  deckName: 'vault84Deck'
              },
        ],
      },
      '075': {
        hoverAreas: [
              { top: '41%', width: '100%', height: '14%' }, // Area for the first option
              { top: '61%', width: '100%', height: '18%' }, // Area for the second option
              { top: '80%', width: '100%', height: '10%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/075.png`),
            actions: [
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
          ],
      },
      '076': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '14%' }, // Area for the first option
              { top: '72%', width: '100%', height: '18%' }, // Area for the second option
             
            ],
            imagePath : require(`../images/library_deck/076.png`),
            actions: [
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
          ],
      },
      '077': {
        hoverAreas: [
              { top: '46%', width: '100%', height: '14%' }, // Area for the first option
              { top: '71%', width: '100%', height: '16%' }, // Area for the second option
              { top: '87%', width: '100%', height: '10%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/077.png`),
            actions: [
                {
                    type: ['stage','checkLast'],
                    deckName: 'vault84Deck',
                    cards: ['085']
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
          ],
      },
      '078': {
        hoverAreas: [
              { top: '42%', width: '100%', height: '18%' }, // Area for the first option
              { top: '61%', width: '100%', height: '22%' }, // Area for the second option
              { top: '83%', width: '100%', height: '10%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/078.png`),
            actions: [
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
          ],
      },
      '079': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '12%' }, // Area for the first option
              { top: '65%', width: '100%', height: '14%' }, // Area for the second option
              { top: '80%', width: '100%', height: '12%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/079.png`),
            actions: [
                {
                    type: ['stage','checkLast'],
                    deckName: 'vault84Deck',
                    cards: ['082']
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckName: 'vault84Deck'
                },
          ],
      },
      '080': {
        hoverAreas: [
              { top: '40%', width: '100%', height: '50%' }, // Area for the first option
            ],
            imagePath : require(`../images/library_deck/080.png`),
            actions: [
                {
                    type: ['trash'],
                    deckName: 'vault84Deck'
                }
            ]
      },
      '081': {
        hoverAreas: [
              { top: '57%', width: '100%', height: '50%' }, // Area for the first option
            ],
            imagePath : require(`../images/library_deck/081.png`),
            actions: [
                {
                    type: ['trash'],
                    deckName: 'vault84Deck'
                }
            ]
      },
      '082': {
        hoverAreas: [
            { top: '48%', width: '100%', height: '12%' }, // Area for the first option
            { top: '74%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/082.png`),
          actions: [
              {
                  type: ['trash','add'],
                  addDeck: ['encounterDeck'],
                  addCardIDS: ['086','087']
              },
              {
                type: ['trash','add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['086','087']
              },
        ],
      },
      '083': {
        hoverAreas: [
            { top: '48%', width: '100%', height: '12%' }, // Area for the first option
            { top: '72%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/083.png`),
          actions: [
              {
                  type: ['trash','add'],
                  deck: 'encounterDeck',
                  addDeck: ['encounterDeck'],
                  addCardIDS: ['088','089']
              },
              {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['088','089']
            },
        ],
      },
      '084': {
        hoverAreas: [
            { top: '48%', width: '100%', height: '12%' }, // Area for the first option
            { top: '72%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/084.png`),
          actions: [
              {
                  type: ['trash','add'],
                  addDeck: ['encounterDeck'],
                  addCardIDS: ['088','089']
              },
              {
                type: ['trash','add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['088','089']
            },
        ],
      },
    '130': {
        hoverAreas: [
              { top: '40%', width: '100%', height: '10%' }, // Area for the first option
              { top: '63%', width: '100%', height: '10%' }, // Area for the second option
              { top: '90%', width: '100%', height: '10%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/130.png`),
            actions: [
              {
                  type: ['stage'],
                  cards:['131']
              },
              {
                  type: ['stage'],
                  cards: ['132']
              },
              {
                type: ['stage'],
                cards: ['133']
              }
          ],
      },
      '131': {
        hoverAreas: [
              { top: '50%', width: '100%', height: '15%' }, // Area for the first option
            ],
            imagePath : require(`../images/library_deck/131.png`),
            actions: [
              {
                  type: ['trash']
              }
           
          ],
      },
      '132': {
        hoverAreas: [
              { top: '58%', width: '100%', height: '15%' }, // Area for the first option
            ],
            imagePath : require(`../images/library_deck/132.png`),
            actions: [
                {
                    type: ['trash']
                }
          ],
      },
      '133': {
        hoverAreas: [
              { top: '50%', width: '100%', height: '15%' }, // Area for the first option
            ],
            imagePath : require(`../images/library_deck/133.png`),
            actions: [
                {
                    type: ['trash']
                }
          ],
      },
    '134': {
        hoverAreas: [
              { top: '52%', width: '100%', height: '11%' }, // Area for the first option
              { top: '82%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/134.png`),
            actions: [
              {
                  type: ['stage'],
                  cards:['137']
              },
              {
                  type: ['stage'],
                  cards: ['136']
              }
          ],
      },
      '136': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '13%' }, // Area for the first option
              { top: '75%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/136.png`),
            actions: [
              {
                  type: ['stage'],
                  cards:['137']
              },
              {
                  type: ['trash']
              }
          ],
      },
      '137': {
        hoverAreas: [
              { top: '52%', width: '100%', height: '11%' }, // Area for the first option
              { top: '78%', width: '100%', height: '17%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/137.png`),
            actions: [
              {
                  type: ['stage'],
                  cards:['138']
              },
              {
                  type: ['stage'],
                  cards: ['139']
              }
          ],
      },
      '138': {
        hoverAreas: [
              { top: '61%', width: '100%', height: '9%' }, // Area for the first option
              { top: '85%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/138.png`),
            actions: [
              {
                  type: ['add'],
                  addDeck: ['encounterDeck'],
                  addCardIDS: ['140']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['140']
            },
          ],
      },
      '139': {
        hoverAreas: [
              { top: '65%', width: '100%', height: '10%' }, // Area for the first option
              { top: '90%', width: '100%', height: '10%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/139.png`),
            actions: [
                {
                    type: ['add'],
                    addDeck: ['encounterDeck'],
                    addCardIDS: ['140']
                },
                {
                    type: ['add'],
                    addDeck: ['encounterDeck'],
                    addCardIDS: ['140']
                },
          ],
      },
      '140': {
        hoverAreas: [
              { top: '30%', width: '100%', height: '11%' }, // Area for the first option
              { top: '55%', width: '100%', height: '10%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/140.png`),
            actions: [
              {
                  type: ['trash'],
              },
              {
                  type: ['trash'],
              }
          ],
      },
      '148': {
        hoverAreas: [
              { top: '56%', width: '100%', height: '11%' }, // Area for the first option
              { top: '80%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/148.png`),
            actions: [
              {
                  type: ['trash'],
              },
              {
                  type: ['stage'],
                  cards: ['149']
              }
          ],
      },
      '149': {
        hoverAreas: [
              { top: '47%', width: '100%', height: '20%' }, // Area for the first option
            ],
            imagePath : require(`../images/library_deck/149.png`),
      },
      '150': {
        hoverAreas: [
              { top: '47%', width: '100%', height: '11%' }, // Area for the first option
              { top: '75%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/150.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['151']
              },
              {
                  type: ['stage'],
                  cards: ['152']
              }
          ],
      },
      '151': {
        hoverAreas: [
              { top: '55%', width: '100%', height: '11%' }, // Area for the first option
              { top: '81%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/151.png`),
            actions: [
              {
                  type: ['stage','add'],
                  addCardIDS:['154'],
                  deck: 'settlementDeck',
                  addDeck: ['settlementDeck'],
                  cards: ['153']
              },
              {
                  type: ['stage'],
                  cards: ['152']
              }
          ],
      },
      '152': {
        hoverAreas: [
              { top: '47%', width: '100%', height: '11%' }, // Area for the first option
              { top: '75%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/152.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['151']
              },
              {
                  type: ['stage'],
                  cards: ['152']
              }
          ],
      },
      '153': {
        hoverAreas: [
              { top: '47%', width: '100%', height: '11%' }, // Area for the first option
              { top: '75%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/153.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['151']
              },
              {
                  type: ['stage'],
                  cards: ['152']
              }
          ],
      },
      '154': {
        hoverAreas: [
              { top: '37%', width: '100%', height: '12%' }, // Area for the first option
              { top: '56%', width: '100%', height: '17%' }, // Area for the second option
              { top: '78%', width: '100%', height: '11%' }, // Area for the second option
              { top: '90%', width: '100%', height: '10%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/154.png`),
            actions: [
              {
                  type: ['trash'],
              },
              {
                type: ['trash'],
              },
              {
                type: ['trash'],
              },
              {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['154']
              },
          ],
      },
      '162': {
        hoverAreas: [
              { top: '43%', width: '100%', height: '11%' }, // Area for the first option
              { top: '54%', width: '100%', height: '10%' }, // Area for the second option
              { top: '71%', width: '100%', height: '10%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/162.png`),
            actions: [
              {
                  type: ['trash'],
              },
              {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['162'],
              },
              {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['162'],
              }  
          ],
      },
      '214': {
        hoverAreas: [
              { top: '43%', width: '100%', height: '11%' }, // Area for the first option
              { top: '54%', width: '100%', height: '10%' }, // Area for the second option
              { top: '71%', width: '100%', height: '10%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/162.png`),
            actions: [
              {
                  type: ['trash'],
              },
              {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['162'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['162'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['214'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['161'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['163'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['160']
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
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
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['005']
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['002']
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['003']
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
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['004']
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['004']
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['encounterDeck'],
                addCardIDS: ['001']
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['trash'],
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
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
                deck: 'encounterDeck',
            }
        ],
        imagePath : require(`../images/encounter_deck/E16.png`),
          actions: [
            {
                type: ['discard'],
                deck: 'encounterDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['164']
            },
            {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['165']
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['trash'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['009']
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['008'],
            },
            {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['007'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
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
                type: ['trash'],
                deck: 'settlementDeck',
            },
            {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['013'],
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck'
            },
            {
                type: ['discard'],
                deck: 'settlementDeck'
            },
            {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['012']
            },
            {
                type: ['discard'],
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
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['discard'],
                deck: 'settlementDeck',
            },
            {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['011']
            },
            {
                type: ['trash','add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['010']
            },
        ],
    },


    
    // Add more cards with different hover zones as needed
  };
  
  export default cardData;
  