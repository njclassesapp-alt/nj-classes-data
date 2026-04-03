// ફાઈલનું નામ: Line_game.js
// આ ડેટાબેઝમાં લેવલની સાઈઝ અને બ્લોકની દિશા સેટ કરેલી છે.

const lineGameLevels = [
    // લેવલ 1: એકદમ સહેલું (Size 3)
    { 
        size: 3, 
        blocks: [ 
            {x: 1, y: 1, dir: 'UP'}, 
            {x: 1, y: 0, dir: 'RIGHT'} 
        ]
    },
    // લેવલ 2: થોડુંક વિચારવું પડે (Size 3)
    { 
        size: 3, 
        blocks: [ 
            {x: 1, y: 1, dir: 'UP'}, 
            {x: 1, y: 0, dir: 'RIGHT'}, 
            {x: 0, y: 1, dir: 'LEFT'} 
        ]
    },
    // લેવલ 3: ચાર બ્લોક (Size 4)
    { 
        size: 4, 
        blocks: [ 
            {x: 1, y: 1, dir: 'UP'}, 
            {x: 2, y: 1, dir: 'RIGHT'}, 
            {x: 1, y: 2, dir: 'LEFT'}, 
            {x: 2, y: 2, dir: 'DOWN'} 
        ]
    },
    // લેવલ 4: ક્રોસ કનેક્શન (Size 4)
    { 
        size: 4, 
        blocks: [ 
            {x: 0, y: 1, dir: 'RIGHT'}, 
            {x: 1, y: 1, dir: 'UP'}, 
            {x: 2, y: 1, dir: 'DOWN'}, 
            {x: 2, y: 2, dir: 'RIGHT'} 
        ]
    },
    // લેવલ 5: મોટો ગ્રીડ (Size 5)
    { 
        size: 5, 
        blocks: [ 
            {x: 2, y: 2, dir: 'UP'}, 
            {x: 2, y: 3, dir: 'RIGHT'}, 
            {x: 3, y: 3, dir: 'DOWN'}, 
            {x: 3, y: 1, dir: 'LEFT'}, 
            {x: 1, y: 1, dir: 'UP'} 
        ]
    },
    // લેવલ 6: રાઉન્ડ પઝલ (Size 5)
    { 
        size: 5, 
        blocks: [ 
            {x: 1, y: 2, dir: 'RIGHT'}, 
            {x: 2, y: 2, dir: 'UP'}, 
            {x: 3, y: 2, dir: 'LEFT'}, 
            {x: 2, y: 1, dir: 'DOWN'},
            {x: 1, y: 1, dir: 'UP'},
            {x: 3, y: 3, dir: 'DOWN'}
        ]
    },
    // લેવલ 7: 6 બ્લોક ટ્રીકી (Size 4)
    { 
        size: 4, 
        blocks: [ 
            {x: 1, y: 1, dir: 'UP'}, 
            {x: 1, y: 2, dir: 'DOWN'}, 
            {x: 2, y: 1, dir: 'RIGHT'}, 
            {x: 2, y: 2, dir: 'LEFT'},
            {x: 0, y: 1, dir: 'UP'},
            {x: 3, y: 2, dir: 'DOWN'}
        ]
    },
    // લેવલ 8: બોક્સ એસ્કેપ (Size 5)
    { 
        size: 5, 
        blocks: [ 
            {x: 2, y: 2, dir: 'LEFT'}, 
            {x: 2, y: 1, dir: 'UP'}, 
            {x: 2, y: 3, dir: 'DOWN'}, 
            {x: 1, y: 2, dir: 'LEFT'}, 
            {x: 3, y: 2, dir: 'RIGHT'},
            {x: 1, y: 3, dir: 'DOWN'},
            {x: 3, y: 1, dir: 'UP'}
        ]
    },
    // લેવલ 9: હાર્ડ પઝલ 1 (Size 6)
    { 
        size: 6, 
        blocks: [ 
            {x: 2, y: 2, dir: 'RIGHT'}, 
            {x: 3, y: 2, dir: 'DOWN'}, 
            {x: 2, y: 3, dir: 'UP'}, 
            {x: 3, y: 3, dir: 'LEFT'},
            {x: 2, y: 4, dir: 'DOWN'},
            {x: 4, y: 2, dir: 'RIGHT'},
            {x: 1, y: 3, dir: 'LEFT'}
        ]
    },
    // લેવલ 10: હાર્ડ પઝલ 2 (Size 6)
    { 
        size: 6, 
        blocks: [ 
            {x: 3, y: 3, dir: 'UP'}, 
            {x: 3, y: 2, dir: 'RIGHT'}, 
            {x: 4, y: 3, dir: 'DOWN'}, 
            {x: 2, y: 3, dir: 'LEFT'},
            {x: 2, y: 2, dir: 'UP'},
            {x: 4, y: 4, dir: 'DOWN'},
            {x: 1, y: 2, dir: 'LEFT'},
            {x: 4, y: 2, dir: 'RIGHT'}
        ]
    }
];
             
