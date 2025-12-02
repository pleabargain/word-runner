// https://github.com/pleabargain/word-runner
// Unit Test for WordPool.getWord() bug

// Test data structure
const TEST_WORD_DATA = {
    A1: {
        verbs: {
            past: ['Ran', 'Jumped'],
            present: ['Run', 'Jump'],
            future: ['Will Run', 'Will Jump']
        },
        nouns: ['Cat', 'Dog'],
        adjectives: ['Big', 'Small'],
        days: ['Monday', 'Tuesday'],
        months: ['January', 'February']
    }
};

// Mock WordPool class
class TestWordPool {
    constructor() {
        this.pools = {};
        this.initializePools();
    }

    initializePools() {
        Object.keys(TEST_WORD_DATA).forEach(difficulty => {
            this.pools[difficulty] = {
                verbs: { past: [], present: [], future: [] },
                nouns: [],
                adjectives: [],
                days: [],
                months: []
            };
        });
    }

    // BUGGY VERSION - This is what's currently in the code
    getWordBuggy(difficulty, type) {
        if (this.pools[difficulty][type].length === 0) {
            this.pools[difficulty][type] = [...TEST_WORD_DATA[difficulty][type]];
            this.shuffleArray(this.pools[difficulty][type]);
        }
        return this.pools[difficulty][type].pop();
    }

    // FIXED VERSION
    getWordFixed(difficulty, type, timeFrame = 'present') {
        // Handle verbs with time frame
        if (type === 'verbs') {
            if (this.pools[difficulty][type][timeFrame].length === 0) {
                this.pools[difficulty][type][timeFrame] = [...TEST_WORD_DATA[difficulty][type][timeFrame]];
                this.shuffleArray(this.pools[difficulty][type][timeFrame]);
            }
            return this.pools[difficulty][type][timeFrame].pop();
        }

        // Handle other word types
        if (this.pools[difficulty][type].length === 0) {
            this.pools[difficulty][type] = [...TEST_WORD_DATA[difficulty][type]];
            this.shuffleArray(this.pools[difficulty][type]);
        }

        return this.pools[difficulty][type].pop();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Test Cases
console.log('=== WordPool Unit Tests ===\n');

// Test 1: Buggy version with verbs (should fail)
console.log('Test 1: Buggy version with verbs');
try {
    const pool1 = new TestWordPool();
    const word = pool1.getWordBuggy('A1', 'verbs');
    console.log('❌ FAIL: Should have thrown error, got:', word);
} catch (error) {
    console.log('✓ PASS: Expected error:', error.message);
}

// Test 2: Buggy version with nouns (should work)
console.log('\nTest 2: Buggy version with nouns');
try {
    const pool2 = new TestWordPool();
    const word = pool2.getWordBuggy('A1', 'nouns');
    console.log('✓ PASS: Got noun:', word);
} catch (error) {
    console.log('❌ FAIL: Unexpected error:', error.message);
}

// Test 3: Fixed version with verbs
console.log('\nTest 3: Fixed version with verbs (present tense)');
try {
    const pool3 = new TestWordPool();
    const word = pool3.getWordFixed('A1', 'verbs', 'present');
    console.log('✓ PASS: Got present tense verb:', word);
} catch (error) {
    console.log('❌ FAIL: Unexpected error:', error.message);
}

// Test 4: Fixed version with verbs (past tense)
console.log('\nTest 4: Fixed version with verbs (past tense)');
try {
    const pool4 = new TestWordPool();
    const word = pool4.getWordFixed('A1', 'verbs', 'past');
    console.log('✓ PASS: Got past tense verb:', word);
} catch (error) {
    console.log('❌ FAIL: Unexpected error:', error.message);
}

// Test 5: Fixed version with nouns
console.log('\nTest 5: Fixed version with nouns');
try {
    const pool5 = new TestWordPool();
    const word = pool5.getWordFixed('A1', 'nouns');
    console.log('✓ PASS: Got noun:', word);
} catch (error) {
    console.log('❌ FAIL: Unexpected error:', error.message);
}

// Test 6: Fixed version with days
console.log('\nTest 6: Fixed version with days');
try {
    const pool6 = new TestWordPool();
    const word = pool6.getWordFixed('A1', 'days');
    console.log('✓ PASS: Got day:', word);
} catch (error) {
    console.log('❌ FAIL: Unexpected error:', error.message);
}

console.log('\n=== Tests Complete ===');
console.log('\nBUG IDENTIFIED:');
console.log('The getWord() method tries to access this.pools[difficulty][type].length');
console.log('when type is "verbs", but verbs is now an object with past/present/future keys.');
console.log('\nFIX: Check if type === "verbs" and handle the nested structure with timeFrame parameter.');
