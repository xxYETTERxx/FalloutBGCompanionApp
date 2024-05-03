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
                type: ['keep','trash'],
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
                type: ['keep','trash'],
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
              { top: '50%', width: '100%', height: '15%' }, // Area for the second option
              { top: '72%', width: '100%', height: '14%' }, // Area for the first option
              { top: '86%', width: '100%', height: '14%' } // Area for the second option
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
              { top: '44%', width: '100%', height: '7%' }, // Area for the first option
              { top: '67%', width: '100%', height: '15%' }, // Area for the second option
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
                    type: ['keep','trash','checkLast'],
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
                    type: ['keep','trash','checkLast'],
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
                  type: ['keep','trash','checkLast'],
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
                    type: ['keep','checkLast'],
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
                    type: ['checkLast','trash'],
                    deckType: 'vault84Deck'
                },
                {
                    type: ['keep','checkLast'],
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
                  type: ['keep','checkLast'],
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
                    type: ['keep','checkLast'],
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
                    type: ['keep','checkLast'],
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
            { top: '74%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/101.png`),
          actions: [
            {
                type: ['stage','add'],
                addCardIDS: ['103'],
                addDeck: ['settlementDeck'],
                cards:['102']
            },
            {
                type: ['stage','add'],
                addCardIDS: ['105'],
                addDeck: ['encounterDeck'],
                cards:['104']
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
                type: ['stage'],
                cards:['107']
              },
              {
                type: ['stage'],
                cards:['125']
              },
          ],
      },
      '103': {
        hoverAreas: [
            { top: '30%', width: '100%', height: '9%' }, // Area for the first option
            { top: '48%', width: '100%', height: '18%' }, // Area for the second option
            { top: '66%', width: '100%', height: '14%' } // Area for the second option
          ],
          imagePath : require(`../images/library_deck/103.png`),
          actions: [
            {
                type: ['add'],
                addCardIDS: ['103'],
                addDeck: ['settlementDeck']
            },
            {
                type: ['trash']
            },
            {
                type: ['add'],
                addCardIDS: ['103'],
                addDeck: ['settlementDeck']
            },
          ],
      },
      '104': {
        hoverAreas: [
            { top: '47%', width: '100%', height: '8%' }, // Area for the first option
            { top: '55%', width: '100%', height: '6%' }, // Area for the first option
            { top: '84%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/104.png`),
          actions: [
              {
                type: ['stage','add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['106'],
                cards:['107']
              },
              {
                type: ['trash']
              },
              {
                type: ['trash']
              }
          ],
      },
      '105': {
        hoverAreas: [
            { top: '10%', width: '100%', height: '10%' }, // Area for the first option
            { top: '43%', width: '100%', height: '10%' }, // Area for the first option
            { top: '53%', width: '100%', height: '15%' }, // Area for the second option
            { top: '75%', width: '100%', height: '16%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/105.png`),
          actions: [
              {
                type: ['trash']
              },
              {
                type: ['discard'],
                deck: 'encounterDeck'
              },
              {
                type: ['discard'],
                deck: 'encounterDeck'
              },
              {
                type: ['discard'],
                deck: 'encounterDeck'
              }
          ],
      },
      '106': {
        hoverAreas: [
            { top: '38%', width: '100%', height: '17%' }, // Area for the first option
            { top: '55%', width: '100%', height: '12%' }, // Area for the second option
            { top: '73%', width: '100%', height: '16%' } // Area for the second option
          ],
          imagePath : require(`../images/library_deck/106.png`),
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
                addCardIDS: ['106'],
               
              }
          ],
      },
      '107': {
        hoverAreas: [
            { top: '52%', width: '100%', height: '10%' }, // Area for the first option
            { top: '79%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/107.png`),
          actions: [
              {
                type: ['stage'],
                cards:['108']
              },
              {
                type: ['stage','add'],
                addDeck: ['encounterDeck'],
                cards:['109'],
                addCardIDS:['110']
              },
          ],
      },
      '108': {
        hoverAreas: [
            { top: '52%', width: '100%', height: '12%' }, // Area for the first option
            { top: '82%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/108.png`),
          actions: [
              {
                type: ['trash']
              },
              {
                type: ['trash']
              }
          ],
      },
      '109': {
        hoverAreas: [
            { top: '60%', width: '100%', height: '9%' }, // Area for the first option
            { top: '84%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/109.png`),
          actions: [
              {
                type: ['trash']
              },
              {
                type: ['trash']
              }
          
          ],
      },
      '110': {
        hoverAreas: [
            { top: '34%', width: '100%', height: '14%' }, // Area for the first option
            { top: '48%', width: '100%', height: '9%' }, // Area for the first option
            { top: '64%', width: '100%', height: '14%' }, // Area for the second option
            { top: '78%', width: '100%', height: '8%' }, // Area for the second option
            { top: '93%', width: '100%', height: '8%' } // Area for the second option
          ],
          imagePath : require(`../images/library_deck/110.png`),
          actions: [
              {
                type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['110'],
              },
              {
                type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['110'],
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['110'],
              },
          ],
      },
      '111': {
        hoverAreas: [
           
            { top: '82%', width: '100%', height: '18%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/111.png`),
          actions: [
              {
                type: ['pass']
              }
          ],
      },
      '112': {
        hoverAreas: [
            { top: '40%', width: '100%', height: '12%' }, // Area for the first option
            { top: '63%', width: '100%', height: '16%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/112.png`),
          actions: [
              {
                type: ['stage'],
                cards:['114']
              },
              {
                type: ['stage'],
                cards:['113']
              },
          ],
      },
      '113': {
        hoverAreas: [
            { top: '44%', width: '100%', height: '11%' }, // Area for the first option
            { top: '71%', width: '100%', height: '16%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/113.png`),
          actions: [
              {
                type: ['stage'],
                cards:['115']
              },
              {
                type: ['stage'],
                cards:['115']
              },
          ],
      },
      '114': {
        hoverAreas: [
            { top: '51%', width: '100%', height: '11%' }, // Area for the first option
            { top: '74%', width: '100%', height: '16%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/114.png`),
          actions: [
              {
                type: ['stage'],
                cards:['113']
              },
              {
                type: ['stage'],
                cards:['116']
              },
          ],
      },
      '115': {
        hoverAreas: [
            { top: '44%', width: '100%', height: '11%' }, // Area for the first option
            { top: '74%', width: '100%', height: '16%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/115.png`),
          actions: [
              {
                type: ['trash'],
            
              },
              {
                type: ['trash'],
              }
          ],
      },
      '116': {
        hoverAreas: [
            { top: '41%', width: '100%', height: '11%' }, // Area for the first option
            { top: '64%', width: '100%', height: '16%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/116.png`),
          actions: [
              {
                type: ['trash'],
            
              },
              {
                type: ['trash'],
              }
          ],
      },
      '117': {
        hoverAreas: [
            { top: '44%', width: '100%', height: '11%' }, // Area for the first option
            { top: '71%', width: '100%', height: '18%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/117.png`),
          actions: [
              {
                type: ['stage'],
                cards:['118']
              },
              {
                type: ['stage'],
                cards:['119']
              },
          ],
      },
      '118': {
        hoverAreas: [
            { top: '48%', width: '100%', height: '11%' }, // Area for the first option
            { top: '78%', width: '100%', height: '16%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/118.png`),
          actions: [
              {
                type: ['stage'],
                cards:['120']
              },
              {
                type: ['stage','add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['122','123','124'],
                cards:['121']
              },
          ],
      },
      '119': {
        hoverAreas: [
            { top: '56%', width: '100%', height: '14%' }, // Area for the first option
            { top: '90%', width: '100%', height: '11%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/119.png`),
          actions: [
              {
                type: ['stage'],
                cards:['120']
              },
              {
                type: ['stage'],
                cards:['125']
              },
          ],
      },
      '120': {
        hoverAreas: [
            { top: '60%', width: '100%', height: '14%' }, // Area for the first option
            { top: '90%', width: '100%', height: '9%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/120.png`),
          actions: [
              {
                type: ['trash']
              },
              {
                type: ['stage'],
                cards:['125']
              },
          ],
      },
      '121': {
        hoverAreas: [
            { top: '50%', width: '100%', height: '20%' } // Area for the first option
    
          ],
          imagePath : require(`../images/library_deck/121.png`),
          actions: [
              {
                type: ['stage'],
                cards:['107']
              }
          ],
      },
      '122': {
        hoverAreas: [
            { top: '34%', width: '100%', height: '14%' }, // Area for the first option
            { top: '64%', width: '100%', height: '11%' }, // Area for the first option
            { top: '75%', width: '100%', height: '9%' }, // Area for the first option
            { top: '91%', width: '100%', height: '8%' }, // Area for the first option
          ],
          imagePath : require(`../images/library_deck/122.png`),
          actions: [
              {
                type: ['trash']
              },
              {
                type: ['trash']
              },
              {
                type: ['add'],
                addCardIDS :['122'],
                addDeck: ['encounterDeck']
              },
              {
                type: ['add'],
                addCardIDS :['122'],
                addDeck: ['encounterDeck']
              }
          ],
      },
      '123': {
        hoverAreas: [
            { top: '34%', width: '100%', height: '14%' }, // Area for the first option
            { top: '64%', width: '100%', height: '11%' }, // Area for the first option
            { top: '75%', width: '100%', height: '9%' }, // Area for the first option
            { top: '91%', width: '100%', height: '8%' }, // Area for the first option
          ],
          imagePath : require(`../images/library_deck/123.png`),
          actions: [
              {
                type: ['trash']
              },
              {
                type: ['trash']
              },
              {
                type: ['add'],
                addCardIDS :['123'],
                addDeck: ['encounterDeck']
              },
              {
                type: ['add'],
                addCardIDS :['123'],
                addDeck: ['encounterDeck']
              }
          ],
      },
      '124': {
        hoverAreas: [
            { top: '31%', width: '100%', height: '14%' }, // Area for the first option
            { top: '61%', width: '100%', height: '11%' }, // Area for the first option
            { top: '72%', width: '100%', height: '9%' }, // Area for the first option
            { top: '88%', width: '100%', height: '10%' }, // Area for the first option
          ],
          imagePath : require(`../images/library_deck/124.png`),
          actions: [
              {
                type: ['trash']
              },
              {
                type: ['trash']
              },
              {
                type: ['add'],
                addCardIDS :['124'],
                addDeck: ['encounterDeck']
              },
              {
                type: ['add'],
                addCardIDS :['124'],
                addDeck: ['encounterDeck']
              }
          ],
      },
      '125': {
        hoverAreas: [
            { top: '48%', width: '100%', height: '11%' }, // Area for the first option
            { top: '78%', width: '100%', height: '14%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/125.png`),
          actions: [
            {
                type: ['stage','add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['127'],
                cards:['126']
              },
              {
                type: ['stage','add'],
                addDeck: ['settlementDeck'],
                addCardIDS: ['129'],
                cards:['128']
              },
        ],
      },
      '126': {
        hoverAreas: [
            { top: '52%', width: '100%', height: '50%' }, // Area for the first option
           
          ],
          imagePath : require(`../images/library_deck/126.png`),
          actions: [
            {
                type: ['trash']
            }
        ],
      },
      '127': {
        hoverAreas: [
            { top: '31%', width: '100%', height: '18%' }, // Area for the first option
            { top: '57%', width: '100%', height: '21%' }, // Area for the second option
            { top: '85%', width: '100%', height: '18%' } // Area for the second option
          ],
          imagePath : require(`../images/library_deck/127.png`),
          actions: [
            {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['127']
              },
              {
                type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['127']
              },
        ],
      },
      '128': {
        hoverAreas: [
            { top: '48%', width: '100%', height: '50%' }, // Area for the first option
           
          ],
          imagePath : require(`../images/library_deck/128.png`),
          actions: [
            {
                type: ['trash']
            }
        ],
      },
      '129': {
        hoverAreas: [
            { top: '38%', width: '100%', height: '15%' }, // Area for the first option
            { top: '61%', width: '100%', height: '18%' }, // Area for the second option
            { top: '85%', width: '100%', height: '15%' }, // Area for the second option
          ],
          imagePath : require(`../images/library_deck/129.png`),
          actions: [
            {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['129']
              },
              {
                type:['trash']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['129']
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
              { top: '53%', width: '100%', height: '12%' }, // Area for the first option
              { top: '80%', width: '100%', height: '15%' }, // Area for the second option
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
      '135': {
        hoverAreas: [
              { top: '41%', width: '100%', height: '27%' }, // Area for the first option
              { top: '75%', width: '100%', height: '15%' }, // Area for the second option
              { top: '90%', width: '100%', height: '09%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/135.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['135']
              },
              {
                type: ['add'],
                addDeck: ['encounterDeck'],
                addCardIDS: ['135']
              },
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
              { top: '38%', width: '100%', height: '18%' }, // Area for the first option
              { top: '65%', width: '100%', height: '8%' }, // Area for the second option
              { top: '73%', width: '100%', height: '23%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/140.png`),
            actions: [
              {
                  type: ['trash'],
              },
              {
                type: ['discard'],
                deck: 'encounterDeck'
              },
              {
                  type: ['trash'],
              }
          ],
      },
      '141': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '18%' }, // Area for the first option
              { top: '81%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/141.png`),
            actions: [
                {
                    type: ['stage'],
                    cards: ['142']
                },
                {
                    type: ['stage'],
                    cards: ['142']
                }
          ],
      },
      '142': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '18%' }, // Area for the first option
              { top: '78%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/142.png`),
            actions: [
                {
                    type: ['stage'],
                    cards: ['143']
                },
                {
                    type: ['stage'],
                    cards: ['143']
                }
          ],
      },
      '143': {
        hoverAreas: [
              { top: '55%', width: '100%', height: '18%' }, // Area for the first option
              { top: '88%', width: '100%', height: '12%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/143.png`),
            actions: [
                {
                    type: ['stage','add'],
                    addDeck:['encounterDeck'],
                    addCardID:['144'],
                    cards: ['146']
                },
                {
                    type: ['stage','add'],
                    addDeck:['encounterDeck'],
                    addCardID:['145'],
                    cards: ['146']
                },
          ],
      },
      '144': {
        hoverAreas: [
              { top: '37%', width: '100%', height: '15%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/144.png`),
            actions: [
                {
                    type: ['discard'],
                    deck: 'encounterDeck',
                },
          ],
      },
      '145': {
        hoverAreas: [
              { top: '38%', width: '100%', height: '14%' }, // Area for the first option
              { top: '62%', width: '100%', height: '18%' }, // Area for the second option
              { top: '80%', width: '100%', height: '20%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/145.png`),
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
                }
          ],
      },
      '146': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '18%' }, // Area for the first option
              { top: '81%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/146.png`),
            actions: [
                {
                    type: ['stage'],
                    cards: ['142']
                },
                {
                    type: ['stage'],
                    cards: ['142']
                }
          ],
      },
      '147': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '18%' }, // Area for the first option
              { top: '81%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/147.png`),
            actions: [
                {
                    type: ['stage'],
                    cards: ['142']
                },
                {
                    type: ['stage'],
                    cards: ['142']
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
                type: ['add'],
                deck: 'settlementDeck',
                addDeck: ['settlementDeck'],
                addCardIDS: ['154']
              },
          ],
      },
      '155': {
        hoverAreas: [
              { top: '61%', width: '100%', height: '11%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/155.png`),
            actions: [
              {
                  type: ['pass']
              }
          ],
      },
      '156': {
        hoverAreas: [
              { top: '32%', width: '100%', height: '12%' }, // Area for the first option
              { top: '50%', width: '100%', height: '15%' }, // Area for the second option
              { top: '72%', width: '100%', height: '11%' }, // Area for the second option
              { top: '83%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/156.png`),
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
                }
          ],
      },
      '157': {
        hoverAreas: [
              { top: '47%', width: '100%', height: '11%' }, // Area for the first option
              { top: '72%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/157.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                  type: ['trash']
              }
          ],
      },
      '158': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '13%' }, // Area for the first option
              { top: '88%', width: '100%', height: '12%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/158.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['trash']
              }  
          ],
      },
      '159': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '11%' }, // Area for the first option
              { top: '71%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/159.png`),
            actions: [
              {
                  type: ['trash']
            
              },
              {
                  type: ['trash']
              }
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
      '166': {
        hoverAreas: [
              { top: '38%', width: '100%', height: '11%' }, // Area for the first option
              { top: '60%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/166.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['167','190']
              },
              {
                  type: ['stage','add'],
                  cards: ['169','203'],
                  addCardIDS: ['168'],
                  addDeck: ['encounterDeck']
              }
          ],
      },
      '167': {
        hoverAreas: [
              { top: '56%', width: '100%', height: '8%' }, // Area for the first option
              { top: '75%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/167.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['170','226']
              },
              {
                type: ['stage','add'],
                cards: ['172','226'],
                addCardIDS: ['171'],
                addDeck: ['encounterDeck']
            }
          ],
      },
      '168': {
        hoverAreas: [
              { top: '34%', width: '100%', height: '14%' }, // Area for the first option
              { top: '48%', width: '100%', height: '14%' }, // Area for the first option
              { top: '70%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/168.png`),
            actions: [
              {
                  type: ['keep'],
              },
              {
                  type: ['keep'],
              },
              {
                type: ['add'],
                addCardIDS: ['168'],
                addDeck: ['encounterDeck']
            }
          ],
      },
      '169': {
        hoverAreas: [
              { top: '52%', width: '100%', height: '10%' }, // Area for the first option
              { top: '72%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/169.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['170','226']
              },
              {
                type: ['stage','add'],
                cards: ['172','226'],
                addCardIDS: ['171'],
                addDeck: ['encounterDeck']
            }
          ],
      },
      '170': {
        hoverAreas: [
              { top: '52%', width: '100%', height: '12%' }, // Area for the first option
              { top: '75%', width: '100%', height: '15%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/170.png`),
            actions: [
              {
                  type: ['stage','add'],
                  cards: ['176','107'],
                  addDeck: ['specialStarDeck'],
                  addCardIDS: ['173','174','175']
              },
              {
                type: ['stage','add'],
                cards: ['180','148'],
                addCardIDS: ['177','178','179'],
                addDeck: ['specialShieldDeck']
            }
          ],
      },
      '171': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '13%' }, // Area for the first option
              { top: '62%', width: '100%', height: '8%' }, // Area for the second option
              { top: '78%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/171.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['add'],
                addCardIDS: ['171'],
                addDeck: ['encounterDeck']
            },
            {
                type: ['keep']
            }
          ],
      },
      '172': {
        hoverAreas: [
              { top: '67%', width: '100%', height: '8%' }, // Area for the first option
              { top: '90%', width: '100%', height: '9%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/172.png`),
            actions: [
                {
                    type: ['stage','add'],
                    cards: ['176','107'],
                    addDeck: ['specialStarDeck'],
                    addCardIDS: ['173','174','175']
                },
                {
                  type: ['stage','add'],
                  cards: ['180','148'],
                  addCardIDS: ['177','178','179'],
                  addDeck: ['specialShieldDeck']
              }
          ],
      },
      '173': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '9%' }, // Area for the first option
              { top: '57%', width: '100%', height: '8%' }, // Area for the second option
              { top: '73%', width: '100%', height: '11%' }, // Area for the second option
              { top: '84%', width: '100%', height: '15%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/173.png`),
            actions: [
              {
                  type: ['keep']
              },
              {
                type: ['add'],
                addCardIDS: ['173'],
                addDeck: ['specialStarDeck']
            },
            {
                type: ['keep']
            },
            {
                type: ['add'],
                addCardIDS: ['173'],
                addDeck: ['specialStarDeck']
            }
          ],
      },
      '174': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '8%' }, // Area for the first option
              { top: '57%', width: '100%', height: '12%' }, // Area for the second option
              { top: '77%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/174.png`),
            actions: [
              {
                  type: ['keep']
              },
              {
                type: ['add'],
                addCardIDS: ['174'],
                addDeck: ['specialStarDeck']
            },
            {
                type: ['keep']
            }
          ],
      },
      '175': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '8%' }, // Area for the first option
              { top: '56%', width: '100%', height: '8%' }, // Area for the second option
              { top: '73%', width: '100%', height: '11%' }, // Area for the second option
              { top: '84%', width: '100%', height: '15%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/175.png`),
            actions: [
              {
                  type: ['keep']
              },
              {
                type: ['add'],
                addCardIDS: ['175'],
                addDeck: ['specialStarDeck']
            },
            {
                type: ['keep']
            },
            {
                type: ['add'],
                addCardIDS: ['175'],
                addDeck: ['specialStarDeck']
            }
          ],
      },
      '176': {
        hoverAreas: [
              { top: '50%', width: '100%', height: '15%' }, // Area for the first option
              { top: '78%', width: '100%', height: '20%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/176.png`),
            actions: [
              {
                  type: ['stage','specialShieldAction','add'],
                  cards: ['183','220'],
                  addCardIDS: ['181','182'],
                  addDeck: ['specialShieldDeck']
              },
              {
                type: ['stage','add'],
                cards: ['183','234'],
                addCardIDS: ['181','182'],
                addDeck: ['specialShieldDeck']
            },
            {
                type: ['keep']
            }
          ],
      },
      '177': {
        hoverAreas: [
              { top: '51%', width: '100%', height: '9%' }, // Area for the first option
              { top: '60%', width: '100%', height: '8%' }, // Area for the second option
              { top: '73%', width: '100%', height: '20%' } // Area for the second option
            
            ],
            imagePath : require(`../images/library_deck/177.png`),
            actions: [
              {
                  type: ['keep']
              },
              {
                type: ['add'],
                addCardIDS: ['177'],
                addDeck: ['specialShieldDeck']
            },
            {
                type: ['keep']
            }
        ]
      },
      '178': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '11%' }, // Area for the first option
              { top: '60%', width: '100%', height: '11%' }, // Area for the second option
              { top: '77%', width: '100%', height: '20%' } // Area for the second option
            
            ],
            imagePath : require(`../images/library_deck/178.png`),
            actions: [
              {
                  type: ['keep']
              },
              {
                type: ['add'],
                addCardIDS: ['178'],
                addDeck: ['specialShieldDeck']
            },
            {
                type: ['keep']
            }
        ]
      },
      '179': {
        hoverAreas: [
              { top: '46%', width: '100%', height: '14%' }, // Area for the first option
              { top: '60%', width: '100%', height: '8%' }, // Area for the second option
              { top: '75%', width: '100%', height: '20%' } // Area for the second option
            
            ],
            imagePath : require(`../images/library_deck/179.png`),
            actions: [
              {
                  type: ['keep']
              },
              {
                type: ['add'],
                addCardIDS: ['179'],
                addDeck: ['specialShieldDeck']
            },
            {
                type: ['keep']
            }
        ]
      },
      '180': {
        hoverAreas: [
              { top: '46%', width: '100%', height: '13%' }, // Area for the first option
    
              { top: '68%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/180.png`),
            actions: [
              {
                type: ['stage','add'],
                cards: ['183','220'],
                addCardIDS: ['181','182'],
                addDeck: ['specialShieldDeck']
            },
            {
                type: ['specialStarAction','stage'],
                cards: ['183','234'],
                addCardIDS: ['181','182'],
                addDeck: ['specialShieldDeck']
            }
          ],
      },
      '181': {
        hoverAreas: [
              { top: '29%', width: '100%', height: '5%' }, // Area for the first option
              { top: '42%', width: '100%', height: '5%' }, // Area for the second option
              { top: '55%', width: '100%', height: '18%' }, // Area for the second option
              { top: '73%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/181.png`),
            actions: [
              {
                  type: ['keep']
              },
              {
                type: ['add'],
                addCardIDS: ['181'],
                addDeck: ['specialShieldDeck']
            },
            {
                type: ['trash']
            },
            {
                type: ['add'],
                addCardIDS: ['181'],
                addDeck: ['specialShieldDeck']
            }
          ],
      },
      '182': {
        hoverAreas: [
              { top: '26%', width: '100%', height: '17%' }, // Area for the first option
              { top: '43%', width: '100%', height: '7%' }, // Area for the second option
              { top: '58%', width: '100%', height: '14%' }, // Area for the second option
              { top: '72%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/182.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['add'],
                addCardIDS: ['182'],
                addDeck: ['specialShieldDeck']
            },
            {
                type: ['trash']
            },
            {
                type: ['add'],
                addCardIDS: ['182'],
                addDeck: ['specialShieldDeck']
            }
          ],
      },
      '183': {
        hoverAreas: [
              { top: '36%', width: '100%', height: '12%' }, // Area for the first option
              { top: '79%', width: '100%', height: '18%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/183.png`),
            actions: [
              {
                  type: ['trash','specialStarAction']

              },
              {
                type: ['trash','specialStarAction']
              }
          ],
      },
      '184': {
        hoverAreas: [
              { top: '38%', width: '100%', height: '10%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/184.png`),
            actions: [
              {
                  type: ['stage','multiAdd'],
                  cards: ['185'],
                  card: '244'
              },
          ],
      },
      '185': {
        hoverAreas: [
              { top: '38%', width: '100%', height: '12%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/185.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['186','190','203']
              },
          ],
      },
      '186': {
        hoverAreas: [
              { top: '57%', width: '100%', height: '21%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/186.png`),
            actions: [
              {
                  type: ['stage','multiAdd'],
                  cards: ['187'],
                  card: '240'
              },
          ],
      },
      '187': {
        hoverAreas: [
              { top: '44%', width: '100%', height: '17%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/187.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['148','188']
              },
          ],
      },
      '190': {
        hoverAreas: [
              { top: '44%', width: '100%', height: '6%' }, // Area for the first option
              { top: '64%', width: '100%', height: '15%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/190.png`),
            actions: [
              {
                  type: ['stage','add'],
                  cards: ['192'],
                  addCardIDS: ['191'],
                  addDeck: ['encounterDeck']
              },
              {
                type: ['stage','add'],
                cards: ['192'],
                addCardIDS: ['191'],
                addDeck: ['encounterDeck']
              },
          ],
      },
      '191': {
        hoverAreas: [
              { top: '28%', width: '100%', height: '11%' },// Area for the first option
              { top: '39%', width: '100%', height: '15%' }, // Area for the first option
              { top: '60%', width: '100%', height: '20%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/191.png`),
            actions: [
                {
                    type: ['keep']
                },
                {
                  type: ['add'],
                  addCardIDS: ['191'],
                  addDeck: ['encounterDeck']
                },
                {
                  type: ['add'],
                  addCardIDS: ['191'],
                  addDeck: ['encounterDeck']
                }
          ],
      },
      '192': {
        hoverAreas: [
              { top: '52%', width: '100%', height: '6%' }, // Area for the first option
              { top: '71%', width: '100%', height: '15%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/192.png`),
            actions: [
              {
                  type: ['stage','add'],
                  cards: ['193'],
                  addCardIDS: ['194','195','196','197','198','199'],
                  addDeck: ['vault7Deck']
              },
              {
                type: ['stage','add'],
                cards: ['193'],
                addCardIDS: ['194','195','196','197','198','199'],
                addDeck: ['vault7Deck']
              },
          ],
      },
      '193': {
        hoverAreas: [
              { top: '75%', width: '100%', height: '25%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/193.png`),
            actions: [
              {
                  type: ['trash','vault7Special']
              },
          ],
      },
      '194': {
        hoverAreas: [
              { top: '39%', width: '100%', height: '21%' }, // Area for the first option
              { top: '60%', width: '100%', height: '14%' }, // Area for the first option
              { top: '82%', width: '100%', height: '18%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/194.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['discard'],
                deck: 'vault7Deck'
              },
              {
                type: ['discard'],
                deck: 'vault7Deck'
              } 
          ],
      },
      '195': {
        hoverAreas: [
              { top: '39%', width: '100%', height: '21%' }, // Area for the first option
              { top: '60%', width: '100%', height: '14%' }, // Area for the first option
              { top: '82%', width: '100%', height: '18%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/195.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['discard'],
                deck: 'vault7Deck'
              },
              {
                type: ['keep']
              } 
          ],
      },
      '196': {
        hoverAreas: [
              { top: '39%', width: '100%', height: '21%' }, // Area for the first option
              { top: '60%', width: '100%', height: '14%' }, // Area for the first option
              { top: '82%', width: '100%', height: '18%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/196.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['discard'],
                deck: 'vault7Deck'
              },
              {
                type: ['discard'],
                deck: 'vault7Deck'
              }, 
          ],
      },
      '197': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '21%' }, // Area for the first option
              { top: '72%', width: '100%', height: '12%' }, // Area for the first option
              { top: '84%', width: '100%', height: '15%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/197.png`),
            actions: [
              {
                  type: ['discard'],
                  deck: 'vault7Deck'
              },
              {
                type: ['add'],
                addDeck: ['vault7Deck'],
                addCardIDS: ['200']
              },
              {
                type: ['discard'],
                  deck: 'vault7Deck'
              }, 
          ],
      },
      '198': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '15%' }, // Area for the first option
              { top: '66%', width: '100%', height: '14%' }, // Area for the first option
              { top: '80%', width: '100%', height: '15%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/198.png`),
            actions: [
              {
                  type: ['discard'],
                  deck: 'vault7Deck'
              },
              {
                type: ['add'],
                addDeck: ['vault7Deck'],
                addCardIDS: ['201','202']
              },
              {
                type: ['discard'],
                  deck: 'vault7Deck'
              }, 
          ],
      },
      '199': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '15%' }, // Area for the first option
              { top: '66%', width: '100%', height: '17%' }, // Area for the first option
              { top: '83%', width: '100%', height: '15%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/199.png`),
            actions: [
              {
                  type: ['discard'],
                  deck: 'vault7Deck'
              },
              {
                type: ['keep']
              },
              {
                type: ['discard'],
                  deck: 'vault7Deck'
              }, 
          ],
      },
      '200': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '27%' }, // Area for the first option
              { top: '78%', width: '100%', height: '18%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/200.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['vault7Deck'],
                addCardIDS: ['200']
              },
           
          ],
      },
      '201': {
        hoverAreas: [
              { top: '43%', width: '100%', height: '18%' }, // Area for the first option
              { top: '68%', width: '100%', height: '18%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/201.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['vault7Deck'],
                addCardIDS: ['201']
              },
           
          ],
      },
      '202': {
        hoverAreas: [
              { top: '43%', width: '100%', height: '26%' }, // Area for the first option
              { top: '78%', width: '100%', height: '18%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/202.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                type: ['add'],
                addDeck: ['vault7Deck'],
                addCardIDS: ['202']
              },
           
          ],
      },
      '203': {
        hoverAreas: [
              { top: '85%', width: '100%', height: '15%' } // Area for the first option
            ],
            imagePath : require(`../images/library_deck/203.png`),
            actions: [
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
                type: ['add'],
                addCardIDS: ['215'],
                addDeck: ['encounterDeck'],
                deck: 'encounterDeck'
              },
              {
                type: ['trash']
              },
              {
              type: ['add'],
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
      '217': {
        hoverAreas: [
              { top: '46%', width: '100%', height: '6%' }, // Area for the first option
              { top: '64%', width: '100%', height: '6%' }, // Area for the second option
              { top: '84%', width: '100%', height: '16%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/217.png`),
            actions: [
              {
                  type: ['stage'],
                  cards: ['218']
              },
              {
                  type: ['stage'],
                  cards: ['219']
              },
              {
                type: ['trash']
            }
          ],
      },
      '218': {
        hoverAreas: [
              { top: '38%', width: '100%', height: '10%' }, // Area for the first option
              { top: '64%', width: '100%', height: '15%' } // Area for the second option
            
            ],
            imagePath : require(`../images/library_deck/218.png`),
            actions: [
              {
                  type: ['trash']
              },
              {
                  type: ['trash']
              }
          ],
      },
      '219': {
        hoverAreas: [
              { top: '61%', width: '100%', height: '15%' } // Area for the second option
             
            ],
            imagePath : require(`../images/library_deck/219.png`),
            actions: [
              {
                type: ['trash']
              }
          ],
      },
      '220': {
        hoverAreas: [
              { top: '52%', width: '100%', height: '10%' }, // Area for the second option
              { top: '83%', width: '100%', height: '15%' } // Area for the second option
             
            ],
            imagePath : require(`../images/library_deck/220.png`),
            actions: [
              {
                    type: ['stage'],
                    cards:['221']
              },
              {
                type: ['add'],
                addCardIDS: ['222'],
                addDeck: ['encounterDeck']
              }
          ],
      },
      '221': {
        hoverAreas: [
              { top: '32%', width: '100%', height: '12%' }, // Area for the second option
              { top: '57%', width: '100%', height: '20%' } // Area for the second option
             
            ],
            imagePath : require(`../images/library_deck/221.png`),
            actions: [
              {
                    type: ['stage'],
                    cards:['225']
              },
              {
                type: ['add','keep'],
                addCardIDS: ['224'],
                addDeck: ['encounterDeck']
              }
          ],
      },
      '222': {
        hoverAreas: [
              { top: '41%', width: '100%', height: '14%' }, // Area for the second option
              { top: '55%', width: '100%', height: '17%' }, // Area for the second option
              { top: '79%', width: '100%', height: '17%' }, // Area for the second option
             
            ],
            imagePath : require(`../images/library_deck/222.png`),
            actions: [
              {
                    type: ['trash']
              },
              {
                    type: ['stage'],
                    cards:['223']
              },
              {
                type: ['add','keep'],
                addCardIDS: ['224'],
                addDeck: ['encounterDeck']
              }
          ],
      },
      '223': {
        hoverAreas: [
              { top: '34%', width: '100%', height: '18%' }, // Area for the second option
              { top: '66%', width: '100%', height: '18%' } // Area for the second option
             
            ],
            imagePath : require(`../images/library_deck/223.png`),
            actions: [
              {
                type: ['trash']
              },
              {
                type: ['trash']
              }
          ],
      },
      '224': {
        hoverAreas: [
              { top: '33%', width: '100%', height: '18%' }, // Area for the second option
              { top: '51%', width: '100%', height: '12%' }, // Area for the second option
              { top: '68%', width: '100%', height: '17%' }, // Area for the second option
             
            ],
            imagePath : require(`../images/library_deck/224.png`),
            actions: [
              {
                    type: ['trash']
              },
              {
                type: ['add'],
                addCardIDS: ['224'],
                addDeck: ['encounterDeck']
              },
              {
                type: ['deck224Special','add'],
                addCardIDS: ['224'],
                addDeck: ['encounterDeck']
              }
          ],
      },
      '225': {
        hoverAreas: [
              { top: '41%', width: '100%', height: '21%' }, // Area for the second option
              { top: '73%', width: '100%', height: '24%' } // Area for the second option
             
            ],
            imagePath : require(`../images/library_deck/225.png`),
            actions: [
              {
                    type: ['trash']
              },
              {
                type: ['keep','add'],
                addDeck:['encounterDeck'],
                addCardIDS: ['224']
              }
          ],
      },
      '225': {
        hoverAreas: [
              { top: '41%', width: '100%', height: '21%' }, // Area for the second option
              { top: '73%', width: '100%', height: '24%' } // Area for the second option
             
            ],
            imagePath : require(`../images/library_deck/225.png`),
            actions: [
              {
                    type: ['trash']
              },
              {
                type: ['keep','add'],
                addDeck:['encounterDeck'],
                addCardIDS: ['224']
              }
          ],
      },
      '226': {
        hoverAreas: [
              { top: '48%', width: '100%', height: '10%' }, // Area for the first option
              { top: '68%', width: '100%', height: '8%' }, // Area for the first option
              { top: '89%', width: '100%', height: '10%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/226.png`),
            actions: [
                {
                    type: ['trash','add'],
                    addDeck:['encounterDeck'],
                    addCardIDS: ['227']
                },
                {
                    type: ['trash','add'],
                    addDeck:['settlementDeck'],
                    addCardIDS: ['228']
                },
                {
                    type: ['trash','add'],
                    addDeck:['settlementDeck'],
                    addCardIDS: ['229']
                }

          ],
      },
      '227': {
        hoverAreas: [
              { top: '45%', width: '100%', height: '13%' }, // Area for the first option
              { top: '58%', width: '100%', height: '15%' }, // Area for the first option
              { top: '80%', width: '100%', height: '17%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/227.png`),
            actions: [
                {
                    type: ['keep']
                },
                {
                    type: ['add'],
                    addDeck:['encounterDeck'],
                    addCardIDS: ['227']
                },
                {
                    type: ['keep']
                }

          ],
      },
      '228': {
        hoverAreas: [
              { top: '40%', width: '100%', height: '15%' }, // Area for the first option
              { top: '55%', width: '100%', height: '15%' }, // Area for the first option
              { top: '78%', width: '100%', height: '17%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/228.png`),
            actions: [
                {
                    type: ['keep']
                },
                {
                    type: ['add'],
                    addDeck:['settlementDeck'],
                    addCardIDS: ['228']
                },
                {
                    type: ['keep']
                }

          ],
      },
      '229': {
        hoverAreas: [
              { top: '40%', width: '100%', height: '15%' }, // Area for the first option
              { top: '55%', width: '100%', height: '17%' }, // Area for the first option
              { top: '78%', width: '100%', height: '18%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/229.png`),
            actions: [
                {
                    type: ['keep']
                },
                {
                    type: ['add'],
                    addDeck:['settlementDeck'],
                    addCardIDS: ['229']
                },
                {
                    type: ['keep']
                }

          ],
      },
      '230': {
        hoverAreas: [
              { top: '50%', width: '100%', height: '17%' }, // Area for the first option
              { top: '67%', width: '100%', height: '18%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/230.png`),
            actions: [
                {
                    type: ['stage','add'],
                    cards: ['232'],
                    addDeck: ['encounterDeck'],
                    addCardIDS: ['231']
                },
                {
                    type: ['stage'],
                    cards: ['233']
                }

          ],
      },
      '231': {
        hoverAreas: [
              { top: '31%', width: '100%', height: '14%' }, // Area for the first option
              { top: '45%', width: '100%', height: '12%' }, // Area for the first option
              { top: '64%', width: '100%', height: '17%' }, // Area for the second option
              { top: '81%', width: '100%', height: '17%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/231.png`),
            actions: [
                {
                    type: ['trash']
                },
                {
                    type: ['add'],
                    addDeck:['encounterDeck'],
                    addCardIDS: ['231']
                },
                {
                    type: ['keep']
                },
                {
                    type: ['add'],
                    addDeck:['encounterDeck'],
                    addCardIDS: ['231']
                }
          ],
      },
      '232': {
        hoverAreas: [
              { top: '43%', width: '100%', height: '10%' }, // Area for the first option
              { top: '68%', width: '100%', height: '10%' }, // Area for the first option
              { top: '87%', width: '100%', height: '12%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/232.png`),
            actions: [
                {
                    type: ['trash']
                },
                {
                    type: ['trash']
                },
                {
                    type: ['trash']
                }
          ],
      },
      '233': {
        hoverAreas: [
              { top: '52%', width: '100%', height: '9%' }, // Area for the first option
              { top: '77%', width: '100%', height: '12%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/233.png`),
            actions: [
                {
                    type: ['trash']
                },
                {
                    type: ['trash']
                }    
          ],
      },
      '234': {
        hoverAreas: [
              { top: '43%', width: '100%', height: '5%' }, // Area for the first option
              { top: '70%', width: '100%', height: '12%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/234.png`),
            actions: [
                {
                    type: ['stage','add'],
                    cards: ['236'],
                    addDeck:['encounterDeck'],
                    addCardIDS:['235']
                },
                {
                    type: ['stage'], 
                    cards: ['237']
 
                }  
          ],
      },
      '235': {
        hoverAreas: [
              { top: '39%', width: '100%', height: '11%' }, // Area for the first option
              { top: '50%', width: '100%', height: '10%' }, // Area for the second option
              { top: '66%', width: '100%', height: '12%' }, // Area for the first option
              { top: '88%', width: '100%', height: '11%' } // Area for the second option
              
            ],
            imagePath : require(`../images/library_deck/235.png`),
            actions: [
                {
                    type: ['trash']
                },
                {
                    type: ['add'],
                    addDeck:['encounterDeck'],
                    addCardIDS:['235']
                },
                {
                    type: ['trash']
                },
                {
                    type: ['add'],
                    addDeck:['encounterDeck'],
                    addCardIDS:['235']
                },  
          ],
      },
      '236': {
        hoverAreas: [
              { top: '50%', width: '100%', height: '9%' }, // Area for the first option
              { top: '80%', width: '100%', height: '12%' }, // Area for the second option
      
              
            ],
            imagePath : require(`../images/library_deck/236.png`),
            actions: [
                {
                    type: ['trash']
                },
                {
                    type: ['trash']
                }
                
          ],
      },
      '237': {
        hoverAreas: [
              { top: '46%', width: '100%', height: '9%' }, // Area for the first option
              { top: '72%', width: '100%', height: '12%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/237.png`),
            actions: [
                {
                    type: ['trash']
                },
                {
                    type: ['trash']
                }
                
          ],
      },
      '238': {
        hoverAreas: [
              { top: '1%', width: '100%', height: '1%' }, // Area for the first option

            ],
            imagePath : require(`../images/library_deck/238.png`),
            actions: [
                {
                    type: ['trash']
                }        
          ],
      },
      '239': {
        hoverAreas: [
              { top: '46%', width: '100%', height: '9%' }, // Area for the first option
              { top: '72%', width: '100%', height: '12%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/239.png`),
            actions: [
                {
                    type: ['trash']
                },
                {
                    type: ['trash']
                }
                
          ],
      },
      '240(1)': {
        hoverAreas: [
              { top: '31%', width: '100%', height: '12%' }, // Area for the first option
              { top: '48%', width: '100%', height: '18%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/240(1).png`),
            actions: [
                {
                    type: ['stage'],
                    cards: ['112']
                },
                {
                    type: ['stage'],
                    cards: ['112']
                }
                
          ],
      },
      '240(2)': {
        hoverAreas: [
              { top: '31%', width: '100%', height: '12%' }, // Area for the first option
              { top: '48%', width: '100%', height: '18%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/240(2).png`),
            actions: [
                {
                    type: ['stage'],
                    cards: ['150']
                },
                {
                    type: ['stage'],
                    cards: ['150']
                }
                
          ],
      },
      '240(3)': {
        hoverAreas: [
              { top: '31%', width: '100%', height: '12%' }, // Area for the first option
              { top: '48%', width: '100%', height: '18%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/240(3).png`),
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
      '240(4)': {
        hoverAreas: [
              { top: '31%', width: '100%', height: '12%' }, // Area for the first option
              { top: '48%', width: '100%', height: '18%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/240(4).png`),
            actions: [
                {
                    type: ['stage'],
                    cards: ['125']
                },
                {
                    type: ['stage'],
                    cards: ['125']
                }
                
          ],
      },
      '241(1)': {
        hoverAreas: [
              { top: '31%', width: '100%', height: '11%' }, // Area for the first option
              { top: '42%', width: '100%', height: '12%' }, // Area for the second option
              { top: '60%', width: '100%', height: '20%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/241(1).png`),
            actions: [
                {
                    type: ['stage'],
                    cards: ['069']
                },
                {
                    type: ['add'],
                    addCardIDS: ['242'],
                    addDeck: ['encounterDeck']
                },
                {
                    type: ['stage'],
                    cards: ['069']
                }
                
          ],
      },
      '241(2)': {
        hoverAreas: [
              { top: '28%', width: '100%', height: '14%' }, // Area for the first option
              { top: '49%', width: '100%', height: '30%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/241(2).png`),
            actions: [
                {
                    type: ['buildVault'],
                    deckType: 'vault109Deck',
                    addCardIDS: ['086','087','088','089','090','091','092','093']
                },
                {
                    type: ['add'],
                    addCardIDS: ['241(2)'],
                    addDeck: ['encounterDeck']
                }
          ],
      },
      '242': {
        hoverAreas: [
              { top: '30%', width: '100%', height: '9%' }, // Area for the first option
              { top: '39%', width: '100%', height: '11%' }, // Area for the first option
              { top: '59%', width: '100%', height: '30%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/242.png`),
            actions: [
                {
                    type: ['trash']
                },
                {
                    type: ['add'],
                    addCardIDS: ['242'],
                    addDeck: ['encounterDeck']
                },
                {
                    type: ['stage'],
                    cards: ['068']
                }
          ],
      },
      '243(1)': {
        hoverAreas: [
              { top: '30%', width: '100%', height: '9%' }, // Area for the first option
              { top: '45%', width: '100%', height: '30%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/243(1).png`),
            actions: [
                {
                    type: ['stage'],
                    cards:['203']
                },
                {
                    type: ['add'],
                    addCardIDS: ['243(1)'],
                    addDeck: ['settlementDeck']
                }
          ],
      },
      '243(2)': {
        hoverAreas: [
              { top: '30%', width: '100%', height: '9%' }, // Area for the first option
              { top: '45%', width: '100%', height: '30%' }, // Area for the second option
            ],
            imagePath : require(`../images/library_deck/243(2).png`),
            actions: [
                {
                    type: ['stage'],
                    cards:['190']
                },
                {
                    type: ['add'],
                    addCardIDS: ['243(2)'],
                    addDeck: ['settlementDeck']
                }
          ],
      },
    '244(1)': {
      hoverAreas: [
            { top: '33%', width: '100%', height: '12%' }, // Area for the first option
            { top: '52%', width: '100%', height: '15%' } // Area for the second option
          ],
          imagePath : require(`../images/library_deck/244(1).png`),
          actions: [
            {
                type: ['stage'],
                cards:['226']
            },
            {
                type: ['stage'],
                cards:['220']
            }
      ],
    },
    '244(2)': {
        hoverAreas: [
              { top: '33%', width: '100%', height: '12%' }, // Area for the first option
              { top: '52%', width: '100%', height: '15%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/244(2).png`),
            actions: [
              {
                  type: ['stage'],
                  cards:['220']
              },
              {
                  type: ['stage'],
                  cards:['234']
              }
        ],
      },
      '244(3)': {
        hoverAreas: [
              { top: '33%', width: '100%', height: '12%' }, // Area for the first option
              { top: '52%', width: '100%', height: '15%' } // Area for the second option
            ],
            imagePath : require(`../images/library_deck/244(3).png`),
            actions: [
              {
                  type: ['stage'],
                  cards:['234']
              },
              {
                  type: ['stage'],
                  cards:['226']
              }
        ],
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
  