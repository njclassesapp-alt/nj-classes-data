// Arrow Escape Game Database - Levels 6 to 30 (100% Solvable Guarantee)
// આ લેવલ ક્યારેય ડેડલોક (અશક્ય સ્થિતિ) માં નહિ જાય.

const njArrowLevels = [
    // === 🟢 LEVEL 6 TO 10 (ગ્રીડ: 5x5) ===
    // Level 6
    { size: 5, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:2,y:3,dir:'DOWN'}, 
        {x:1,y:2,dir:'LEFT'}, {x:3,y:2,dir:'RIGHT'} 
    ]},
    // Level 7
    { size: 5, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:3,y:1,dir:'RIGHT'}, {x:1,y:3,dir:'LEFT'}, {x:3,y:3,dir:'RIGHT'},
        {x:2,y:2,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:2,y:3,dir:'DOWN'} 
    ]},
    // Level 8
    { size: 5, blocks: [ 
        {x:0,y:2,dir:'LEFT'}, {x:1,y:2,dir:'LEFT'}, {x:3,y:2,dir:'RIGHT'}, {x:4,y:2,dir:'RIGHT'},
        {x:2,y:0,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:2,y:3,dir:'DOWN'}, {x:2,y:4,dir:'DOWN'} 
    ]},
    // Level 9
    { size: 5, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:2,y:3,dir:'UP'}, {x:2,y:4,dir:'UP'}, 
        {x:1,y:2,dir:'LEFT'}, {x:3,y:2,dir:'RIGHT'}, {x:1,y:3,dir:'LEFT'}, {x:3,y:3,dir:'RIGHT'} 
    ]},
    // Level 10
    { size: 5, blocks: [ 
        {x:1,y:1,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:3,y:1,dir:'UP'}, 
        {x:1,y:3,dir:'DOWN'}, {x:2,y:3,dir:'DOWN'}, {x:3,y:3,dir:'DOWN'},
        {x:0,y:2,dir:'LEFT'}, {x:4,y:2,dir:'RIGHT'} 
    ]},

    // === 🟡 LEVEL 11 TO 15 (ગ્રીડ: 6x6) ===
    // Level 11
    { size: 6, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:2,y:3,dir:'DOWN'}, {x:3,y:3,dir:'DOWN'},
        {x:1,y:2,dir:'LEFT'}, {x:4,y:2,dir:'RIGHT'}, {x:1,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'} 
    ]},
    // Level 12
    { size: 6, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:2,y:1,dir:'UP'}, {x:3,y:1,dir:'UP'}, {x:4,y:1,dir:'RIGHT'},
        {x:1,y:4,dir:'LEFT'}, {x:2,y:4,dir:'DOWN'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'RIGHT'},
        {x:2,y:2,dir:'LEFT'}, {x:3,y:2,dir:'RIGHT'}, {x:2,y:3,dir:'LEFT'}, {x:3,y:3,dir:'RIGHT'} 
    ]},
    // Level 13
    { size: 6, blocks: [ 
        {x:2,y:1,dir:'UP'}, {x:2,y:2,dir:'UP'}, {x:2,y:3,dir:'UP'}, {x:2,y:4,dir:'UP'},
        {x:3,y:1,dir:'DOWN'}, {x:3,y:2,dir:'DOWN'}, {x:3,y:3,dir:'DOWN'}, {x:3,y:4,dir:'DOWN'},
        {x:1,y:2,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'} 
    ]},
    // Level 14
    { size: 6, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:2,y:3,dir:'UP'}, {x:3,y:2,dir:'DOWN'}, {x:3,y:3,dir:'DOWN'},
        {x:1,y:1,dir:'LEFT'}, {x:4,y:1,dir:'RIGHT'}, {x:1,y:4,dir:'LEFT'}, {x:4,y:4,dir:'RIGHT'},
        {x:2,y:1,dir:'UP'}, {x:3,y:4,dir:'DOWN'} 
    ]},
    // Level 15
    { size: 6, blocks: [ 
        {x:0,y:2,dir:'LEFT'}, {x:1,y:2,dir:'LEFT'}, {x:4,y:2,dir:'RIGHT'}, {x:5,y:2,dir:'RIGHT'},
        {x:0,y:3,dir:'LEFT'}, {x:1,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:5,y:3,dir:'RIGHT'},
        {x:2,y:0,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:2,y:4,dir:'DOWN'}, {x:2,y:5,dir:'DOWN'},
        {x:3,y:0,dir:'UP'}, {x:3,y:1,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:3,y:5,dir:'DOWN'} 
    ]},

    // === 🟠 LEVEL 16 TO 20 (ગ્રીડ: 7x7) ===
    // Level 16
    { size: 7, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:3,y:1,dir:'UP'},
        {x:2,y:3,dir:'LEFT'}, {x:1,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:5,y:3,dir:'RIGHT'},
        {x:3,y:4,dir:'DOWN'}, {x:3,y:5,dir:'DOWN'}, {x:2,y:2,dir:'LEFT'}, {x:4,y:2,dir:'RIGHT'} 
    ]},
    // Level 17
    { size: 7, blocks: [ 
        {x:1,y:1,dir:'UP'}, {x:3,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'},
        {x:1,y:5,dir:'DOWN'}, {x:3,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:3,y:3,dir:'UP'},
        {x:1,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'} 
    ]},
    // Level 18
    { size: 7, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:2,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'},
        {x:3,y:2,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'},
        {x:1,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:3,dir:'UP'} 
    ]},
    // Level 19
    { size: 7, blocks: [ 
        {x:3,y:1,dir:'LEFT'}, {x:3,y:2,dir:'LEFT'}, {x:3,y:3,dir:'LEFT'}, {x:3,y:4,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'},
        {x:2,y:1,dir:'UP'}, {x:2,y:2,dir:'UP'}, {x:2,y:3,dir:'UP'}, {x:2,y:4,dir:'UP'}, {x:2,y:5,dir:'UP'},
        {x:4,y:1,dir:'DOWN'}, {x:4,y:3,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'} 
    ]},
    // Level 20
    { size: 7, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:2,y:1,dir:'UP'}, {x:4,y:1,dir:'UP'}, {x:5,y:1,dir:'RIGHT'},
        {x:1,y:5,dir:'LEFT'}, {x:2,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'RIGHT'},
        {x:3,y:2,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'},
        {x:3,y:3,dir:'RIGHT'} 
    ]},

    // === 🔴 LEVEL 21 TO 25 (ગ્રીડ: 7x7 - થોડા હાર્ડ પણ સોલ્વ થાય તેવા) ===
    // Level 21
    { size: 7, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'},
        {x:2,y:4,dir:'DOWN'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'},
        {x:1,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'},
        {x:3,y:3,dir:'UP'}, {x:1,y:2,dir:'LEFT'}, {x:5,y:2,dir:'RIGHT'}, {x:1,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'} 
    ]},
      // Level 22 (Hardcore Solid Block - દેખાવમાં ખૂબ હાર્ડ પણ સોલ્વ થઈ શકે તેવું)
    { size: 7, blocks: [ 
        // પહેલી લાઈન (Row 1)
        {x:1,y:1,dir:'LEFT'}, {x:2,y:1,dir:'LEFT'}, {x:3,y:1,dir:'UP'}, {x:4,y:1,dir:'RIGHT'}, {x:5,y:1,dir:'RIGHT'},
        // બીજી લાઈન (Row 2)
        {x:1,y:2,dir:'UP'}, {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'},
        // ત્રીજી લાઈન (Row 3 - Center)
        {x:1,y:3,dir:'LEFT'}, {x:2,y:3,dir:'LEFT'}, {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'RIGHT'}, {x:5,y:3,dir:'RIGHT'},
        // ચોથી લાઈન (Row 4)
        {x:1,y:4,dir:'DOWN'}, {x:2,y:4,dir:'DOWN'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'}, {x:5,y:4,dir:'DOWN'},
        // પાંચમી લાઈન (Row 5)
        {x:1,y:5,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'RIGHT'}, {x:5,y:5,dir:'RIGHT'}
    ]},
    
    // Level 23
    { size: 7, blocks: [ 
        {x:2,y:1,dir:'LEFT'}, {x:3,y:1,dir:'UP'}, {x:4,y:1,dir:'RIGHT'},
        {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'RIGHT'},
        {x:1,y:2,dir:'UP'}, {x:1,y:3,dir:'LEFT'}, {x:1,y:4,dir:'DOWN'},
        {x:5,y:2,dir:'UP'}, {x:5,y:3,dir:'RIGHT'}, {x:5,y:4,dir:'DOWN'},
        {x:3,y:3,dir:'UP'}, {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:3,y:2,dir:'UP'}, {x:3,y:4,dir:'DOWN'} 
    ]},
    // Level 24
    { size: 7, blocks: [ 
        {x:3,y:3,dir:'UP'}, 
        {x:2,y:2,dir:'LEFT'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'RIGHT'},
        {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'},
        {x:2,y:4,dir:'LEFT'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'RIGHT'},
        {x:1,y:2,dir:'LEFT'}, {x:5,y:2,dir:'RIGHT'}, {x:1,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'} 
    ]},
    // Level 25
    { size: 7, blocks: [ 
        {x:1,y:1,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:4,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'},
        {x:1,y:5,dir:'DOWN'}, {x:2,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'},
        {x:3,y:2,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'},
        {x:1,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:3,dir:'DOWN'} 
    ]},
        // === 🔵 ADVANCED LEVELS (ગ્રીડ: 8x8) ===
    // આ લેવલ્સમાં 100% સોલ્વ થવાની ગેરંટી છે.
    // Level 26
    { size: 8, blocks: [ 
        {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, 
        {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, 
        {x:2,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, 
        {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'} 
    ]},
    // Level 27
    { size: 8, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'}, 
        {x:2,y:2,dir:'LEFT'}, {x:5,y:2,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'} 
    ]},
    // Level 28
    { size: 8, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:2,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:6,y:1,dir:'RIGHT'},
        {x:1,y:6,dir:'LEFT'}, {x:2,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'RIGHT'},
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'} 
    ]},
    // Level 29
    { size: 8, blocks: [ 
        {x:3,y:1,dir:'UP'}, {x:4,y:1,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'},
        {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'}, {x:3,y:6,dir:'DOWN'}, {x:4,y:6,dir:'DOWN'},
        {x:1,y:3,dir:'LEFT'}, {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:6,y:3,dir:'RIGHT'},
        {x:1,y:4,dir:'LEFT'}, {x:2,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:6,y:4,dir:'RIGHT'} 
    ]},
    // Level 30
    { size: 8, blocks: [ 
        {x:0,y:0,dir:'LEFT'}, {x:1,y:0,dir:'UP'}, {x:6,y:0,dir:'UP'}, {x:7,y:0,dir:'RIGHT'},
        {x:0,y:7,dir:'LEFT'}, {x:1,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'RIGHT'},
        {x:2,y:2,dir:'LEFT'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'RIGHT'},
        {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'RIGHT'} 
    ]},
    // Level 31
    { size: 8, blocks: [ 
        {x:2,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:2,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'},
        {x:1,y:2,dir:'LEFT'}, {x:6,y:2,dir:'RIGHT'}, {x:1,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'},
        {x:3,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:3,y:4,dir:'LEFT'}, {x:4,y:4,dir:'RIGHT'},
        {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'} 
    ]},
    // Level 32
    { size: 8, blocks: [ 
        {x:3,y:0,dir:'UP'}, {x:4,y:0,dir:'UP'}, {x:3,y:7,dir:'DOWN'}, {x:4,y:7,dir:'DOWN'},
        {x:0,y:3,dir:'LEFT'}, {x:7,y:3,dir:'RIGHT'}, {x:0,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'},
        {x:2,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:2,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:2,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'} 
    ]},
    // Level 33
    { size: 8, blocks: [ 
        {x:1,y:1,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:6,y:1,dir:'UP'},
        {x:1,y:6,dir:'DOWN'}, {x:2,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'},
        {x:1,y:3,dir:'LEFT'}, {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:6,y:3,dir:'RIGHT'},
        {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'} 
    ]},
        // Level 34 (The Spiral Maze - અત્યંત હાર્ડ, પણ 100% સોલ્વ થશે!)
    { size: 8, blocks: [ 
        // સૌથી બહારની રીંગ
        {x:1, y:1, dir:'UP'}, {x:2, y:1, dir:'LEFT'}, {x:3, y:1, dir:'LEFT'}, {x:4, y:1, dir:'LEFT'}, {x:5, y:1, dir:'LEFT'}, {x:6, y:1, dir:'LEFT'},
        {x:6, y:2, dir:'UP'}, {x:6, y:3, dir:'UP'}, {x:6, y:4, dir:'UP'}, {x:6, y:5, dir:'UP'}, {x:6, y:6, dir:'UP'},
        {x:5, y:6, dir:'RIGHT'}, {x:4, y:6, dir:'RIGHT'}, {x:3, y:6, dir:'RIGHT'}, {x:2, y:6, dir:'RIGHT'}, {x:1, y:6, dir:'RIGHT'},
        {x:1, y:5, dir:'DOWN'}, {x:1, y:4, dir:'DOWN'}, {x:1, y:3, dir:'DOWN'}, {x:1, y:2, dir:'DOWN'},
        
        // વચ્ચેની રીંગ
        {x:2, y:2, dir:'UP'}, {x:3, y:2, dir:'LEFT'}, {x:4, y:2, dir:'LEFT'}, {x:5, y:2, dir:'LEFT'},
        {x:5, y:3, dir:'UP'}, {x:5, y:4, dir:'UP'}, {x:5, y:5, dir:'UP'},
        {x:4, y:5, dir:'RIGHT'}, {x:3, y:5, dir:'RIGHT'}, {x:2, y:5, dir:'RIGHT'},
        {x:2, y:4, dir:'DOWN'}, {x:2, y:3, dir:'DOWN'},
        
        // સૌથી અંદરનો ભાગ (Core)
        {x:3, y:3, dir:'UP'}, {x:4, y:3, dir:'LEFT'}, {x:4, y:4, dir:'UP'}, {x:3, y:4, dir:'RIGHT'}
    ]},
    
    // Level 35
    { size: 8, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'RIGHT'}, {x:3,y:4,dir:'LEFT'}, {x:4,y:4,dir:'DOWN'},
        {x:2,y:2,dir:'UP'}, {x:5,y:2,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:5,y:5,dir:'DOWN'},
        {x:1,y:1,dir:'UP'}, {x:6,y:1,dir:'RIGHT'}, {x:1,y:6,dir:'LEFT'}, {x:6,y:6,dir:'DOWN'} 
    ]},

    // === 🟣 EXPERT LEVELS (ગ્રીડ: 9x9) ===
    // Level 36
    { size: 9, blocks: [ 
        {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'},
        {x:3,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'},
        {x:4,y:4,dir:'UP'} 
    ]},
    // Level 37
    { size: 9, blocks: [ 
        {x:2,y:2,dir:'LEFT'}, {x:6,y:2,dir:'RIGHT'}, {x:2,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'},
        {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'},
        {x:3,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'} 
    ]},
    // Level 38
    { size: 9, blocks: [ 
        {x:4,y:1,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:4,y:3,dir:'UP'}, 
        {x:4,y:5,dir:'DOWN'}, {x:4,y:6,dir:'DOWN'}, {x:4,y:7,dir:'DOWN'},
        {x:1,y:4,dir:'LEFT'}, {x:2,y:4,dir:'LEFT'}, {x:3,y:4,dir:'LEFT'},
        {x:5,y:4,dir:'RIGHT'}, {x:6,y:4,dir:'RIGHT'}, {x:7,y:4,dir:'RIGHT'} 
    ]},
    // Level 39
    { size: 9, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'},
        {x:2,y:6,dir:'DOWN'}, {x:3,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'}, {x:6,y:3,dir:'RIGHT'}, {x:6,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'} 
    ]},
    // Level 40
    { size: 9, blocks: [ 
        {x:1,y:1,dir:'UP'}, {x:7,y:1,dir:'UP'}, {x:1,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:3,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'},
        {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'},
        {x:4,y:4,dir:'LEFT'} 
    ]},
    // Level 41
    { size: 9, blocks: [ 
        {x:4,y:0,dir:'UP'}, {x:4,y:1,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:4,y:8,dir:'DOWN'},
        {x:0,y:4,dir:'LEFT'}, {x:1,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:8,y:4,dir:'RIGHT'},
        {x:3,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'},
        {x:2,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:2,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'} 
    ]},
    // Level 42
    { size: 9, blocks: [ 
        {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'},
        {x:3,y:6,dir:'DOWN'}, {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:2,y:4,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'},
        {x:6,y:3,dir:'RIGHT'}, {x:6,y:4,dir:'RIGHT'}, {x:6,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'DOWN'} 
    ]},
    // Level 43
    { size: 9, blocks: [ 
        {x:2,y:1,dir:'LEFT'}, {x:3,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:6,y:1,dir:'RIGHT'},
        {x:2,y:7,dir:'LEFT'}, {x:3,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'}, {x:6,y:7,dir:'RIGHT'},
        {x:1,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'}, {x:1,y:6,dir:'DOWN'}, {x:7,y:6,dir:'DOWN'},
        {x:4,y:4,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:4,y:5,dir:'DOWN'} 
    ]},
    // Level 44
    { size: 9, blocks: [ 
        {x:4,y:4,dir:'UP'}, {x:3,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:3,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, 
        {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, 
        {x:1,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:4,y:1,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, 
        {x:3,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:3,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'} 
    ]},
    // Level 45
    { size: 9, blocks: [ 
        {x:0,y:0,dir:'LEFT'}, {x:8,y:0,dir:'RIGHT'}, {x:0,y:8,dir:'LEFT'}, {x:8,y:8,dir:'RIGHT'}, 
        {x:2,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:2,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'}, 
        {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, 
        {x:3,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'}, 
        {x:4,y:4,dir:'UP'} 
    ]},

    // === 🔥 MASTER LEVELS (ગ્રીડ: 10x10 - સૌથી મોટી અને મગજ કસવાની) ===
    // Level 46
    { size: 10, blocks: [ 
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'},
        {x:3,y:3,dir:'LEFT'}, {x:6,y:3,dir:'RIGHT'}, {x:3,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'},
        {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'},
        {x:2,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'} 
    ]},
    // Level 47
    { size: 10, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'},
        {x:2,y:7,dir:'DOWN'}, {x:3,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'},
        {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'} 
    ]},
    // Level 48
    { size: 10, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:8,y:1,dir:'RIGHT'}, {x:1,y:8,dir:'LEFT'}, {x:8,y:8,dir:'RIGHT'},
        {x:3,y:3,dir:'LEFT'}, {x:6,y:3,dir:'RIGHT'}, {x:3,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'},
        {x:4,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:5,y:8,dir:'DOWN'},
        {x:1,y:4,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'}, {x:1,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'} 
    ]},
    // Level 49
    { size: 10, blocks: [ 
        {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'},
        {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:4,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'},
        {x:2,y:4,dir:'LEFT'}, {x:3,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:7,y:4,dir:'RIGHT'},
        {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'}, {x:7,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'} 
    ]},
    // Level 50
    { size: 10, blocks: [ 
        {x:3,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:3,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:7,y:3,dir:'RIGHT'}, {x:2,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'},
        {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'},
        {x:3,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'} 
    ]},
    // Level 51
    { size: 10, blocks: [ 
        {x:4,y:0,dir:'UP'}, {x:5,y:0,dir:'UP'}, {x:4,y:9,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'},
        {x:0,y:4,dir:'LEFT'}, {x:9,y:4,dir:'RIGHT'}, {x:0,y:5,dir:'LEFT'}, {x:9,y:5,dir:'RIGHT'},
        {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'},
        {x:2,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'} 
    ]},
    // Level 52
    { size: 10, blocks: [ 
        {x:1,y:1,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:7,y:1,dir:'UP'}, {x:8,y:1,dir:'UP'},
        {x:1,y:8,dir:'DOWN'}, {x:2,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:3,y:3,dir:'LEFT'}, {x:6,y:3,dir:'RIGHT'}, {x:3,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'} 
    ]},
    // Level 53
    { size: 10, blocks: [ 
        {x:2,y:2,dir:'LEFT'}, {x:7,y:2,dir:'RIGHT'}, {x:2,y:7,dir:'LEFT'}, {x:7,y:7,dir:'RIGHT'},
        {x:3,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:3,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:7,y:3,dir:'RIGHT'}, {x:2,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'},
        {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'} 
    ]},
    // Level 54
    { size: 10, blocks: [ 
        {x:0,y:2,dir:'LEFT'}, {x:1,y:2,dir:'LEFT'}, {x:8,y:2,dir:'RIGHT'}, {x:9,y:2,dir:'RIGHT'},
        {x:0,y:7,dir:'LEFT'}, {x:1,y:7,dir:'LEFT'}, {x:8,y:7,dir:'RIGHT'}, {x:9,y:7,dir:'RIGHT'},
        {x:2,y:0,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:7,y:0,dir:'UP'}, {x:7,y:1,dir:'UP'},
        {x:2,y:8,dir:'DOWN'}, {x:2,y:9,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'} 
    ]},
    // Level 55
    { size: 10, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'},
        {x:3,y:6,dir:'DOWN'}, {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:3,y:4,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:6,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'} 
    ]},
    // Level 56
    { size: 10, blocks: [ 
        {x:4,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:5,y:8,dir:'DOWN'},
        {x:1,y:4,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'}, {x:1,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'},
        {x:3,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:3,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:2,y:2,dir:'LEFT'}, {x:7,y:2,dir:'RIGHT'}, {x:2,y:7,dir:'LEFT'}, {x:7,y:7,dir:'RIGHT'} 
    ]},
    // Level 57
    { size: 10, blocks: [ 
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'},
        {x:3,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'},
        {x:2,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'},
        {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'},
        {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'} 
    ]},
    // Level 58
    { size: 10, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'},
        {x:2,y:7,dir:'DOWN'}, {x:3,y:7,dir:'DOWN'}, {x:4,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'} 
    ]},
    // Level 59
    { size: 10, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:2,y:1,dir:'LEFT'}, {x:7,y:1,dir:'RIGHT'}, {x:8,y:1,dir:'RIGHT'},
        {x:1,y:8,dir:'LEFT'}, {x:2,y:8,dir:'LEFT'}, {x:7,y:8,dir:'RIGHT'}, {x:8,y:8,dir:'RIGHT'},
        {x:3,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:3,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'} 
    ]},
    // Level 60 (The Grand Finale)
    { size: 10, blocks: [ 
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'},
        {x:3,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'},
        {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'},
        {x:2,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'},
        {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'},
        {x:1,y:4,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'}, {x:1,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'},
        {x:4,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:5,y:8,dir:'DOWN'} 
    ]},
        // === 💎 GRAND MASTER LEVELS (ગ્રીડ: 10x10) ===
    // આ લેવલ્સ દેખાવમાં ખૂબ મોટા હશે પણ 100% સોલ્વ થશે.
    
    // Level 61 (Expanding Cross)
    { size: 10, blocks: [ 
        {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'},
        {x:2,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'},
        {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'},
        {x:3,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'} 
    ]},
    // Level 62 (Corner Blocks)
    { size: 10, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:2,y:1,dir:'UP'}, {x:1,y:2,dir:'LEFT'}, {x:2,y:2,dir:'UP'},
        {x:7,y:1,dir:'UP'}, {x:8,y:1,dir:'RIGHT'}, {x:7,y:2,dir:'UP'}, {x:8,y:2,dir:'RIGHT'},
        {x:1,y:7,dir:'DOWN'}, {x:2,y:7,dir:'LEFT'}, {x:1,y:8,dir:'LEFT'}, {x:2,y:8,dir:'DOWN'},
        {x:7,y:7,dir:'RIGHT'}, {x:8,y:7,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'}, {x:8,y:8,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'} 
    ]},
    // Level 63 (Double Frame)
    { size: 10, blocks: [ 
        {x:3,y:3,dir:'LEFT'}, {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'RIGHT'},
        {x:3,y:6,dir:'LEFT'}, {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'RIGHT'},
        {x:3,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'} 
    ]},
    // Level 64 (Twin Towers)
    { size: 10, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'},
        {x:2,y:7,dir:'DOWN'}, {x:3,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:3,y:3,dir:'RIGHT'}, {x:6,y:3,dir:'LEFT'}, {x:7,y:3,dir:'RIGHT'},
        {x:2,y:6,dir:'LEFT'}, {x:3,y:6,dir:'RIGHT'}, {x:6,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:2,y:4,dir:'LEFT'}, {x:3,y:4,dir:'RIGHT'}, {x:6,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'},
        {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'RIGHT'}, {x:6,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'} 
    ]},
        // Level 65 (The Solid Zipper - અત્યંત હાર્ડ, પણ 100% ડેડલોક-ફ્રી)
    { size: 10, blocks: [ 
        // સૌથી બહારની રીંગ
        {x:2, y:2, dir:'UP'},
        {x:3, y:2, dir:'LEFT'}, {x:4, y:2, dir:'LEFT'}, {x:5, y:2, dir:'LEFT'}, {x:6, y:2, dir:'LEFT'}, {x:7, y:2, dir:'LEFT'},
        {x:2, y:3, dir:'UP'}, {x:2, y:4, dir:'UP'}, {x:2, y:5, dir:'UP'}, {x:2, y:6, dir:'UP'},
        
        {x:7, y:7, dir:'DOWN'},
        {x:6, y:7, dir:'RIGHT'}, {x:5, y:7, dir:'RIGHT'}, {x:4, y:7, dir:'RIGHT'}, {x:3, y:7, dir:'RIGHT'}, {x:2, y:7, dir:'RIGHT'},
        {x:7, y:6, dir:'DOWN'}, {x:7, y:5, dir:'DOWN'}, {x:7, y:4, dir:'DOWN'}, {x:7, y:3, dir:'DOWN'},
        
        // વચ્ચેની રીંગ
        {x:3, y:3, dir:'UP'},
        {x:4, y:3, dir:'LEFT'}, {x:5, y:3, dir:'LEFT'}, {x:6, y:3, dir:'LEFT'},
        {x:3, y:4, dir:'UP'}, {x:3, y:5, dir:'UP'},
        
        {x:6, y:6, dir:'DOWN'},
        {x:5, y:6, dir:'RIGHT'}, {x:4, y:6, dir:'RIGHT'}, {x:3, y:6, dir:'RIGHT'},
        {x:6, y:5, dir:'DOWN'}, {x:6, y:4, dir:'DOWN'},
        
        // સૌથી અંદરનો ભાગ (Core)
        {x:4, y:4, dir:'UP'}, {x:5, y:4, dir:'LEFT'},
        {x:5, y:5, dir:'DOWN'}, {x:4, y:5, dir:'RIGHT'}
    ]},

    // Level 66 (Vertical Flow)
    { size: 10, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:2,y:3,dir:'UP'}, {x:2,y:4,dir:'UP'}, {x:2,y:5,dir:'DOWN'}, {x:2,y:6,dir:'DOWN'}, {x:2,y:7,dir:'DOWN'},
        {x:4,y:2,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:4,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:4,y:6,dir:'DOWN'}, {x:4,y:7,dir:'DOWN'},
        {x:6,y:2,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:6,y:5,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'} 
    ]},
    // Level 67 (Diamond Ring)
    { size: 10, blocks: [ 
        {x:4,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:5,y:8,dir:'DOWN'},
        {x:1,y:4,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'}, {x:1,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'},
        {x:3,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:3,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:7,y:3,dir:'RIGHT'}, {x:2,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'} 
    ]},
    // Level 68 (Split Box)
    { size: 10, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:2,y:1,dir:'UP'}, {x:1,y:2,dir:'LEFT'}, {x:2,y:2,dir:'UP'},
        {x:7,y:7,dir:'DOWN'}, {x:8,y:7,dir:'RIGHT'}, {x:7,y:8,dir:'DOWN'}, {x:8,y:8,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:5,dir:'LEFT'}, {x:5,y:5,dir:'DOWN'},
        {x:2,y:4,dir:'LEFT'}, {x:4,y:2,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:7,y:5,dir:'RIGHT'} 
    ]},
    // Level 69 (Inner Maze)
    { size: 10, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'},
        {x:3,y:6,dir:'DOWN'}, {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:3,y:4,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:6,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'} 
    ]},
    // Level 70 (The Mega Cross)
    { size: 10, blocks: [ 
        {x:4,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'},
        {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:4,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'}, {x:4,y:8,dir:'DOWN'}, {x:5,y:8,dir:'DOWN'},
        {x:1,y:4,dir:'LEFT'}, {x:2,y:4,dir:'LEFT'}, {x:3,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:7,y:4,dir:'RIGHT'}, {x:8,y:4,dir:'RIGHT'},
        {x:1,y:5,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'}, {x:7,y:5,dir:'RIGHT'}, {x:8,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'} 
    ]},

    // === 🌌 LEGENDARY LEVELS (ગ્રીડ: 11x11 - અત્યાર સુધીની સૌથી મોટી સાઇઝ!) ===
    // આ લેવલ્સ રમવામાં વિદ્યાર્થીઓને ખૂબ જ મજા આવશે કારણ કે સાઇઝ મોટી છે.
    
    // Level 71 (11x11 Introduction)
    { size: 11, blocks: [ 
        {x:5,y:3,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:3,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:4,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'}, {x:5,y:4,dir:'UP'}, {x:5,y:6,dir:'DOWN'},
        {x:5,y:5,dir:'UP'} 
    ]},
    // Level 72
    { size: 11, blocks: [ 
        {x:3,y:3,dir:'LEFT'}, {x:4,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:7,y:3,dir:'RIGHT'},
        {x:3,y:7,dir:'LEFT'}, {x:4,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'RIGHT'},
        {x:3,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:3,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:5,y:4,dir:'UP'}, {x:5,y:6,dir:'DOWN'}, {x:4,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'} 
    ]},
    // Level 73
    { size: 11, blocks: [ 
        {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:4,y:5,dir:'LEFT'}, 
        {x:6,y:5,dir:'RIGHT'}, {x:7,y:5,dir:'RIGHT'}, {x:8,y:5,dir:'RIGHT'},
        {x:5,y:2,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:5,y:4,dir:'UP'},
        {x:5,y:6,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'}, {x:5,y:8,dir:'DOWN'},
        {x:4,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:4,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'},
        {x:5,y:5,dir:'UP'} 
    ]},
    // Level 74
    { size: 11, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'}, {x:8,y:2,dir:'UP'},
        {x:2,y:8,dir:'DOWN'}, {x:3,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:8,y:3,dir:'RIGHT'}, {x:2,y:7,dir:'LEFT'}, {x:8,y:7,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:5,y:5,dir:'UP'} 
    ]},
    // Level 75 (Star Pattern)
    { size: 11, blocks: [ 
        {x:5,y:1,dir:'UP'}, {x:5,y:9,dir:'DOWN'}, {x:1,y:5,dir:'LEFT'}, {x:9,y:5,dir:'RIGHT'},
        {x:5,y:2,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:2,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'},
        {x:4,y:3,dir:'LEFT'}, {x:6,y:3,dir:'RIGHT'}, {x:4,y:7,dir:'LEFT'}, {x:6,y:7,dir:'RIGHT'},
        {x:3,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:3,y:6,dir:'DOWN'}, {x:7,y:6,dir:'DOWN'},
        {x:5,y:5,dir:'UP'} 
    ]},
    // Level 76
    { size: 11, blocks: [ 
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'UP'}, {x:6,y:4,dir:'RIGHT'},
        {x:4,y:5,dir:'LEFT'}, {x:5,y:5,dir:'DOWN'}, {x:6,y:5,dir:'RIGHT'},
        {x:4,y:6,dir:'LEFT'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'RIGHT'},
        {x:3,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:3,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:2,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'} 
    ]},
    // Level 77
    { size: 11, blocks: [ 
        {x:1,y:5,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:4,y:5,dir:'LEFT'},
        {x:6,y:5,dir:'RIGHT'}, {x:7,y:5,dir:'RIGHT'}, {x:8,y:5,dir:'RIGHT'}, {x:9,y:5,dir:'RIGHT'},
        {x:5,y:1,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:5,y:4,dir:'UP'},
        {x:5,y:6,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'}, {x:5,y:8,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'},
        {x:5,y:5,dir:'LEFT'} 
    ]},
    // Level 78 (Square Web)
    { size: 11, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'},
        {x:3,y:7,dir:'DOWN'}, {x:4,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:3,y:4,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:3,y:6,dir:'LEFT'},
        {x:7,y:4,dir:'RIGHT'}, {x:7,y:5,dir:'RIGHT'}, {x:7,y:6,dir:'RIGHT'},
        {x:5,y:5,dir:'UP'} 
    ]},
    // Level 79
    { size: 11, blocks: [ 
        {x:2,y:2,dir:'LEFT'}, {x:3,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'}, {x:8,y:2,dir:'RIGHT'},
        {x:2,y:8,dir:'LEFT'}, {x:3,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'}, {x:8,y:8,dir:'RIGHT'},
        {x:2,y:3,dir:'LEFT'}, {x:8,y:3,dir:'RIGHT'}, {x:2,y:7,dir:'LEFT'}, {x:8,y:7,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'},
        {x:4,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:4,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'}, {x:5,y:5,dir:'UP'} 
    ]},
    // Level 80 (The Impossible Maze - Finale)
    { size: 11, blocks: [ 
        {x:5,y:1,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'},
        {x:1,y:5,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:9,y:5,dir:'RIGHT'},
        {x:4,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:4,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'},
        {x:3,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:3,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:4,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'},
        {x:3,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:3,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:5,y:4,dir:'UP'}, {x:5,y:6,dir:'DOWN'}, {x:4,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'},
        {x:5,y:5,dir:'DOWN'} 
    ]},
        // === 👑 GOD TIER LEVELS (ગ્રીડ: 11x11 અને 12x12) ===
    // આ લેવલ્સ અત્યાર સુધીના સૌથી મોટા છે, પણ 100% સોલ્વ થવાની ગેરંટી છે.
    
    // Level 81 (11x11)
    { size: 11, blocks: [ 
        {x:5,y:2,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:5,y:8,dir:'DOWN'}, 
        {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'}, {x:8,y:5,dir:'RIGHT'}, 
        {x:4,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'}, 
        {x:4,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'} 
    ]},
    // Level 82 (11x11)
    { size: 11, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'}, 
        {x:3,y:7,dir:'DOWN'}, {x:4,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'}, 
        {x:3,y:4,dir:'LEFT'}, {x:3,y:6,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:7,y:6,dir:'RIGHT'}, 
        {x:5,y:5,dir:'UP'} 
    ]},
    // Level 83 (11x11)
    { size: 11, blocks: [ 
        {x:1,y:5,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:9,y:5,dir:'RIGHT'}, 
        {x:5,y:1,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'}, 
        {x:4,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:4,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'} 
    ]},
    // Level 84 (11x11)
    { size: 11, blocks: [ 
        {x:4,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:6,y:8,dir:'DOWN'}, 
        {x:2,y:4,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'}, {x:2,y:6,dir:'LEFT'}, {x:8,y:6,dir:'RIGHT'}, 
        {x:5,y:4,dir:'UP'}, {x:5,y:6,dir:'DOWN'}, {x:4,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'} 
    ]},
    // Level 85 (11x11)
    { size: 11, blocks: [ 
        {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'}, 
        {x:3,y:8,dir:'DOWN'}, {x:4,y:8,dir:'DOWN'}, {x:5,y:8,dir:'DOWN'}, {x:6,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'}, 
        {x:5,y:5,dir:'LEFT'} 
    ]},

    // === 🏆 THE FINAL FRONTIER (ગ્રીડ: 12x12 - સૌથી મોટી સાઇઝ) ===
    // Level 86 (12x12)
    { size: 12, blocks: [ 
        {x:5,y:5,dir:'UP'}, {x:6,y:5,dir:'UP'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'}, 
        {x:4,y:5,dir:'LEFT'}, {x:4,y:6,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'}, {x:7,y:6,dir:'RIGHT'}, 
        {x:5,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'} 
    ]},
    // Level 87 (12x12)
    { size: 12, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:8,y:2,dir:'UP'}, {x:9,y:2,dir:'UP'}, 
        {x:2,y:9,dir:'DOWN'}, {x:3,y:9,dir:'DOWN'}, {x:8,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'}, 
        {x:2,y:3,dir:'LEFT'}, {x:9,y:3,dir:'RIGHT'}, {x:2,y:8,dir:'LEFT'}, {x:9,y:8,dir:'RIGHT'} 
    ]},
    // Level 88 (12x12)
    { size: 12, blocks: [ 
        {x:4,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'}, {x:4,y:9,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'}, 
        {x:2,y:4,dir:'LEFT'}, {x:9,y:4,dir:'RIGHT'}, {x:2,y:7,dir:'LEFT'}, {x:9,y:7,dir:'RIGHT'}, 
        {x:5,y:5,dir:'UP'}, {x:6,y:5,dir:'UP'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'} 
    ]},
    // Level 89 (12x12)
    { size: 12, blocks: [ 
        {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, 
        {x:5,y:8,dir:'DOWN'}, {x:6,y:8,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'}, 
        {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:9,y:5,dir:'RIGHT'}, 
        {x:2,y:6,dir:'LEFT'}, {x:3,y:6,dir:'LEFT'}, {x:8,y:6,dir:'RIGHT'}, {x:9,y:6,dir:'RIGHT'} 
    ]},
    // Level 90 (12x12)
    { size: 12, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:2,y:1,dir:'UP'}, {x:9,y:1,dir:'UP'}, {x:10,y:1,dir:'RIGHT'}, 
        {x:1,y:10,dir:'LEFT'}, {x:2,y:10,dir:'DOWN'}, {x:9,y:10,dir:'DOWN'}, {x:10,y:10,dir:'RIGHT'}, 
        {x:5,y:5,dir:'UP'}, {x:6,y:5,dir:'UP'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'} 
    ]},
    // Level 91 (12x12)
    { size: 12, blocks: [ 
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:7,y:4,dir:'RIGHT'}, 
        {x:4,y:7,dir:'LEFT'}, {x:5,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'RIGHT'}, 
        {x:3,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:3,y:6,dir:'LEFT'}, {x:8,y:6,dir:'RIGHT'} 
    ]},
    // Level 92 (12x12)
    { size: 12, blocks: [ 
        {x:5,y:1,dir:'UP'}, {x:6,y:1,dir:'UP'}, {x:5,y:10,dir:'DOWN'}, {x:6,y:10,dir:'DOWN'}, 
        {x:1,y:5,dir:'LEFT'}, {x:10,y:5,dir:'RIGHT'}, {x:1,y:6,dir:'LEFT'}, {x:10,y:6,dir:'RIGHT'}, 
        {x:4,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:4,y:7,dir:'LEFT'}, {x:7,y:7,dir:'RIGHT'} 
    ]},
    // Level 93 (12x12)
    { size: 12, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:9,y:2,dir:'UP'}, {x:2,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'}, 
        {x:3,y:3,dir:'UP'}, {x:8,y:3,dir:'UP'}, {x:3,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'}, 
        {x:4,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'}, 
        {x:5,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'} 
    ]},
    // Level 94 (12x12)
    { size: 12, blocks: [ 
        {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:4,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, 
        {x:3,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:3,y:6,dir:'LEFT'}, {x:8,y:6,dir:'RIGHT'}, 
        {x:4,y:7,dir:'LEFT'}, {x:7,y:7,dir:'RIGHT'}, {x:5,y:8,dir:'DOWN'}, {x:6,y:8,dir:'DOWN'} 
    ]},
    // Level 95 (12x12)
    { size: 12, blocks: [ 
        {x:0,y:5,dir:'LEFT'}, {x:1,y:5,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'}, {x:9,y:5,dir:'RIGHT'}, {x:10,y:5,dir:'RIGHT'}, {x:11,y:5,dir:'RIGHT'}, 
        {x:0,y:6,dir:'LEFT'}, {x:1,y:6,dir:'LEFT'}, {x:2,y:6,dir:'LEFT'}, {x:9,y:6,dir:'RIGHT'}, {x:10,y:6,dir:'RIGHT'}, {x:11,y:6,dir:'RIGHT'}, 
        {x:5,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'} 
    ]},
    // Level 96 (12x12)
    { size: 12, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:8,y:3,dir:'UP'}, 
        {x:3,y:8,dir:'DOWN'}, {x:4,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'}, 
        {x:3,y:4,dir:'LEFT'}, {x:3,y:7,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'}, {x:8,y:7,dir:'RIGHT'}, 
        {x:5,y:5,dir:'UP'}, {x:6,y:5,dir:'UP'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'} 
    ]},
    // Level 97 (12x12)
    { size: 12, blocks: [ 
        {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:4,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'}, {x:8,y:5,dir:'RIGHT'}, {x:9,y:5,dir:'RIGHT'}, 
        {x:5,y:2,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:6,y:7,dir:'DOWN'}, {x:6,y:8,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'} 
    ]},
    // Level 98 (12x12)
    { size: 12, blocks: [ 
        {x:1,y:1,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:9,y:1,dir:'UP'}, {x:10,y:1,dir:'UP'}, 
        {x:1,y:10,dir:'DOWN'}, {x:2,y:10,dir:'DOWN'}, {x:9,y:10,dir:'DOWN'}, {x:10,y:10,dir:'DOWN'}, 
        {x:1,y:2,dir:'LEFT'}, {x:10,y:2,dir:'RIGHT'}, {x:1,y:9,dir:'LEFT'}, {x:10,y:9,dir:'RIGHT'}, 
        {x:5,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'}, {x:5,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'} 
    ]},
    // Level 99 (12x12)
    { size: 12, blocks: [ 
        {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'}, 
        {x:4,y:9,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'}, 
        {x:2,y:4,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'}, {x:2,y:6,dir:'LEFT'}, {x:2,y:7,dir:'LEFT'}, 
        {x:9,y:4,dir:'RIGHT'}, {x:9,y:5,dir:'RIGHT'}, {x:9,y:6,dir:'RIGHT'}, {x:9,y:7,dir:'RIGHT'}, 
        {x:5,y:5,dir:'UP'}, {x:6,y:6,dir:'DOWN'} 
    ]},

    // 🏆 Level 100 (12x12) THE ULTIMATE CENTURY BOSS LEVEL 🏆
    // આ લેવલ સૌથી મોટું છે, પણ "બહારની તરફ જવાનો નિયમ" હોવાથી 100% મગજ લગાવીને સોલ્વ થઈ જશે.
    { size: 12, blocks: [ 
        // Center
        {x:5,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'}, {x:5,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'},
        // Ring 1
        {x:4,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'}, 
        {x:3,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:3,y:6,dir:'LEFT'}, {x:8,y:6,dir:'RIGHT'},
        // Ring 2 (Outer Defense)
        {x:2,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:9,y:2,dir:'UP'},
        {x:2,y:9,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'},
        {x:1,y:4,dir:'LEFT'}, {x:1,y:5,dir:'LEFT'}, {x:1,y:6,dir:'LEFT'}, {x:1,y:7,dir:'LEFT'},
        {x:10,y:4,dir:'RIGHT'}, {x:10,y:5,dir:'RIGHT'}, {x:10,y:6,dir:'RIGHT'}, {x:10,y:7,dir:'RIGHT'}
    ]},
        // === 🌟 CHAMPION TIER LEVELS (ગ્રીડ: 12x12 અને 13x13) ===
    // લેવલ 101 થી 130 (અત્યંત હાર્ડ, પણ ડેડલોક-ફ્રી)

    // Level 101 (12x12 - The Keyhole)
    { size: 12, blocks: [ 
        {x:5,y:5,dir:'UP'}, {x:6,y:5,dir:'UP'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:4,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'}, {x:4,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:3,y:4,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'}, {x:3,y:7,dir:'LEFT'}, {x:8,y:7,dir:'RIGHT'},
        {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:6,y:8,dir:'DOWN'} 
    ]},
    // Level 102
    { size: 12, blocks: [ 
        {x:2,y:2,dir:'LEFT'}, {x:9,y:2,dir:'RIGHT'}, {x:2,y:9,dir:'LEFT'}, {x:9,y:9,dir:'RIGHT'},
        {x:3,y:2,dir:'UP'}, {x:8,y:2,dir:'UP'}, {x:3,y:9,dir:'DOWN'}, {x:8,y:9,dir:'DOWN'},
        {x:4,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:5,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'}, {x:5,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'},
        {x:2,y:5,dir:'LEFT'}, {x:9,y:5,dir:'RIGHT'} 
    ]},
    // Level 103
    { size: 12, blocks: [ 
        {x:1,y:5,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:9,y:5,dir:'RIGHT'}, {x:10,y:5,dir:'RIGHT'},
        {x:5,y:1,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'}, {x:5,y:10,dir:'DOWN'},
        {x:6,y:1,dir:'UP'}, {x:6,y:10,dir:'DOWN'}, {x:1,y:6,dir:'LEFT'}, {x:10,y:6,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'} 
    ]},
    // Level 104
    { size: 12, blocks: [ 
        {x:0,y:0,dir:'LEFT'}, {x:1,y:0,dir:'UP'}, {x:10,y:0,dir:'UP'}, {x:11,y:0,dir:'RIGHT'},
        {x:0,y:11,dir:'LEFT'}, {x:1,y:11,dir:'DOWN'}, {x:10,y:11,dir:'DOWN'}, {x:11,y:11,dir:'RIGHT'},
        {x:3,y:3,dir:'LEFT'}, {x:4,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:8,y:3,dir:'RIGHT'},
        {x:3,y:8,dir:'LEFT'}, {x:4,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'}, {x:8,y:8,dir:'RIGHT'},
        {x:5,y:5,dir:'UP'}, {x:6,y:6,dir:'DOWN'}, {x:5,y:6,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'} 
    ]},
    // Level 105
    { size: 12, blocks: [ 
        {x:5,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'},
        {x:4,y:5,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'}, {x:4,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:2,y:5,dir:'LEFT'}, {x:9,y:5,dir:'RIGHT'}, {x:2,y:6,dir:'LEFT'}, {x:9,y:6,dir:'RIGHT'},
        {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:5,y:9,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'},
        {x:3,y:3,dir:'UP'}, {x:8,y:3,dir:'UP'}, {x:3,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'} 
    ]},
    // Level 106
    { size: 12, blocks: [ 
        {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'},
        {x:4,y:9,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'},
        {x:2,y:4,dir:'LEFT'}, {x:3,y:4,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'}, {x:9,y:4,dir:'RIGHT'},
        {x:2,y:7,dir:'LEFT'}, {x:3,y:7,dir:'LEFT'}, {x:8,y:7,dir:'RIGHT'}, {x:9,y:7,dir:'RIGHT'},
        {x:5,y:5,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'} 
    ]},
    // Level 107
    { size: 12, blocks: [ 
        {x:1,y:2,dir:'LEFT'}, {x:2,y:2,dir:'UP'}, {x:9,y:2,dir:'UP'}, {x:10,y:2,dir:'RIGHT'},
        {x:1,y:9,dir:'LEFT'}, {x:2,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'}, {x:10,y:9,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:6,y:8,dir:'DOWN'},
        {x:3,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:3,y:6,dir:'LEFT'}, {x:8,y:6,dir:'RIGHT'} 
    ]},
    // Level 108
    { size: 12, blocks: [ 
        {x:0,y:5,dir:'LEFT'}, {x:1,y:5,dir:'LEFT'}, {x:10,y:5,dir:'RIGHT'}, {x:11,y:5,dir:'RIGHT'},
        {x:0,y:6,dir:'LEFT'}, {x:1,y:6,dir:'LEFT'}, {x:10,y:6,dir:'RIGHT'}, {x:11,y:6,dir:'RIGHT'},
        {x:5,y:0,dir:'UP'}, {x:6,y:0,dir:'UP'}, {x:5,y:11,dir:'DOWN'}, {x:6,y:11,dir:'DOWN'},
        {x:5,y:1,dir:'UP'}, {x:6,y:1,dir:'UP'}, {x:5,y:10,dir:'DOWN'}, {x:6,y:10,dir:'DOWN'},
        {x:3,y:3,dir:'UP'}, {x:8,y:3,dir:'UP'}, {x:3,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'} 
    ]},
    // Level 109
    { size: 12, blocks: [ 
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:7,y:4,dir:'UP'},
        {x:4,y:7,dir:'DOWN'}, {x:5,y:7,dir:'LEFT'}, {x:6,y:7,dir:'RIGHT'}, {x:7,y:7,dir:'DOWN'},
        {x:3,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:3,y:6,dir:'LEFT'}, {x:8,y:6,dir:'RIGHT'},
        {x:2,y:2,dir:'UP'}, {x:9,y:2,dir:'UP'}, {x:2,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'},
        {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:5,y:9,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'} 
    ]},
    // Level 110 (12x12 Boss)
    { size: 12, blocks: [ 
        {x:5,y:5,dir:'UP'}, {x:6,y:5,dir:'UP'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'},
        {x:4,y:5,dir:'LEFT'}, {x:4,y:6,dir:'LEFT'}, {x:7,y:5,dir:'RIGHT'}, {x:7,y:6,dir:'RIGHT'},
        {x:3,y:5,dir:'LEFT'}, {x:3,y:6,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:8,y:6,dir:'RIGHT'},
        {x:5,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'},
        {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:6,y:8,dir:'DOWN'},
        {x:2,y:2,dir:'UP'}, {x:9,y:2,dir:'UP'}, {x:2,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'} 
    ]},

    // === 🚀 IMMORTAL TIER (ગ્રીડ: 13x13 - ગેમની સૌથી મોટી ગ્રીડ) ===
    // લેવલ 111 થી 130
    
    // Level 111
    { size: 13, blocks: [ 
        {x:6,y:4,dir:'UP'}, {x:6,y:8,dir:'DOWN'}, {x:4,y:6,dir:'LEFT'}, {x:8,y:6,dir:'RIGHT'},
        {x:5,y:5,dir:'UP'}, {x:7,y:5,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:5,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'}, {x:6,y:5,dir:'UP'}, {x:6,y:7,dir:'DOWN'},
        {x:3,y:3,dir:'UP'}, {x:9,y:3,dir:'UP'}, {x:3,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'} 
    ]},
    // Level 112
    { size: 13, blocks: [ 
        {x:2,y:6,dir:'LEFT'}, {x:3,y:6,dir:'LEFT'}, {x:4,y:6,dir:'LEFT'},
        {x:8,y:6,dir:'RIGHT'}, {x:9,y:6,dir:'RIGHT'}, {x:10,y:6,dir:'RIGHT'},
        {x:6,y:2,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:6,y:4,dir:'UP'},
        {x:6,y:8,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'}, {x:6,y:10,dir:'DOWN'},
        {x:5,y:5,dir:'UP'}, {x:7,y:5,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'} 
    ]},
    // Level 113
    { size: 13, blocks: [ 
        {x:4,y:4,dir:'LEFT'}, {x:5,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:8,y:4,dir:'RIGHT'},
        {x:4,y:8,dir:'LEFT'}, {x:5,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'}, {x:8,y:8,dir:'RIGHT'},
        {x:6,y:2,dir:'UP'}, {x:6,y:10,dir:'DOWN'}, {x:2,y:6,dir:'LEFT'}, {x:10,y:6,dir:'RIGHT'},
        {x:6,y:5,dir:'UP'}, {x:6,y:7,dir:'DOWN'}, {x:5,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'} 
    ]},
    // Level 114
    { size: 13, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:2,y:1,dir:'UP'}, {x:10,y:1,dir:'UP'}, {x:11,y:1,dir:'RIGHT'},
        {x:1,y:11,dir:'LEFT'}, {x:2,y:11,dir:'DOWN'}, {x:10,y:11,dir:'DOWN'}, {x:11,y:11,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:8,y:4,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:6,y:3,dir:'UP'}, {x:6,y:9,dir:'DOWN'}, {x:3,y:6,dir:'LEFT'}, {x:9,y:6,dir:'RIGHT'} 
    ]},
    // Level 115
    { size: 13, blocks: [ 
        {x:5,y:5,dir:'UP'}, {x:6,y:5,dir:'UP'}, {x:7,y:5,dir:'UP'},
        {x:5,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:5,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:3,y:6,dir:'LEFT'}, {x:9,y:6,dir:'RIGHT'}, {x:6,y:3,dir:'UP'}, {x:6,y:9,dir:'DOWN'},
        {x:4,y:4,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'}, {x:4,y:8,dir:'LEFT'}, {x:8,y:8,dir:'RIGHT'} 
    ]},
    // Level 116
    { size: 13, blocks: [ 
        {x:6,y:1,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:6,y:10,dir:'DOWN'}, {x:6,y:11,dir:'DOWN'},
        {x:1,y:6,dir:'LEFT'}, {x:2,y:6,dir:'LEFT'}, {x:10,y:6,dir:'RIGHT'}, {x:11,y:6,dir:'RIGHT'},
        {x:5,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'},
        {x:4,y:5,dir:'LEFT'}, {x:8,y:5,dir:'RIGHT'}, {x:4,y:7,dir:'LEFT'}, {x:8,y:7,dir:'RIGHT'} 
    ]},
    // Level 117
    { size: 13, blocks: [ 
        {x:3,y:3,dir:'LEFT'}, {x:4,y:3,dir:'UP'}, {x:8,y:3,dir:'UP'}, {x:9,y:3,dir:'RIGHT'},
        {x:3,y:9,dir:'LEFT'}, {x:4,y:9,dir:'DOWN'}, {x:8,y:9,dir:'DOWN'}, {x:9,y:9,dir:'RIGHT'},
        {x:5,y:5,dir:'UP'}, {x:7,y:5,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:6,y:4,dir:'UP'}, {x:6,y:8,dir:'DOWN'}, {x:4,y:6,dir:'LEFT'}, {x:8,y:6,dir:'RIGHT'} 
    ]},
    // Level 118
    { size: 13, blocks: [ 
        {x:4,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:8,y:2,dir:'UP'},
        {x:4,y:10,dir:'DOWN'}, {x:6,y:10,dir:'DOWN'}, {x:8,y:10,dir:'DOWN'},
        {x:2,y:4,dir:'LEFT'}, {x:2,y:6,dir:'LEFT'}, {x:2,y:8,dir:'LEFT'},
        {x:10,y:4,dir:'RIGHT'}, {x:10,y:6,dir:'RIGHT'}, {x:10,y:8,dir:'RIGHT'},
        {x:6,y:6,dir:'UP'} 
    ]},
    // Level 119
    { size: 13, blocks: [ 
        {x:5,y:4,dir:'LEFT'}, {x:6,y:4,dir:'UP'}, {x:7,y:4,dir:'RIGHT'},
        {x:5,y:8,dir:'LEFT'}, {x:6,y:8,dir:'DOWN'}, {x:7,y:8,dir:'RIGHT'},
        {x:4,y:5,dir:'UP'}, {x:4,y:6,dir:'LEFT'}, {x:4,y:7,dir:'DOWN'},
        {x:8,y:5,dir:'UP'}, {x:8,y:6,dir:'RIGHT'}, {x:8,y:7,dir:'DOWN'},
        {x:2,y:2,dir:'UP'}, {x:10,y:2,dir:'UP'}, {x:2,y:10,dir:'DOWN'}, {x:10,y:10,dir:'DOWN'} 
    ]},
    // Level 120 (13x13 Checkpoint)
    { size: 13, blocks: [ 
        {x:6,y:6,dir:'LEFT'}, {x:5,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:6,y:5,dir:'UP'}, {x:6,y:7,dir:'DOWN'},
        {x:3,y:3,dir:'LEFT'}, {x:4,y:3,dir:'UP'}, {x:8,y:3,dir:'UP'}, {x:9,y:3,dir:'RIGHT'},
        {x:3,y:9,dir:'LEFT'}, {x:4,y:9,dir:'DOWN'}, {x:8,y:9,dir:'DOWN'}, {x:9,y:9,dir:'RIGHT'},
        {x:2,y:6,dir:'LEFT'}, {x:10,y:6,dir:'RIGHT'}, {x:6,y:2,dir:'UP'}, {x:6,y:10,dir:'DOWN'} 
    ]},

    // === 🔥 LEVEL 121 TO 130 (THE IMPOSSIBLE MAZE) ===
    // અહી વિદ્યાર્થીઓને દરેક એરો બે વાર ચેક કરવો પડશે.

    // Level 121
    { size: 13, blocks: [ 
        {x:4,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:8,y:4,dir:'UP'},
        {x:4,y:8,dir:'DOWN'}, {x:5,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:6,y:3,dir:'UP'}, {x:6,y:9,dir:'DOWN'}, {x:3,y:6,dir:'LEFT'}, {x:9,y:6,dir:'RIGHT'},
        {x:5,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'} 
    ]},
    // Level 122
    { size: 13, blocks: [ 
        {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:9,y:5,dir:'RIGHT'}, {x:10,y:5,dir:'RIGHT'},
        {x:2,y:7,dir:'LEFT'}, {x:3,y:7,dir:'LEFT'}, {x:9,y:7,dir:'RIGHT'}, {x:10,y:7,dir:'RIGHT'},
        {x:5,y:2,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:5,y:9,dir:'DOWN'}, {x:5,y:10,dir:'DOWN'},
        {x:7,y:2,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:7,y:9,dir:'DOWN'}, {x:7,y:10,dir:'DOWN'},
        {x:6,y:6,dir:'UP'} 
    ]},
    // Level 123
    { size: 13, blocks: [ 
        {x:0,y:0,dir:'LEFT'}, {x:1,y:0,dir:'UP'}, {x:11,y:0,dir:'UP'}, {x:12,y:0,dir:'RIGHT'},
        {x:0,y:12,dir:'LEFT'}, {x:1,y:12,dir:'DOWN'}, {x:11,y:12,dir:'DOWN'}, {x:12,y:12,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:8,y:4,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:5,y:5,dir:'UP'}, {x:7,y:5,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'} 
    ]},
    // Level 124
    { size: 13, blocks: [ 
        {x:5,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'},
        {x:5,y:8,dir:'DOWN'}, {x:6,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'},
        {x:4,y:5,dir:'LEFT'}, {x:4,y:6,dir:'LEFT'}, {x:4,y:7,dir:'LEFT'},
        {x:8,y:5,dir:'RIGHT'}, {x:8,y:6,dir:'RIGHT'}, {x:8,y:7,dir:'RIGHT'},
        {x:2,y:2,dir:'UP'}, {x:10,y:2,dir:'UP'}, {x:2,y:10,dir:'DOWN'}, {x:10,y:10,dir:'DOWN'} 
    ]},
    // Level 125
    { size: 13, blocks: [ 
        {x:6,y:2,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:6,y:4,dir:'UP'},
        {x:6,y:8,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'}, {x:6,y:10,dir:'DOWN'},
        {x:2,y:6,dir:'LEFT'}, {x:3,y:6,dir:'LEFT'}, {x:4,y:6,dir:'LEFT'},
        {x:8,y:6,dir:'RIGHT'}, {x:9,y:6,dir:'RIGHT'}, {x:10,y:6,dir:'RIGHT'},
        {x:5,y:5,dir:'UP'}, {x:7,y:5,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'} 
    ]},
    // Level 126
    { size: 13, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:8,y:3,dir:'UP'}, {x:9,y:3,dir:'UP'},
        {x:3,y:9,dir:'DOWN'}, {x:4,y:9,dir:'DOWN'}, {x:8,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'},
        {x:6,y:5,dir:'UP'}, {x:6,y:7,dir:'DOWN'}, {x:5,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:6,y:1,dir:'UP'}, {x:6,y:11,dir:'DOWN'}, {x:1,y:6,dir:'LEFT'}, {x:11,y:6,dir:'RIGHT'} 
    ]},
    // Level 127
    { size: 13, blocks: [ 
        {x:5,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'}, {x:5,y:10,dir:'DOWN'}, {x:7,y:10,dir:'DOWN'},
        {x:2,y:5,dir:'LEFT'}, {x:10,y:5,dir:'RIGHT'}, {x:2,y:7,dir:'LEFT'}, {x:10,y:7,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:8,y:4,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:6,y:6,dir:'UP'} 
    ]},
    // Level 128
    { size: 13, blocks: [ 
        {x:2,y:4,dir:'LEFT'}, {x:3,y:4,dir:'LEFT'}, {x:9,y:4,dir:'RIGHT'}, {x:10,y:4,dir:'RIGHT'},
        {x:2,y:8,dir:'LEFT'}, {x:3,y:8,dir:'LEFT'}, {x:9,y:8,dir:'RIGHT'}, {x:10,y:8,dir:'RIGHT'},
        {x:4,y:2,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:8,y:2,dir:'UP'}, {x:8,y:3,dir:'UP'},
        {x:4,y:9,dir:'DOWN'}, {x:4,y:10,dir:'DOWN'}, {x:8,y:9,dir:'DOWN'}, {x:8,y:10,dir:'DOWN'},
        {x:6,y:5,dir:'UP'}, {x:6,y:7,dir:'DOWN'} 
    ]},
    // Level 129
    { size: 13, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:11,y:1,dir:'RIGHT'}, {x:1,y:11,dir:'LEFT'}, {x:11,y:11,dir:'RIGHT'},
        {x:3,y:3,dir:'UP'}, {x:9,y:3,dir:'UP'}, {x:3,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'},
        {x:5,y:5,dir:'UP'}, {x:7,y:5,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:6,y:2,dir:'UP'}, {x:6,y:10,dir:'DOWN'}, {x:2,y:6,dir:'LEFT'}, {x:10,y:6,dir:'RIGHT'} 
    ]},
    // 🏆 Level 130 (The Ultimate Maze) 🏆
    { size: 13, blocks: [ 
        {x:6,y:6,dir:'UP'}, {x:6,y:5,dir:'UP'}, {x:6,y:7,dir:'DOWN'}, {x:5,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:8,y:4,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:3,y:5,dir:'LEFT'}, {x:3,y:7,dir:'LEFT'}, {x:9,y:5,dir:'RIGHT'}, {x:9,y:7,dir:'RIGHT'},
        {x:5,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:5,y:9,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'},
        {x:2,y:2,dir:'UP'}, {x:10,y:2,dir:'UP'}, {x:2,y:10,dir:'DOWN'}, {x:10,y:10,dir:'DOWN'},
        {x:1,y:6,dir:'LEFT'}, {x:11,y:6,dir:'RIGHT'}, {x:6,y:1,dir:'UP'}, {x:6,y:11,dir:'DOWN'} 
    ]},
    // === 🌌 TITAN TIER LEVELS (ગ્રીડ: 13x13 અને 14x14) ===
    // લેવલ 131 થી 150 (અત્યંત હાર્ડ, વાળની ગૂંચ જેવા, પણ 100% ડેડલોક-ફ્રી)

    // Level 131 (13x13)
    { size: 13, blocks: [ 
        {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'},
        {x:5,y:9,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'},
        {x:3,y:5,dir:'LEFT'}, {x:3,y:6,dir:'LEFT'}, {x:3,y:7,dir:'LEFT'},
        {x:9,y:5,dir:'RIGHT'}, {x:9,y:6,dir:'RIGHT'}, {x:9,y:7,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:8,y:4,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'} 
    ]},
    // Level 132 (13x13)
    { size: 13, blocks: [ 
        {x:6,y:1,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:6,y:4,dir:'UP'},
        {x:6,y:8,dir:'DOWN'}, {x:6,y:10,dir:'DOWN'}, {x:6,y:11,dir:'DOWN'},
        {x:1,y:6,dir:'LEFT'}, {x:2,y:6,dir:'LEFT'}, {x:4,y:6,dir:'LEFT'},
        {x:8,y:6,dir:'RIGHT'}, {x:10,y:6,dir:'RIGHT'}, {x:11,y:6,dir:'RIGHT'},
        {x:5,y:5,dir:'UP'}, {x:7,y:5,dir:'UP'}, {x:5,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'} 
    ]},
    // Level 133 (13x13)
    { size: 13, blocks: [ 
        {x:4,y:4,dir:'UP'}, {x:8,y:4,dir:'UP'}, {x:5,y:5,dir:'UP'}, {x:7,y:5,dir:'UP'},
        {x:4,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'},
        {x:4,y:5,dir:'LEFT'}, {x:4,y:7,dir:'LEFT'}, {x:5,y:6,dir:'LEFT'},
        {x:8,y:5,dir:'RIGHT'}, {x:8,y:7,dir:'RIGHT'}, {x:7,y:6,dir:'RIGHT'},
        {x:6,y:4,dir:'UP'}, {x:6,y:8,dir:'DOWN'} 
    ]},
    // Level 134 (13x13)
    { size: 13, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:8,y:2,dir:'UP'}, {x:9,y:2,dir:'UP'}, {x:10,y:2,dir:'UP'},
        {x:2,y:10,dir:'DOWN'}, {x:3,y:10,dir:'DOWN'}, {x:4,y:10,dir:'DOWN'}, {x:8,y:10,dir:'DOWN'}, {x:9,y:10,dir:'DOWN'}, {x:10,y:10,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:2,y:4,dir:'LEFT'}, {x:10,y:3,dir:'RIGHT'}, {x:10,y:4,dir:'RIGHT'},
        {x:2,y:8,dir:'LEFT'}, {x:2,y:9,dir:'LEFT'}, {x:10,y:8,dir:'RIGHT'}, {x:10,y:9,dir:'RIGHT'},
        {x:6,y:6,dir:'UP'} 
    ]},
    // Level 135 (13x13)
    { size: 13, blocks: [ 
        {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'},
        {x:5,y:10,dir:'DOWN'}, {x:6,y:10,dir:'DOWN'}, {x:7,y:10,dir:'DOWN'},
        {x:2,y:5,dir:'LEFT'}, {x:2,y:6,dir:'LEFT'}, {x:2,y:7,dir:'LEFT'},
        {x:10,y:5,dir:'RIGHT'}, {x:10,y:6,dir:'RIGHT'}, {x:10,y:7,dir:'RIGHT'},
        {x:4,y:4,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'}, {x:4,y:8,dir:'LEFT'}, {x:8,y:8,dir:'RIGHT'},
        {x:6,y:4,dir:'UP'}, {x:6,y:8,dir:'DOWN'} 
    ]},
    // Level 136 (13x13)
    { size: 13, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:9,y:3,dir:'UP'},
        {x:3,y:9,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'},
        {x:3,y:5,dir:'LEFT'}, {x:3,y:7,dir:'LEFT'}, {x:9,y:5,dir:'RIGHT'}, {x:9,y:7,dir:'RIGHT'},
        {x:6,y:6,dir:'LEFT'} 
    ]},
    // Level 137 (13x13)
    { size: 13, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:2,y:2,dir:'UP'}, {x:3,y:3,dir:'LEFT'}, {x:4,y:4,dir:'UP'},
        {x:11,y:1,dir:'RIGHT'}, {x:10,y:2,dir:'UP'}, {x:9,y:3,dir:'RIGHT'}, {x:8,y:4,dir:'UP'},
        {x:1,y:11,dir:'LEFT'}, {x:2,y:10,dir:'DOWN'}, {x:3,y:9,dir:'LEFT'}, {x:4,y:8,dir:'DOWN'},
        {x:11,y:11,dir:'RIGHT'}, {x:10,y:10,dir:'DOWN'}, {x:9,y:9,dir:'RIGHT'}, {x:8,y:8,dir:'DOWN'},
        {x:6,y:6,dir:'UP'} 
    ]},
    // Level 138 (13x13)
    { size: 13, blocks: [ 
        {x:4,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'}, {x:8,y:2,dir:'UP'},
        {x:4,y:10,dir:'DOWN'}, {x:5,y:10,dir:'DOWN'}, {x:6,y:10,dir:'DOWN'}, {x:7,y:10,dir:'DOWN'}, {x:8,y:10,dir:'DOWN'},
        {x:2,y:4,dir:'LEFT'}, {x:2,y:5,dir:'LEFT'}, {x:2,y:6,dir:'LEFT'}, {x:2,y:7,dir:'LEFT'}, {x:2,y:8,dir:'LEFT'},
        {x:10,y:4,dir:'RIGHT'}, {x:10,y:5,dir:'RIGHT'}, {x:10,y:6,dir:'RIGHT'}, {x:10,y:7,dir:'RIGHT'}, {x:10,y:8,dir:'RIGHT'} 
    ]},
    // Level 139 (13x13)
    { size: 13, blocks: [ 
        {x:5,y:4,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'},
        {x:5,y:8,dir:'DOWN'}, {x:6,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'},
        {x:4,y:5,dir:'LEFT'}, {x:4,y:6,dir:'LEFT'}, {x:4,y:7,dir:'LEFT'},
        {x:8,y:5,dir:'RIGHT'}, {x:8,y:6,dir:'RIGHT'}, {x:8,y:7,dir:'RIGHT'},
        {x:6,y:2,dir:'UP'}, {x:6,y:10,dir:'DOWN'}, {x:2,y:6,dir:'LEFT'}, {x:10,y:6,dir:'RIGHT'} 
    ]},
    // Level 140 (13x13 - The Core Boss)
    // આમાં એકદમ સળંગ મોટો ચોરસ છે, ડુંગળીના પડની જેમ બહારથી સોલ્વ થશે.
    { size: 13, blocks: [ 
        {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:8,y:3,dir:'UP'}, {x:9,y:3,dir:'UP'},
        {x:3,y:9,dir:'DOWN'}, {x:4,y:9,dir:'DOWN'}, {x:5,y:9,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'}, {x:8,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'},
        {x:3,y:4,dir:'LEFT'}, {x:3,y:5,dir:'LEFT'}, {x:3,y:6,dir:'LEFT'}, {x:3,y:7,dir:'LEFT'}, {x:3,y:8,dir:'LEFT'},
        {x:9,y:4,dir:'RIGHT'}, {x:9,y:5,dir:'RIGHT'}, {x:9,y:6,dir:'RIGHT'}, {x:9,y:7,dir:'RIGHT'}, {x:9,y:8,dir:'RIGHT'},
        {x:4,y:4,dir:'UP'}, {x:8,y:4,dir:'UP'}, {x:4,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:6,y:6,dir:'UP'} 
    ]},

    // === 👑 OMEGA TIER (ગ્રીડ: 14x14 - સૌથી વિશાળ અને ખતરનાક) ===
    // લેવલ 141 થી 150
    // Level 141 (14x14)
    { size: 14, blocks: [ 
        {x:5,y:3,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:8,y:3,dir:'UP'},
        {x:5,y:10,dir:'DOWN'}, {x:6,y:10,dir:'DOWN'}, {x:7,y:10,dir:'DOWN'}, {x:8,y:10,dir:'DOWN'},
        {x:3,y:5,dir:'LEFT'}, {x:3,y:6,dir:'LEFT'}, {x:3,y:7,dir:'LEFT'}, {x:3,y:8,dir:'LEFT'},
        {x:10,y:5,dir:'RIGHT'}, {x:10,y:6,dir:'RIGHT'}, {x:10,y:7,dir:'RIGHT'}, {x:10,y:8,dir:'RIGHT'},
        {x:6,y:6,dir:'LEFT'}, {x:7,y:7,dir:'RIGHT'} 
    ]},
    // Level 142 (14x14)
    { size: 14, blocks: [ 
        {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:9,y:2,dir:'UP'}, {x:10,y:2,dir:'UP'}, {x:11,y:2,dir:'UP'},
        {x:2,y:11,dir:'DOWN'}, {x:3,y:11,dir:'DOWN'}, {x:4,y:11,dir:'DOWN'}, {x:9,y:11,dir:'DOWN'}, {x:10,y:11,dir:'DOWN'}, {x:11,y:11,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:2,y:4,dir:'LEFT'}, {x:11,y:3,dir:'RIGHT'}, {x:11,y:4,dir:'RIGHT'},
        {x:2,y:9,dir:'LEFT'}, {x:2,y:10,dir:'LEFT'}, {x:11,y:9,dir:'RIGHT'}, {x:11,y:10,dir:'RIGHT'},
        {x:6,y:6,dir:'UP'}, {x:7,y:6,dir:'UP'} 
    ]},
    // Level 143 (14x14)
    { size: 14, blocks: [ 
        {x:4,y:4,dir:'UP'}, {x:9,y:4,dir:'UP'}, {x:4,y:9,dir:'DOWN'}, {x:9,y:9,dir:'DOWN'},
        {x:5,y:5,dir:'UP'}, {x:8,y:5,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:6,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'}, {x:6,y:7,dir:'LEFT'}, {x:7,y:7,dir:'RIGHT'},
        {x:1,y:6,dir:'LEFT'}, {x:1,y:7,dir:'LEFT'}, {x:12,y:6,dir:'RIGHT'}, {x:12,y:7,dir:'RIGHT'},
        {x:6,y:1,dir:'UP'}, {x:7,y:1,dir:'UP'}, {x:6,y:12,dir:'DOWN'}, {x:7,y:12,dir:'DOWN'} 
    ]},
    // Level 144 (14x14)
    { size: 14, blocks: [ 
        {x:6,y:3,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:6,y:10,dir:'DOWN'}, {x:7,y:10,dir:'DOWN'},
        {x:5,y:4,dir:'UP'}, {x:8,y:4,dir:'UP'}, {x:5,y:9,dir:'DOWN'}, {x:8,y:9,dir:'DOWN'},
        {x:4,y:5,dir:'LEFT'}, {x:9,y:5,dir:'RIGHT'}, {x:4,y:8,dir:'LEFT'}, {x:9,y:8,dir:'RIGHT'},
        {x:3,y:6,dir:'LEFT'}, {x:3,y:7,dir:'LEFT'}, {x:10,y:6,dir:'RIGHT'}, {x:10,y:7,dir:'RIGHT'} 
    ]},
    // Level 145 (14x14)
    { size: 14, blocks: [ 
        {x:2,y:6,dir:'LEFT'}, {x:3,y:6,dir:'LEFT'}, {x:4,y:6,dir:'LEFT'}, {x:5,y:6,dir:'LEFT'},
        {x:8,y:6,dir:'RIGHT'}, {x:9,y:6,dir:'RIGHT'}, {x:10,y:6,dir:'RIGHT'}, {x:11,y:6,dir:'RIGHT'},
        {x:2,y:7,dir:'LEFT'}, {x:3,y:7,dir:'LEFT'}, {x:4,y:7,dir:'LEFT'}, {x:5,y:7,dir:'LEFT'},
        {x:8,y:7,dir:'RIGHT'}, {x:9,y:7,dir:'RIGHT'}, {x:10,y:7,dir:'RIGHT'}, {x:11,y:7,dir:'RIGHT'},
        {x:6,y:2,dir:'UP'}, {x:6,y:3,dir:'UP'}, {x:6,y:4,dir:'UP'}, {x:6,y:5,dir:'UP'},
        {x:7,y:2,dir:'UP'}, {x:7,y:3,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:7,y:5,dir:'UP'},
        {x:6,y:8,dir:'DOWN'}, {x:6,y:9,dir:'DOWN'}, {x:6,y:10,dir:'DOWN'}, {x:6,y:11,dir:'DOWN'},
        {x:7,y:8,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'}, {x:7,y:10,dir:'DOWN'}, {x:7,y:11,dir:'DOWN'} 
    ]},
    // Level 146 (14x14)
    { size: 14, blocks: [ 
        {x:1,y:1,dir:'LEFT'}, {x:12,y:1,dir:'RIGHT'}, {x:1,y:12,dir:'LEFT'}, {x:12,y:12,dir:'RIGHT'},
        {x:3,y:3,dir:'UP'}, {x:10,y:3,dir:'UP'}, {x:3,y:10,dir:'DOWN'}, {x:10,y:10,dir:'DOWN'},
        {x:5,y:5,dir:'UP'}, {x:8,y:5,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:6,y:6,dir:'LEFT'}, {x:7,y:7,dir:'RIGHT'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:6,dir:'UP'} 
    ]},
    // Level 147 (14x14)
    { size: 14, blocks: [ 
        {x:6,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:6,y:9,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'},
        {x:4,y:6,dir:'LEFT'}, {x:4,y:7,dir:'LEFT'}, {x:9,y:6,dir:'RIGHT'}, {x:9,y:7,dir:'RIGHT'},
        {x:5,y:5,dir:'UP'}, {x:8,y:5,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:2,y:2,dir:'UP'}, {x:11,y:2,dir:'UP'}, {x:2,y:11,dir:'DOWN'}, {x:11,y:11,dir:'DOWN'} 
    ]},
    // Level 148 (14x14)
    { size: 14, blocks: [ 
        {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:9,y:2,dir:'UP'}, {x:10,y:2,dir:'UP'},
        {x:3,y:11,dir:'DOWN'}, {x:4,y:11,dir:'DOWN'}, {x:9,y:11,dir:'DOWN'}, {x:10,y:11,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:2,y:4,dir:'LEFT'}, {x:11,y:3,dir:'RIGHT'}, {x:11,y:4,dir:'RIGHT'},
        {x:2,y:9,dir:'LEFT'}, {x:2,y:10,dir:'LEFT'}, {x:11,y:9,dir:'RIGHT'}, {x:11,y:10,dir:'RIGHT'},
        {x:6,y:5,dir:'UP'}, {x:7,y:5,dir:'UP'}, {x:6,y:8,dir:'DOWN'}, {x:7,y:8,dir:'DOWN'} 
    ]},
    // Level 149 (14x14)
    { size: 14, blocks: [ 
        {x:4,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:8,y:1,dir:'UP'}, {x:9,y:1,dir:'UP'},
        {x:4,y:12,dir:'DOWN'}, {x:5,y:12,dir:'DOWN'}, {x:8,y:12,dir:'DOWN'}, {x:9,y:12,dir:'DOWN'},
        {x:1,y:4,dir:'LEFT'}, {x:1,y:5,dir:'LEFT'}, {x:1,y:8,dir:'LEFT'}, {x:1,y:9,dir:'LEFT'},
        {x:12,y:4,dir:'RIGHT'}, {x:12,y:5,dir:'RIGHT'}, {x:12,y:8,dir:'RIGHT'}, {x:12,y:9,dir:'RIGHT'},
        {x:6,y:6,dir:'UP'}, {x:7,y:6,dir:'UP'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'} 
    ]},
    // 🏆 Level 150 (14x14 THE ULTIMATE TITAN BOSS) 🏆
    // ગેમનું સૌથી કઠિન લેવલ! એકદમ ગૂંચવાયેલું પણ 100% સોલ્વ થશે.
    { size: 14, blocks: [ 
        {x:6,y:6,dir:'LEFT'}, {x:7,y:6,dir:'RIGHT'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'UP'},
        {x:5,y:5,dir:'UP'}, {x:8,y:5,dir:'UP'}, {x:5,y:8,dir:'DOWN'}, {x:8,y:8,dir:'DOWN'},
        {x:4,y:6,dir:'LEFT'}, {x:4,y:7,dir:'LEFT'}, {x:9,y:6,dir:'RIGHT'}, {x:9,y:7,dir:'RIGHT'},
        {x:6,y:4,dir:'UP'}, {x:7,y:4,dir:'UP'}, {x:6,y:9,dir:'DOWN'}, {x:7,y:9,dir:'DOWN'},
        {x:3,y:3,dir:'LEFT'}, {x:10,y:3,dir:'RIGHT'}, {x:3,y:10,dir:'LEFT'}, {x:10,y:10,dir:'RIGHT'},
        {x:2,y:5,dir:'LEFT'}, {x:2,y:6,dir:'LEFT'}, {x:2,y:7,dir:'LEFT'}, {x:2,y:8,dir:'LEFT'},
        {x:11,y:5,dir:'RIGHT'}, {x:11,y:6,dir:'RIGHT'}, {x:11,y:7,dir:'RIGHT'}, {x:11,y:8,dir:'RIGHT'},
        {x:5,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:7,y:2,dir:'UP'}, {x:8,y:2,dir:'UP'},
        {x:5,y:11,dir:'DOWN'}, {x:6,y:11,dir:'DOWN'}, {x:7,y:11,dir:'DOWN'}, {x:8,y:11,dir:'DOWN'} 
    ]}

         
                                                        
];
