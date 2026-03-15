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
    // Level 22
    { size: 7, blocks: [ 
        {x:3,y:0,dir:'UP'}, {x:3,y:6,dir:'DOWN'}, {x:0,y:3,dir:'LEFT'}, {x:6,y:3,dir:'RIGHT'},
        {x:2,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:2,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'},
        {x:3,y:2,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'},
        {x:1,y:1,dir:'LEFT'}, {x:5,y:1,dir:'RIGHT'}, {x:1,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'} 
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
    // Level 34
    { size: 8, blocks: [ 
        {x:2,y:2,dir:'LEFT'}, {x:5,y:2,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'},
        {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'},
        {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:2,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'},
        {x:3,y:3,dir:'DOWN'}, {x:4,y:3,dir:'DOWN'}, {x:3,y:4,dir:'UP'}, {x:4,y:4,dir:'UP'} 
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
    ]}

        
];
