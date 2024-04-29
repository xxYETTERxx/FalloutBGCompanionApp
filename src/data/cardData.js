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
                type: ['add'],
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
                type: ['stage','add'],
                cards: ['015','134'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['135']
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
                type: ['stage','add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['135'],
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
      '032': {
        hoverAreas: [
              { top: '51%', width: '100%', height: '11%' }, // Area for the first option
              { top: '78%', width: '100%', height: '14%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/032.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['034','067'],
              },
              {
                type: ['stage'],
                cards: ['034','067'],
              }
               
          ],
      },
      '033': {
        hoverAreas: [
              { top: '51%', width: '100%', height: '11%' }, // Area for the first option
              { top: '78%', width: '100%', height: '14%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/033.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['034','117'],
              },
              {
                type: ['stage'],
                cards: ['034','101'],
              }
               
          ],
      },
      '034': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '12%' }, // Area for the first option
              { top: '76%', width: '100%', height: '14%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/034.png`),
            actions: [
              {
                  type: ['stage','add'],
                  cards: ['035','037','141'],
                  addDeck: ['settlementDeck'],
                  addCardIDS: ['038']
              },
              {
                type: ['stage','add'],
                cards: ['036','037','134'],
                addDeck: ['settlementDeck'],
                addCardIDS: ['038']
                }
               
          ],
      },
      '035': {
        hoverAreas: [
              { top: '44%', width: '100%', height: '11%' }, // Area for the first option
              { top: '71%', width: '100%', height: '14%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/035.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['039','150'],
              },
              {
                type: ['stage'],
                cards: ['040','112']
              }
               
          ],
      },
      '036': {
        hoverAreas: [
              { top: '44%', width: '100%', height: '11%' }, // Area for the first option
              { top: '71%', width: '100%', height: '14%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/036.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['039','112'],
              },
              {
                type: ['stage'],
                cards: ['040','150']
              }
               
          ],
      },
      '037': {
        hoverAreas: [
              { top: '51%', width: '100%', height: '8%' }, // Area for the first option
              { top: '78%', width: '100%', height: '14%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/037.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['157'],
              },
              {
                type: ['stage'],
                cards: ['041'],
              }
               
          ],
      },
      '038': {
        hoverAreas: [
              { top: '34%', width: '100%', height: '14%' }, // Area for the first option
              { top: '48%', width: '100%', height: '12%' }, // Area for the first option
              { top: '67%', width: '100%', height: '14%' }, // Area for the first option
              { top: '90%', width: '100%', height: '10%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/038.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['settlementDeck'],
                addCardIDS: ['038']
              },
              {
                type: ['trash']
            },
            {
              type: ['add'],
              addDeck: ['settlementDeck'],
              addCardIDS: ['038']
            }
               
          ],
      },
      '039': {
        hoverAreas: [
              { top: '41%', width: '100%', height: '11%' }, // Area for the first option
              { top: '68%', width: '100%', height: '14%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/039.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['042','148'],
              },
              {
                type: ['stage'],
                cards: ['043']
              }
               
          ],
      },
      '040': {
        hoverAreas: [
              { top: '44%', width: '100%', height: '11%' }, // Area for the first option
              { top: '71%', width: '100%', height: '14%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/040.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['042']
              },
              {
                type: ['stage'],
                cards: ['043','148']
              }
               
          ],
      },
      '041': {
        hoverAreas: [
              { top: '61%', width: '100%', height: '10%' }, // Area for the first option
              { top: '85%', width: '100%', height: '14%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/041.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['130']
              },
              {
                type: ['stage'],
                cards: ['130']
              }
               
          ],
      },
      '042': {
        hoverAreas: [
              { top: '50%', width: '100%', height: '11%' }, // Area for the first option
            ],
            imagePath : require(`../images/library_deck/042.png`),
            actions: [
              {
                  type: ['trash']
              }               
          ],
      },
      '043': {
        hoverAreas: [
              { top: '75%', width: '100%', height: '14%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/043.png`),
            actions: [
              {
                type: ['trash']
              }
               
          ],
      },
      '044': {
        hoverAreas: [
              { top: '52%', width: '100%', height: '18%' }, // Area for the first option
              { top: '86%', width: '100%', height: '13%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/044.png`),
            actions: [
              {
                  type: ['stage','add'],
                  addDeck: ['encounterDeck'],
                  addCardIDS: ['046'],
                  cards: ['045','101']
              },
              {
                type: ['stage'],
                cards: ['048','067']
              }
               
          ],
      },
      '045': {
        hoverAreas: [
              { top: '55%', width: '100%', height: '12%' }, // Area for the first option
              { top: '86%', width: '100%', height: '13%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/045.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['049','067']
              },
              {
                type: ['stage'],
                cards: ['049','067']
              }
               
          ],
      },
      '046': {
        hoverAreas: [
              { top: '34%', width: '100%', height: '9%' }, // Area for the first option
              { top: '50%', width: '100%', height: '15%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/046.png`),
            actions: [
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['046']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['047']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['047']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['047']
              }
               
          ],
      },
      '047': {
        hoverAreas: [
              { top: '34%', width: '100%', height: '26%' }, // Area for the first option
              { top: '67%', width: '100%', height: '15%' }, // Area for the second option
              { top: '89%', width: '100%', height: '10%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/047.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['047']
              }
               
          ],
      },
      '048': {
        hoverAreas: [
              { top: '58%', width: '100%', height: '15%' }, // Area for the first option
              { top: '88%', width: '100%', height: '11%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/048.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['049','112']
              },
              {
                type: ['stage'],
                cards: ['050','117']
              }
               
          ],
      },
      '049': {
        hoverAreas: [
              { top: '42%', width: '100%', height: '12%' }, // Area for the first option
              { top: '70%', width: '100%', height: '15%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/049.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['051','094']
              },
              {
                type: ['stage','add'],
                cards: ['052','141'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['053']
              }
               
          ],
      },
      '050': {
        hoverAreas: [
              { top: '58%', width: '100%', height: '12%' }, // Area for the first option
              { top: '86%', width: '100%', height: '13%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/050.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['051','141']
              },
              {
                type: ['stage','add'],
                cards: ['052','094'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['053']
              }
               
          ],
      },
      '051': {
        hoverAreas: [
              { top: '44%', width: '100%', height: '11%' }, // Area for the first option
              { top: '78%', width: '100%', height: '16%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/051.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['054','157']
              },
              {
                type: ['stage'],
                cards: ['055','148']
              }
          ],
      },
      '052': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '11%' }, // Area for the first option
              { top: '78%', width: '100%', height: '13%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/052.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['054','148']
              },
              {
                type: ['stage'],
                cards: ['055','130']
              }
               
          ],
      },
      '053': {
        hoverAreas: [
              { top: '35%', width: '100%', height: '10%' }, // Area for the first option
              { top: '52%', width: '100%', height: '16%' }, // Area for the second option
              { top: '77%', width: '100%', height: '12%' }, // Area for the second option
              { top: '90%', width: '100%', height: '11%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/053.png`),
            actions: [
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['053']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['053']
              },
              {
                type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['053']
              },
               
          ],
      },
      '054': {
        hoverAreas: [
              { top: '89%', width: '100%', height: '10%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/054.png`),
            actions: [
              {
                type: ['stage'],
                cards: ['055']
              }
               
          ],
      },
      '055': {
        hoverAreas: [
              { top: '90%', width: '100%', height: '10%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/055.png`),
            actions: [
              {
                type: ['trash']
              }
               
          ],
      },
      '056': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '13%' }, // Area for the first option
              { top: '71%', width: '100%', height: '16%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/056.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['057','067']
              },
              {
                type: ['stage'],
                cards: ['058','067']
              }
               
          ],
      },
      '057': {
        hoverAreas: [
              { top: '52%', width: '100%', height: '10%' }, // Area for the first option
              { top: '78%', width: '100%', height: '16%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/057.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['059','101']
              },
              {
                type: ['stage'],
                cards: ['060','112']
              }
               
          ],
      },
      '058': {
        hoverAreas: [
              { top: '41%', width: '100%', height: '13%' }, // Area for the first option
              { top: '67%', width: '100%', height: '16%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/058.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['060','141']
              },
              {
                type: ['stage'],
                cards: ['061','117']
              }
               
          ],
      },
      '059': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '20%' }, // Area for the first option
              { top: '83%', width: '100%', height: '16%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/059.png`),
            actions: [
              {
                  type: ['stage','add'],
                  addDeck: ['encounterDeck'],
                  addCardIDS: ['063'],
                  cards: ['062','094']
              },
              {
                type: ['stage'],
                cards: ['065','157']
              }
               
          ],
      },
      '060': {
        hoverAreas: [
              { top: '47%', width: '100%', height: '18%' }, // Area for the first option
              { top: '78%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/060.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['065','107']
              },
              {
                type: ['stage'],
                cards: ['065','125']
              }
               
          ],
      },
      '061': {
        hoverAreas: [
              { top: '41%', width: '100%', height: '13%' }, // Area for the first option
              { top: '71%', width: '100%', height: '16%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/061.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['065','150']
              },
              {
                type: ['stage'],
                cards: ['064','157']
              }
               
          ],
      },
      '062': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '13%' }, // Area for the first option
              { top: '77%', width: '100%', height: '16%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/062.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['065','148']
              },
              {
                type: ['stage'],
                cards: ['064','150']
              }
               
          ],
      },
      '063': {
        hoverAreas: [
              { top: '34%', width: '100%', height: '9%' }, // Area for the first option
              { top: '50%', width: '100%', height: '15%' }, // Area for the second option
              { top: '65%', width: '100%', height: '9%' }, // Area for the second option
              { top: '80%', width: '100%', height: '9%' }, // Area for the second option
              { top: '89%', width: '100%', height: '10%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/063.png`),
            actions: [
                {
                    type: ['add'],
                    addDeck: ['encounterDeck'],
                    addCardIDS: ['063']
                },
                {
                    type: ['trash']
                },
                {
                    type: ['add'],
                    addDeck: ['encounterDeck'],
                    addCardIDS: ['063']
                },
                {
                    type: ['trash']
                },
                {
                    type: ['add'],
                    addDeck: ['encounterDeck'],
                    addCardIDS: ['063']
                },
               
          ],
      },
      '064': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '11%' }, // Area for the first option
              { top: '87%', width: '100%', height: '12%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/064.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['066','130']
              },
              {
                type: ['stage'],
                cards: ['066','148']
              }
          ],
      },
      '065': {
        hoverAreas: [
              { top: '57%', width: '100%', height: '11%' }, // Area for the first option
              { top: '80%', width: '100%', height: '15%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/065.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                  type: ['trash']
              }
               
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
              { top: '79%', width: '100%', height: '15%' }, // Area for the second option
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
                  type: ['add'],
                  addDeck: ['vault84Deck'],
                  addCardIDS: ['071'],

              },
              {
                type: ['add'],
                addDeck: ['vault84Deck'],
                addCardIDS: ['071']

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
                    type: ['add'],
                    addDeck: ['vault84Deck'],
                    addCardIDS: ['070'],
  
                },
                {
                    type: ['add'],
                    addDeck: ['vault84Deck'],
                    addCardIDS: ['070'],
  
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
                    deckType: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckType: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckType: 'vault84Deck'
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
                    deckType: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckType: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckType: 'vault84Deck'
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
                  type: ['checkLast','vault84Special'],
                  deckType: 'vault84Deck'
              },
              {
                  type: ['checkLast'],
                  deckType: 'vault84Deck'
              },
              {
                  type: ['checkLast'],
                  deckType: 'vault84Deck'
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
                    type: ['checkLast'],
                    deckType: 'vault84Deck'
                },
                {
                    type: ['checkLast'],
                    deckType: 'vault84Deck'
                },
                {
                    type: ['checkLast'],
                    deckType: 'vault84Deck'
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
                    type: ['checkLast'],
                    deckType: 'vault84Deck'
                },
                {
                    type: ['checkLast'],
                    deckType: 'vault84Deck'
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
                    deckType: 'vault84Deck',
                    cards: ['085']
                },
                {
                    type: ['checkLast'],
                    deckType: 'vault84Deck'
                },
                {
                    type: ['checkLast'],
                    deckType: 'vault84Deck'
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
                    type: ['stage','checkLast'],
                    cards: ['084'],
                    deckType: 'vault84Deck'
                },
                {
                    type: ['checkLast'],
                    deckType: 'vault84Deck'
                },
                {
                    type: ['checkLast'],
                    deckType: 'vault84Deck'
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
                    deckType: 'vault84Deck',
                    cards: ['082']
                },
                {
                    type: ['trash','checkLast'],
                    deckType: 'vault84Deck'
                },
                {
                    type: ['trash','checkLast'],
                    deckType: 'vault84Deck'
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
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['086','087']
              },
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
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
                  type: ['add'],
                  addDeck: ['vault109Deck'],
                  addCardIDS: ['088','089']
              },
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['088','089']
            },
        ],
      },
      '084': {
        hoverAreas: [
            { top: '51%', width: '100%', height: '12%' }, // Area for the first option
            { top: '74%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/084.png`),
          actions: [
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['092','093']
              },
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['092','093']
            },
        ],
      },
      '085': {
        hoverAreas: [
            { top: '44%', width: '100%', height: '11%' }, // Area for the first option
            { top: '70%', width: '100%', height: '11%' } // Area for the second option
          ],
          imagePath : require(`../images/library_deck/085.png`),
          actions: [
            {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['090','091']
            },
            {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['090','091']
            },
        ],
      },
      '086': {
        hoverAreas: [
            { top: '52%', width: '100%', height: '14%' }, // Area for the first option
            { top: '67%', width: '100%', height: '11%' }, // Area for the second option
            { top: '85%', width: '100%', height: '13%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/086.png`),
          actions: [
              {
                  type: ['add'],
                  addDeck: ['vault109Deck'],
                  addCardIDS: ['086']
              },
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['086']
              },
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['086']
              } 
        ],
      },
      '087': {
        hoverAreas: [
            { top: '50%', width: '100%', height: '10%' }, // Area for the first option
            { top: '74%', width: '100%', height: '10%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/087.png`),
          actions: [
              {
                  type: ['trash']
              },
              {
                type: ['trash']
            },
        ],
      },
      '088': {
        hoverAreas: [
            { top: '55%', width: '100%', height: '15%' }, // Area for the first option
            { top: '70%', width: '100%', height: '12%' }, // Area for the second option
            { top: '88%', width: '100%', height: '12%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/088.png`),
          actions: [
              {
                  type: ['add'],
                  addDeck: ['vault109Deck'],
                  addCardIDS: ['088']
              },
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['088']
            },
            {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['088']
            }
        ],
      },
      '089': {
        hoverAreas: [
            { top: '43%', width: '100%', height: '15%' }, // Area for the first option
            { top: '70%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/089.png`),
          actions: [
              {
                  type: ['trash']
              },
              {
                type: ['discard','vault109Special'],
                deck: 'vault109Deck'
              }
        ],
      },
      '090': {
        hoverAreas: [
            { top: '39%', width: '100%', height: '18%' }, // Area for the first option
            { top: '57%', width: '100%', height: '23%' }, // Area for the second option
            { top: '88%', width: '100%', height: '10%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/090.png`),
          actions: [
              {
                  type: ['add'],
                  addDeck: ['vault109Deck'],
                  addCardIDS: ['090']
              },
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['090']
            },
            {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['090']
            },
        ],
      },
      '090': {
        hoverAreas: [
            { top: '39%', width: '100%', height: '18%' }, // Area for the first option
            { top: '57%', width: '100%', height: '23%' }, // Area for the second option
            { top: '88%', width: '100%', height: '10%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/090.png`),
          actions: [
              {
                  type: ['add'],
                  addDeck: ['vault109Deck'],
                  addCardIDS: ['090']
              },
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['090']
            },
            {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['090']
            },
        ],
      },
      '091': {
        hoverAreas: [
            { top: '50%', width: '100%', height: '13%' }, // Area for the first option
            { top: '71%', width: '100%', height: '13%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/091.png`),
          actions: [
              {
                  type: ['trash']
              },
              {
                type: ['trash']
              }
        ],
      },
      '092': {
        hoverAreas: [
            { top: '40%', width: '100%', height: '20%' }, // Area for the first option
            { top: '68%', width: '100%', height: '16%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/092.png`),
          actions: [
              {
                  type: ['add'],
                  addDeck: ['vault109Deck'],
                  addCardIDS: ['092']
              },
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['092']
            },
        ],
      },
      '093': {
        hoverAreas: [
            { top: '46%', width: '100%', height: '14%' }, // Area for the first option
            { top: '68%', width: '100%', height: '22%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/093.png`),
          actions: [
              {
                  type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['vault109Deck'],
                addCardIDS: ['093']
            },
        ],
      },
      '094': {
        hoverAreas: [
              { top: '44%', width: '100%', height: '11%' }, // Area for the first option
              { top: '70%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/094.png`),
            actions: [
              {
                  type: ['stage'],
                  cards:['095']
              },
              {
                  type: ['stage'],
                  cards: ['096']
              }
          ],
      },
      '095': {
        hoverAreas: [
              { top: '44%', width: '100%', height: '16%' }, // Area for the first option
              { top: '82%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/095.png`),
            actions: [
              {
                  type: ['stage'],
                  cards:['097']
              },
              {
                  type: ['stage'],
                  cards: ['098']
              }
          ],
      },
      '096': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '13%' }, // Area for the first option
              { top: '81%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/096.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['trash']
              }
          ],
      },
      '097': {
        hoverAreas: [
              { top: '80%', width: '100%', height: '15%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/097.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['099']
              }
          ],
      },
      '098': {
        hoverAreas: [
              { top: '62%', width: '100%', height: '11%' }, // Area for the first option
              { top: '84%', width: '100%', height: '16%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/098.png`),
            actions: [
              {
                  type: ['stage'],
                  cards:['099']
              },
              {
                  type: ['trash']
              }
          ],
      },
      '099': {
        hoverAreas: [
              { top: '44%', width: '100%', height: '11%' }, // Area for the first option
            ],
            imagePath : require(`../images/library_deck/099.png`),
            actions: [
              {
                  type: ['trash']
              }
          ],
      },
      '100': {
        hoverAreas: [
              { top: '35%', width: '100%', height: '13%' }, // Area for the first option
             
            ],
            imagePath : require(`../images/library_deck/100.png`),
            actions: [
              {
                  type: ['trash']
              },
              
          ],
      },
      '101': {
        hoverAreas: [
            { top: '48%', width: '100%', height: '12%' }, // Area for the first option
            { top: '72%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/101.png`),
          actions: [
            {
                type: ['stage'],
                cards:['107']
            },
            {
                type: ['stage'],
                cards:['125']
            },  
        ],
      },
      '102': {
        hoverAreas: [
            { top: '54%', width: '100%', height: '12%' }, // Area for the first option
            { top: '85%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/102.png`),
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
      '125': {
        hoverAreas: [
            { top: '48%', width: '100%', height: '12%' }, // Area for the first option
            { top: '72%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/125.png`),
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
      '160': {
        hoverAreas: [
              { top: '30%', width: '100%', height: '12%' }, // Area for the first option
              { top: '51%', width: '100%', height: '25%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/160.png`),
            actions: [
              {
                  type: ['trash'],
              },
              {
                type: ['trash'],
              }  
          ],
      },
      '161': {
        hoverAreas: [
              { top: '35%', width: '100%', height: '13%' }, // Area for the first option
              { top: '49%', width: '100%', height: '13%' }, // Area for the second option
              { top: '70%', width: '100%', height: '12%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/161.png`),
            actions: [
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
                addCardIDS: ['161'],
              }  
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
      '163': {
        hoverAreas: [
              { top: '28%', width: '100%', height: '20%' }, // Area for the first option
              { top: '57%', width: '100%', height: '15%' }, // Area for the second option
              { top: '82%', width: '100%', height: '15%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/163.png`),
            actions: [
              {
                  type: ['trash'],
              },
              {
                type: ['trash']
              },
              {
                type: ['trash','add'],
                deck: 'encounterDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['163'],
              }  
          ],
      },
      '164': {
        hoverAreas: [
              { top: '28%', width: '100%', height: '15%' }, // Area for the first option
              { top: '52%', width: '100%', height: '14%' }, // Area for the second option
              { top: '66%', width: '100%', height: '15%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/164.png`),
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
                type: ['trash']
              }  
          ],
      },
      '165': {
        hoverAreas: [
              { top: '28%', width: '100%', height: '15%' }, // Area for the first option
              { top: '52%', width: '100%', height: '14%' }, // Area for the second option
              { top: '66%', width: '100%', height: '15%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/165.png`),
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
                type: ['trash']
              }  
          ],
      },
      '214': {
        hoverAreas: [
              { top: '36%', width: '100%', height: '6%' }, // Area for the first option
              { top: '54%', width: '100%', height: '6%' }, // Area for the second option
              { top: '74%', width: '100%', height: '6%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/214.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['101']
              },
              {
                type: ['trash','add'],
                addCardIDS: ['215'],
                addDeck: ['encounterDeck'],
                deck: 'encounterDeck'
              },
              {
                type: ['trash','add'],
                addCardIDS: ['215','216'],
                addDeck: ['encounterDeck'],
                deck: 'encounterDeck'
              }
              
          ],
      },
      '215': {
        hoverAreas: [
              { top: '40%', width: '100%', height: '10%' }, // Area for the first option
              { top: '51%', width: '100%', height: '9%' }, // Area for the second option
              { top: '74%', width: '100%', height: '13%' }, // Area for the second option
              { top: '88%', width: '100%', height: '10%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/215.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['trash','add'],
                addCardIDS: ['215'],
                addDeck: ['encounterDeck'],
                deck: 'encounterDeck'
              },
              {
                type: ['trash']
              },
              {
              type: ['trash','add'],
              addCardIDS: ['215'],
              addDeck: ['encounterDeck'],
              deck: 'encounterDeck'
              },
              
            ],
        },
      '216': {
        hoverAreas: [
              { top: '30%', width: '100%', height: '38%' }, // Area for the first option
              { top: '74%', width: '100%', height: '15%' }, // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/216.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['233']
              },
              {
                type: ['trash']
              },
            
              
          ],
      },
      '233': {
        hoverAreas: [
              { top: '52%', width: '100%', height: '10%' }, // Area for the first option
              { top: '76%', width: '100%', height: '15%' }, // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/233.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['trash']
              },   
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
                type: ['stage'],
                cards: ['214'],
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
                addDeck: ['settlementDeck'],
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
            { top: '28%', width: '100%', height: '12%' }, // Area for the first option
            { top: '48%', width: '100%', height: '10%' }, // Area for the second option
            { top: '59%', width: '100%', height: '10%' }, // Area for the second option
            { top: '80%', width: '100%', height: '13%' }, // Area for the third option
          ],
          imagePath : require(`../images/encounter_deck/E05.png`),
          actions: [
            {
                type: ['trash']
            },
            {
                type: ['add'],
                addDeck: ['settlementDeck'],
                addCardIDS: ['163']
            },
            {
                type: ['trash']
            },
            {
                type: ['add'],
                addDeck: ['settlementDeck'],
                addCardIDS: ['163']
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
                type: ['add'],
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
                type: ['trash']
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
                type: ['add'],
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
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['002']
            },
            {
                type: ['add'],
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
                type: ['add'],
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
                type: ['add'],
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
  