// Arrow Escape Game Database - Levels 1 to 15
// આ ફાઈલ ગેમમાં ઓટોમેટિક લોડ થશે.

const njArrowLevels = [
    // === 🟢 BEGINNER LEVELS (ગ્રીડ: 4x4) ===
    // Level 1
    { size: 4, blocks: [ 
        {x:1, y:1, dir:'UP'}, {x:2, y:1, dir:'DOWN'}, {x:1, y:2, dir:'LEFT'} 
    ]},
    // Level 2
    { size: 4, blocks: [ 
        {x:1, y:1, dir:'UP'}, {x:2, y:1, dir:'DOWN'}, {x:2, y:2, dir:'LEFT'}, {x:1, y:2, dir:'UP'} 
    ]},
    // Level 3
    { size: 4, blocks: [ 
        {x:0, y:1, dir:'RIGHT'}, {x:2, y:1, dir:'DOWN'}, {x:3, y:2, dir:'UP'}, 
        {x:1, y:3, dir:'LEFT'}, {x:2, y:2, dir:'RIGHT'}, {x:1, y:2, dir:'UP'} 
    ]},

    // === 🟡 EASY LEVELS (ગ્રીડ: 5x5) ===
    // Level 4
    { size: 5, blocks: [ 
        {x:2, y:2, dir:'UP'}, {x:2, y:3, dir:'RIGHT'}, {x:3, y:3, dir:'UP'}, 
        {x:3, y:1, dir:'LEFT'}, {x:1, y:1, dir:'DOWN'}, {x:1, y:2, dir:'RIGHT'}, {x:4, y:2, dir:'RIGHT'} 
    ]},
    // Level 5
    { size: 5, blocks: [ 
        {x:2, y:2, dir:'LEFT'}, {x:1, y:2, dir:'UP'}, {x:3, y:2, dir:'RIGHT'}, 
        {x:2, y:1, dir:'UP'}, {x:2, y:3, dir:'DOWN'}, {x:1, y:1, dir:'LEFT'}, 
        {x:3, y:1, dir:'RIGHT'}, {x:1, y:3, dir:'LEFT'}, {x:3, y:3, dir:'RIGHT'} 
    ]},
    // Level 6
    { size: 5, blocks: [ 
        {x:2, y:1, dir:'UP'}, {x:2, y:3, dir:'DOWN'}, {x:1, y:2, dir:'LEFT'}, 
        {x:3, y:2, dir:'RIGHT'}, {x:2, y:2, dir:'UP'}, {x:0, y:0, dir:'UP'}, 
        {x:4, y:4, dir:'DOWN'}, {x:0, y:4, dir:'LEFT'}, {x:4, y:0, dir:'RIGHT'} 
    ]},

    // === 🟠 MEDIUM LEVELS (ગ્રીડ: 6x6) ===
    // Level 7
    { size: 6, blocks: [ 
        {x:2, y:2, dir:'UP'}, {x:3, y:2, dir:'RIGHT'}, {x:2, y:3, dir:'LEFT'}, {x:3, y:3, dir:'DOWN'}, 
        {x:1, y:2, dir:'UP'}, {x:4, y:2, dir:'UP'}, {x:2, y:1, dir:'LEFT'}, {x:3, y:1, dir:'RIGHT'}, 
        {x:2, y:4, dir:'LEFT'}, {x:3, y:4, dir:'RIGHT'} 
    ]},
    // Level 8
    { size: 6, blocks: [ 
        {x:1, y:1, dir:'DOWN'}, {x:2, y:1, dir:'DOWN'}, {x:3, y:1, dir:'DOWN'}, {x:4, y:1, dir:'DOWN'}, 
        {x:1, y:4, dir:'UP'}, {x:2, y:4, dir:'UP'}, {x:3, y:4, dir:'UP'}, {x:4, y:4, dir:'UP'}, 
        {x:1, y:2, dir:'LEFT'}, {x:4, y:2, dir:'RIGHT'}, {x:2, y:2, dir:'RIGHT'}, {x:3, y:2, dir:'LEFT'} 
    ]},
    // Level 9
    { size: 6, blocks: [ 
        {x:0, y:2, dir:'RIGHT'}, {x:1, y:2, dir:'UP'}, {x:2, y:2, dir:'DOWN'}, {x:3, y:2, dir:'UP'}, 
        {x:4, y:2, dir:'DOWN'}, {x:5, y:2, dir:'LEFT'}, {x:2, y:0, dir:'DOWN'}, {x:3, y:5, dir:'UP'},
        {x:2, y:3, dir:'RIGHT'}, {x:3, y:3, dir:'LEFT'}, {x:1, y:4, dir:'UP'}, {x:4, y:4, dir:'UP'}
    ]},

    // === 🔴 HARD LEVELS (ગ્રીડ: 7x7) ===
    // Level 10
    { size: 7, blocks: [ 
        {x:3, y:3, dir:'UP'}, {x:2, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'}, {x:3, y:2, dir:'UP'}, 
        {x:3, y:4, dir:'DOWN'}, {x:2, y:2, dir:'LEFT'}, {x:4, y:2, dir:'RIGHT'}, {x:2, y:4, dir:'LEFT'}, 
        {x:4, y:4, dir:'RIGHT'}, {x:1, y:3, dir:'UP'}, {x:5, y:3, dir:'DOWN'}, {x:3, y:1, dir:'LEFT'},
        {x:3, y:5, dir:'RIGHT'}, {x:1, y:1, dir:'UP'}, {x:5, y:5, dir:'DOWN'}
    ]},
    // Level 11
    { size: 7, blocks: [ 
        {x:1, y:1, dir:'RIGHT'}, {x:2, y:1, dir:'RIGHT'}, {x:3, y:1, dir:'DOWN'}, {x:5, y:1, dir:'LEFT'},
        {x:1, y:3, dir:'UP'}, {x:2, y:3, dir:'DOWN'}, {x:3, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'},
        {x:5, y:3, dir:'UP'}, {x:1, y:5, dir:'RIGHT'}, {x:3, y:5, dir:'UP'}, {x:4, y:5, dir:'LEFT'},
        {x:5, y:5, dir:'LEFT'}, {x:3, y:2, dir:'RIGHT'}, {x:3, y:4, dir:'LEFT'}, {x:0, y:3, dir:'UP'}
    ]},
    // Level 12
    { size: 7, blocks: [ 
        {x:2, y:1, dir:'DOWN'}, {x:4, y:1, dir:'DOWN'}, {x:1, y:2, dir:'RIGHT'}, {x:3, y:2, dir:'UP'}, 
        {x:5, y:2, dir:'LEFT'}, {x:2, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'}, {x:1, y:4, dir:'RIGHT'}, 
        {x:3, y:4, dir:'DOWN'}, {x:5, y:4, dir:'LEFT'}, {x:2, y:5, dir:'UP'}, {x:4, y:5, dir:'UP'},
        {x:3, y:1, dir:'LEFT'}, {x:3, y:5, dir:'RIGHT'}, {x:0, y:0, dir:'DOWN'}, {x:6, y:6, dir:'UP'}
    ]},

    // === 🔥 EXPERT LEVELS (ગ્રીડ: 8x8) ===
    // Level 13
    { size: 8, blocks: [ 
        {x:3, y:3, dir:'UP'}, {x:4, y:3, dir:'RIGHT'}, {x:3, y:4, dir:'LEFT'}, {x:4, y:4, dir:'DOWN'},
        {x:2, y:3, dir:'UP'}, {x:5, y:3, dir:'UP'}, {x:2, y:4, dir:'DOWN'}, {x:5, y:4, dir:'DOWN'},
        {x:3, y:2, dir:'LEFT'}, {x:4, y:2, dir:'RIGHT'}, {x:3, y:5, dir:'LEFT'}, {x:4, y:5, dir:'RIGHT'},
        {x:1, y:3, dir:'UP'}, {x:6, y:3, dir:'UP'}, {x:1, y:4, dir:'DOWN'}, {x:6, y:4, dir:'DOWN'},
        {x:3, y:1, dir:'LEFT'}, {x:4, y:1, dir:'RIGHT'}, {x:3, y:6, dir:'LEFT'}, {x:4, y:6, dir:'RIGHT'}
    ]},
    // Level 14
    { size: 8, blocks: [ 
        {x:2, y:2, dir:'RIGHT'}, {x:3, y:2, dir:'DOWN'}, {x:4, y:2, dir:'DOWN'}, {x:5, y:2, dir:'LEFT'},
        {x:2, y:3, dir:'RIGHT'}, {x:3, y:3, dir:'UP'}, {x:4, y:3, dir:'UP'}, {x:5, y:3, dir:'LEFT'},
        {x:2, y:4, dir:'RIGHT'}, {x:3, y:4, dir:'DOWN'}, {x:4, y:4, dir:'DOWN'}, {x:5, y:4, dir:'LEFT'},
        {x:2, y:5, dir:'RIGHT'}, {x:3, y:5, dir:'UP'}, {x:4, y:5, dir:'UP'}, {x:5, y:5, dir:'LEFT'},
        {x:1, y:2, dir:'UP'}, {x:6, y:2, dir:'UP'}, {x:1, y:5, dir:'DOWN'}, {x:6, y:5, dir:'DOWN'},
        {x:3, y:1, dir:'LEFT'}, {x:4, y:6, dir:'RIGHT'}
    ]},
    // Level 15 (Final Boss for now)
    { size: 8, blocks: [ 
        {x:3, y:3, dir:'UP'}, {x:4, y:3, dir:'RIGHT'}, {x:3, y:4, dir:'LEFT'}, {x:4, y:4, dir:'DOWN'},
        {x:2, y:2, dir:'RIGHT'}, {x:5, y:2, dir:'DOWN'}, {x:2, y:5, dir:'UP'}, {x:5, y:5, dir:'LEFT'},
        {x:4, y:2, dir:'LEFT'}, {x:5, y:4, dir:'UP'}, {x:2, y:3, dir:'DOWN'}, {x:3, y:5, dir:'RIGHT'},
        {x:1, y:1, dir:'RIGHT'}, {x:6, y:1, dir:'DOWN'}, {x:1, y:6, dir:'UP'}, {x:6, y:6, dir:'LEFT'},
        {x:3, y:1, dir:'UP'}, {x:4, y:1, dir:'UP'}, {x:3, y:6, dir:'DOWN'}, {x:4, y:6, dir:'DOWN'},
        {x:1, y:3, dir:'LEFT'}, {x:1, y:4, dir:'LEFT'}, {x:6, y:3, dir:'RIGHT'}, {x:6, y:4, dir:'RIGHT'},
        {x:0, y:3, dir:'DOWN'}, {x:7, y:4, dir:'UP'}
    ]},
      // === ⚡ ADVANCED LEVELS (ગ્રીડ: 6x6 અને 7x7) ===
    // Level 16
    { size: 6, blocks: [ 
        {x:1, y:1, dir:'UP'}, {x:4, y:1, dir:'UP'}, {x:1, y:4, dir:'DOWN'}, {x:4, y:4, dir:'DOWN'},
        {x:2, y:2, dir:'LEFT'}, {x:3, y:2, dir:'RIGHT'}, {x:2, y:3, dir:'LEFT'}, {x:3, y:3, dir:'RIGHT'},
        {x:1, y:2, dir:'LEFT'}, {x:4, y:2, dir:'RIGHT'}, {x:1, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'}
    ]},
    // Level 17
    { size: 6, blocks: [ 
        {x:2, y:1, dir:'UP'}, {x:3, y:1, dir:'UP'}, {x:2, y:4, dir:'DOWN'}, {x:3, y:4, dir:'DOWN'},
        {x:1, y:2, dir:'LEFT'}, {x:4, y:2, dir:'RIGHT'}, {x:1, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'},
        {x:2, y:2, dir:'UP'}, {x:3, y:2, dir:'UP'}, {x:2, y:3, dir:'DOWN'}, {x:3, y:3, dir:'DOWN'}
    ]},
    // Level 18
    { size: 6, blocks: [ 
        {x:0, y:0, dir:'UP'}, {x:5, y:0, dir:'UP'}, {x:0, y:5, dir:'DOWN'}, {x:5, y:5, dir:'DOWN'},
        {x:2, y:2, dir:'LEFT'}, {x:3, y:2, dir:'RIGHT'}, {x:2, y:3, dir:'LEFT'}, {x:3, y:3, dir:'RIGHT'},
        {x:2, y:1, dir:'UP'}, {x:3, y:1, dir:'UP'}, {x:2, y:4, dir:'DOWN'}, {x:3, y:4, dir:'DOWN'},
        {x:1, y:2, dir:'LEFT'}, {x:4, y:2, dir:'RIGHT'}
    ]},
    // Level 19
    { size: 6, blocks: [ 
        {x:1, y:1, dir:'LEFT'}, {x:2, y:1, dir:'UP'}, {x:3, y:1, dir:'UP'}, {x:4, y:1, dir:'RIGHT'},
        {x:1, y:4, dir:'LEFT'}, {x:2, y:4, dir:'DOWN'}, {x:3, y:4, dir:'DOWN'}, {x:4, y:4, dir:'RIGHT'},
        {x:2, y:2, dir:'LEFT'}, {x:3, y:2, dir:'RIGHT'}, {x:2, y:3, dir:'LEFT'}, {x:3, y:3, dir:'RIGHT'},
        {x:0, y:2, dir:'LEFT'}, {x:5, y:3, dir:'RIGHT'}
    ]},
    // Level 20 (Mini Boss)
    { size: 6, blocks: [ 
        {x:1, y:1, dir:'UP'}, {x:2, y:1, dir:'DOWN'}, {x:3, y:1, dir:'DOWN'}, {x:4, y:1, dir:'UP'},
        {x:1, y:4, dir:'DOWN'}, {x:2, y:4, dir:'UP'}, {x:3, y:4, dir:'UP'}, {x:4, y:4, dir:'DOWN'},
        {x:1, y:2, dir:'LEFT'}, {x:2, y:2, dir:'RIGHT'}, {x:3, y:2, dir:'LEFT'}, {x:4, y:2, dir:'RIGHT'},
        {x:1, y:3, dir:'LEFT'}, {x:2, y:3, dir:'RIGHT'}, {x:3, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'}
    ]},

    // === 🧠 BRAIN TEASER LEVELS (ગ્રીડ: 7x7) ===
    // Level 21
    { size: 7, blocks: [ 
        {x:3, y:1, dir:'UP'}, {x:3, y:5, dir:'DOWN'}, {x:1, y:3, dir:'LEFT'}, {x:5, y:3, dir:'RIGHT'},
        {x:2, y:2, dir:'UP'}, {x:4, y:2, dir:'UP'}, {x:2, y:4, dir:'DOWN'}, {x:4, y:4, dir:'DOWN'},
        {x:3, y:3, dir:'RIGHT'}, {x:2, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'},
        {x:3, y:2, dir:'UP'}, {x:3, y:4, dir:'DOWN'}
    ]},
    // Level 22
    { size: 7, blocks: [ 
        {x:1, y:1, dir:'UP'}, {x:5, y:1, dir:'UP'}, {x:1, y:5, dir:'DOWN'}, {x:5, y:5, dir:'DOWN'},
        {x:3, y:1, dir:'UP'}, {x:3, y:5, dir:'DOWN'}, {x:1, y:3, dir:'LEFT'}, {x:5, y:3, dir:'RIGHT'},
        {x:2, y:2, dir:'LEFT'}, {x:4, y:2, dir:'RIGHT'}, {x:2, y:4, dir:'LEFT'}, {x:4, y:4, dir:'RIGHT'},
        {x:3, y:3, dir:'DOWN'}, {x:2, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'}
    ]},
    // Level 23
    { size: 7, blocks: [ 
        {x:2, y:1, dir:'UP'}, {x:4, y:1, dir:'UP'}, {x:2, y:5, dir:'DOWN'}, {x:4, y:5, dir:'DOWN'},
        {x:1, y:2, dir:'LEFT'}, {x:5, y:2, dir:'RIGHT'}, {x:1, y:4, dir:'LEFT'}, {x:5, y:4, dir:'RIGHT'},
        {x:3, y:2, dir:'UP'}, {x:3, y:4, dir:'DOWN'}, {x:2, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'},
        {x:3, y:3, dir:'UP'}
    ]},
    // Level 24
    { size: 7, blocks: [ 
        {x:1, y:1, dir:'LEFT'}, {x:2, y:1, dir:'UP'}, {x:4, y:1, dir:'UP'}, {x:5, y:1, dir:'RIGHT'},
        {x:1, y:5, dir:'LEFT'}, {x:2, y:5, dir:'DOWN'}, {x:4, y:5, dir:'DOWN'}, {x:5, y:5, dir:'RIGHT'},
        {x:3, y:2, dir:'UP'}, {x:3, y:4, dir:'DOWN'}, {x:2, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'},
        {x:1, y:3, dir:'LEFT'}, {x:5, y:3, dir:'RIGHT'}, {x:3, y:3, dir:'UP'}
    ]},
    // Level 25
    { size: 7, blocks: [ 
        {x:3, y:0, dir:'UP'}, {x:3, y:6, dir:'DOWN'}, {x:0, y:3, dir:'LEFT'}, {x:6, y:3, dir:'RIGHT'},
        {x:2, y:2, dir:'UP'}, {x:4, y:2, dir:'UP'}, {x:2, y:4, dir:'DOWN'}, {x:4, y:4, dir:'DOWN'},
        {x:3, y:2, dir:'UP'}, {x:3, y:4, dir:'DOWN'}, {x:2, y:3, dir:'LEFT'}, {x:4, y:3, dir:'RIGHT'},
        {x:1, y:1, dir:'LEFT'}, {x:5, y:1, dir:'RIGHT'}, {x:1, y:5, dir:'LEFT'}, {x:5, y:5, dir:'RIGHT'},
        {x:3, y:3, dir:'RIGHT'}
    ]},
    // Level 26 થી 30 (7x7 માં વધારે બ્લોક્સ)
    { size: 7, blocks: [ {x:2,y:2,dir:'UP'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:2,y:4,dir:'DOWN'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'}, {x:1,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:2,y:3,dir:'RIGHT'}, {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'LEFT'}, {x:1,y:2,dir:'LEFT'}, {x:5,y:2,dir:'RIGHT'}, {x:1,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'} ]},
    { size: 7, blocks: [ {x:3,y:1,dir:'UP'}, {x:2,y:2,dir:'LEFT'}, {x:4,y:2,dir:'RIGHT'}, {x:3,y:2,dir:'UP'}, {x:1,y:3,dir:'LEFT'}, {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:5,y:3,dir:'RIGHT'}, {x:2,y:4,dir:'LEFT'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'RIGHT'}, {x:3,y:5,dir:'DOWN'}, {x:3,y:3,dir:'UP'} ]},
    { size: 7, blocks: [ {x:1,y:1,dir:'UP'}, {x:3,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:1,y:5,dir:'DOWN'}, {x:3,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'}, {x:1,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:2,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:2,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'}, {x:3,y:3,dir:'RIGHT'}, {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'} ]},
    { size: 7, blocks: [ {x:2,y:1,dir:'LEFT'}, {x:3,y:1,dir:'UP'}, {x:4,y:1,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'RIGHT'}, {x:1,y:2,dir:'UP'}, {x:1,y:3,dir:'LEFT'}, {x:1,y:4,dir:'DOWN'}, {x:5,y:2,dir:'UP'}, {x:5,y:3,dir:'RIGHT'}, {x:5,y:4,dir:'DOWN'}, {x:3,y:3,dir:'UP'}, {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:3,y:2,dir:'UP'}, {x:3,y:4,dir:'DOWN'} ]},
    { size: 7, blocks: [ {x:1,y:1,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:4,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:1,y:5,dir:'DOWN'}, {x:2,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'}, {x:3,y:2,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:1,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:3,dir:'DOWN'} ]},

    // === 🌟 GENIUS LEVELS (ગ્રીડ: 8x8) ===
    // Level 31 થી 40 
    { size: 8, blocks: [ {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:2,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'} ]},
    { size: 8, blocks: [ {x:2,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:2,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'}, {x:3,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:3,y:4,dir:'LEFT'}, {x:4,y:4,dir:'RIGHT'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'} ]},
    { size: 8, blocks: [ {x:1,y:1,dir:'LEFT'}, {x:6,y:1,dir:'RIGHT'}, {x:1,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'}, {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:2,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'} ]},
    { size: 8, blocks: [ {x:3,y:1,dir:'UP'}, {x:4,y:1,dir:'UP'}, {x:3,y:6,dir:'DOWN'}, {x:4,y:6,dir:'DOWN'}, {x:1,y:3,dir:'LEFT'}, {x:6,y:3,dir:'RIGHT'}, {x:1,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:2,y:2,dir:'LEFT'}, {x:5,y:2,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'}, {x:3,y:3,dir:'DOWN'}, {x:4,y:3,dir:'DOWN'}, {x:3,y:4,dir:'UP'}, {x:4,y:4,dir:'UP'} ]},
    { size: 8, blocks: [ {x:2,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:2,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:1,y:2,dir:'LEFT'}, {x:6,y:2,dir:'RIGHT'}, {x:1,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'}, {x:3,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:3,y:4,dir:'LEFT'}, {x:4,y:4,dir:'RIGHT'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'} ]},
    { size: 8, blocks: [ {x:0,y:0,dir:'UP'}, {x:7,y:0,dir:'UP'}, {x:0,y:7,dir:'DOWN'}, {x:7,y:7,dir:'DOWN'}, {x:2,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:2,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'}, {x:3,y:3,dir:'LEFT'}, {x:4,y:3,dir:'RIGHT'}, {x:3,y:4,dir:'LEFT'}, {x:4,y:4,dir:'RIGHT'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'}, {x:1,y:3,dir:'LEFT'}, {x:6,y:3,dir:'RIGHT'}, {x:1,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'} ]},
    { size: 8, blocks: [ {x:3,y:0,dir:'UP'}, {x:4,y:0,dir:'UP'}, {x:3,y:7,dir:'DOWN'}, {x:4,y:7,dir:'DOWN'}, {x:0,y:3,dir:'LEFT'}, {x:7,y:3,dir:'RIGHT'}, {x:0,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:2,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:2,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'}, {x:3,y:3,dir:'RIGHT'}, {x:4,y:3,dir:'LEFT'}, {x:3,y:4,dir:'RIGHT'}, {x:4,y:4,dir:'LEFT'}, {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'} ]},
    { size: 8, blocks: [ {x:1,y:1,dir:'UP'}, {x:2,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:6,y:1,dir:'UP'}, {x:1,y:6,dir:'DOWN'}, {x:2,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'}, {x:3,y:3,dir:'UP'}, {x:4,y:3,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'}, {x:1,y:3,dir:'LEFT'}, {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:6,y:3,dir:'RIGHT'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'} ]},
    { size: 8, blocks: [ {x:3,y:3,dir:'DOWN'}, {x:4,y:3,dir:'DOWN'}, {x:3,y:4,dir:'UP'}, {x:4,y:4,dir:'UP'}, {x:2,y:3,dir:'RIGHT'}, {x:5,y:3,dir:'LEFT'}, {x:2,y:4,dir:'RIGHT'}, {x:5,y:4,dir:'LEFT'}, {x:3,y:2,dir:'DOWN'}, {x:4,y:2,dir:'DOWN'}, {x:3,y:5,dir:'UP'}, {x:4,y:5,dir:'UP'}, {x:1,y:3,dir:'RIGHT'}, {x:6,y:3,dir:'LEFT'}, {x:1,y:4,dir:'RIGHT'}, {x:6,y:4,dir:'LEFT'}, {x:3,y:1,dir:'UP'}, {x:4,y:1,dir:'UP'}, {x:3,y:6,dir:'DOWN'}, {x:4,y:6,dir:'DOWN'} ]},
    { size: 8, blocks: [ {x:2,y:2,dir:'LEFT'}, {x:5,y:2,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'}, {x:3,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:2,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:3,y:3,dir:'DOWN'}, {x:4,y:3,dir:'DOWN'}, {x:3,y:4,dir:'UP'}, {x:4,y:4,dir:'UP'}, {x:1,y:1,dir:'UP'}, {x:6,y:1,dir:'UP'}, {x:1,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'} ]},

    // === 👑 MASTER LEVELS (ગ્રીડ: 9x9 - સૌથી હાર્ડ) ===
    // Level 41 થી 50 
    { size: 9, blocks: [ {x:4,y:4,dir:'UP'}, {x:3,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:3,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:3,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:6,y:3,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'} ]},
    { size: 9, blocks: [ {x:4,y:4,dir:'DOWN'}, {x:3,y:4,dir:'RIGHT'}, {x:5,y:4,dir:'LEFT'}, {x:4,y:3,dir:'DOWN'}, {x:4,y:5,dir:'UP'}, {x:3,y:3,dir:'DOWN'}, {x:5,y:3,dir:'DOWN'}, {x:3,y:5,dir:'UP'}, {x:5,y:5,dir:'UP'}, {x:2,y:4,dir:'RIGHT'}, {x:6,y:4,dir:'LEFT'}, {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:1,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:4,y:1,dir:'UP'}, {x:4,y:7,dir:'DOWN'} ]},
    { size: 9, blocks: [ {x:2,y:2,dir:'UP'}, {x:4,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:2,y:6,dir:'DOWN'}, {x:4,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:3,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'}, {x:4,y:4,dir:'UP'}, {x:3,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'}, {x:4,y:3,dir:'DOWN'}, {x:4,y:5,dir:'DOWN'} ]},
    { size: 9, blocks: [ {x:1,y:1,dir:'LEFT'}, {x:2,y:1,dir:'UP'}, {x:6,y:1,dir:'UP'}, {x:7,y:1,dir:'RIGHT'}, {x:1,y:7,dir:'LEFT'}, {x:2,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:7,y:7,dir:'RIGHT'}, {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:3,y:3,dir:'UP'}, {x:5,y:3,dir:'UP'}, {x:3,y:5,dir:'DOWN'}, {x:5,y:5,dir:'DOWN'}, {x:4,y:4,dir:'DOWN'} ]},
    { size: 9, blocks: [ {x:0,y:4,dir:'LEFT'}, {x:1,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:8,y:4,dir:'RIGHT'}, {x:4,y:0,dir:'UP'}, {x:4,y:1,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:4,y:8,dir:'DOWN'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:3,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'}, {x:4,y:4,dir:'UP'}, {x:3,y:4,dir:'UP'}, {x:5,y:4,dir:'UP'} ]},
    { size: 9, blocks: [ {x:4,y:4,dir:'RIGHT'}, {x:3,y:4,dir:'UP'}, {x:5,y:4,dir:'DOWN'}, {x:4,y:3,dir:'LEFT'}, {x:4,y:5,dir:'RIGHT'}, {x:3,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:2,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:2,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'}, {x:1,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:4,y:1,dir:'UP'}, {x:4,y:7,dir:'DOWN'} ]},
    { size: 9, blocks: [ {x:2,y:1,dir:'UP'}, {x:3,y:1,dir:'UP'}, {x:5,y:1,dir:'UP'}, {x:6,y:1,dir:'UP'}, {x:2,y:7,dir:'DOWN'}, {x:3,y:7,dir:'DOWN'}, {x:5,y:7,dir:'DOWN'}, {x:6,y:7,dir:'DOWN'}, {x:1,y:2,dir:'LEFT'}, {x:1,y:3,dir:'LEFT'}, {x:1,y:5,dir:'LEFT'}, {x:1,y:6,dir:'LEFT'}, {x:7,y:2,dir:'RIGHT'}, {x:7,y:3,dir:'RIGHT'}, {x:7,y:5,dir:'RIGHT'}, {x:7,y:6,dir:'RIGHT'}, {x:4,y:4,dir:'UP'}, {x:3,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:3,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:3,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'} ]},
    { size: 9, blocks: [ {x:4,y:4,dir:'UP'}, {x:3,y:4,dir:'DOWN'}, {x:5,y:4,dir:'DOWN'}, {x:4,y:3,dir:'RIGHT'}, {x:4,y:5,dir:'LEFT'}, {x:2,y:4,dir:'RIGHT'}, {x:6,y:4,dir:'LEFT'}, {x:4,y:2,dir:'DOWN'}, {x:4,y:6,dir:'UP'}, {x:1,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:4,y:1,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:2,y:2,dir:'LEFT'}, {x:6,y:2,dir:'RIGHT'}, {x:2,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'}, {x:3,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:3,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'} ]},
    { size: 9, blocks: [ {x:0,y:0,dir:'LEFT'}, {x:8,y:0,dir:'RIGHT'}, {x:0,y:8,dir:'LEFT'}, {x:8,y:8,dir:'RIGHT'}, {x:2,y:2,dir:'UP'}, {x:6,y:2,dir:'UP'}, {x:2,y:6,dir:'DOWN'}, {x:6,y:6,dir:'DOWN'}, {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:3,y:3,dir:'LEFT'}, {x:5,y:3,dir:'RIGHT'}, {x:3,y:5,dir:'LEFT'}, {x:5,y:5,dir:'RIGHT'}, {x:4,y:3,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:3,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:4,dir:'DOWN'} ]},
    { size: 9, blocks: [ {x:4,y:4,dir:'DOWN'}, {x:3,y:4,dir:'LEFT'}, {x:5,y:4,dir:'RIGHT'}, {x:4,y:3,dir:'UP'}, {x:4,y:5,dir:'DOWN'}, {x:2,y:4,dir:'LEFT'}, {x:6,y:4,dir:'RIGHT'}, {x:4,y:2,dir:'UP'}, {x:4,y:6,dir:'DOWN'}, {x:1,y:4,dir:'LEFT'}, {x:7,y:4,dir:'RIGHT'}, {x:4,y:1,dir:'UP'}, {x:4,y:7,dir:'DOWN'}, {x:3,y:2,dir:'UP'}, {x:5,y:2,dir:'UP'}, {x:3,y:6,dir:'DOWN'}, {x:5,y:6,dir:'DOWN'}, {x:2,y:3,dir:'LEFT'}, {x:6,y:3,dir:'RIGHT'}, {x:2,y:5,dir:'LEFT'}, {x:6,y:5,dir:'RIGHT'}, {x:2,y:2,dir:'LEFT'}, {x:6,y:2,dir:'RIGHT'}, {x:2,y:6,dir:'LEFT'}, {x:6,y:6,dir:'RIGHT'}, {x:0,y:4,dir:'LEFT'}, {x:8,y:4,dir:'RIGHT'} ]}
          
];
      
