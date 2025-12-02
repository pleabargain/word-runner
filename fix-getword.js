// Script to fix the getWord method in game.js
const fs = require('fs');

// Read the file
const content = fs.readFileSync('game.js', 'utf8');
const lines = content.split('\r\n');

// The buggy method starts at line 90 (0-indexed: 89) and ends at line 100 (0-indexed: 99)
// Replace lines 90-100 with the fixed version
const fixedLines = [
    '    getWord(difficulty, type, timeFrame = \'present\') {',
    '        // Handle verbs with time frame',
    '        if (type === \'verbs\') {',
    '            if (this.pools[difficulty][type][timeFrame].length === 0) {',
    '                this.pools[difficulty][type][timeFrame] = [...WORD_DATA[difficulty][type][timeFrame]];',
    '                this.shuffleArray(this.pools[difficulty][type][timeFrame]);',
    '            }',
    '            return this.pools[difficulty][type][timeFrame].pop();',
    '        }',
    '        ',
    '        // Handle other word types (nouns, adjectives, days, months)',
    '        if (this.pools[difficulty][type].length === 0) {',
    '            this.pools[difficulty][type] = [...WORD_DATA[difficulty][type]];',
    '            this.shuffleArray(this.pools[difficulty][type]);',
    '        }',
    '        ',
    '        return this.pools[difficulty][type].pop();',
    '    }'
];

// Remove old lines (90-100 is indices 89-99, that's 11 lines)
lines.splice(89, 11, ...fixedLines);

// Write back
fs.writeFileSync('game.js', lines.join('\r\n'));
console.log('✓ Fixed WordPool.getWord() method successfully!');
