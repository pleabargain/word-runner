# Script to update game.js with time frame system
# This will be executed to patch the file

# Read the file
$content = Get-Content "game.js" -Raw

# Replace the getWord method
$oldGetWord = @'
    getWord(difficulty, type) {
        // If pool is empty, refill it with all words from that category
        if (this.pools[difficulty][type].length === 0) {
            this.pools[difficulty][type] = [...WORD_DATA[difficulty][type]];
            // Shuffle the pool
            this.shuffleArray(this.pools[difficulty][type]);
        }
        
        // Pop and return a word from the pool
        return this.pools[difficulty][type].pop();
    }
'@

$newGetWord = @'
    getWord(difficulty, type, timeFrame = 'present') {
        // Handle verbs with time frame
        if (type === 'verbs') {
            if (this.pools[difficulty][type][timeFrame].length === 0) {
                this.pools[difficulty][type][timeFrame] = [...WORD_DATA[difficulty][type][timeFrame]];
                this.shuffleArray(this.pools[difficulty][type][timeFrame]);
            }
            return this.pools[difficulty][type][timeFrame].pop();
        }
        
        // Handle other word types (nouns, adjectives, days, months)
        if (this.pools[difficulty][type].length === 0) {
            this.pools[difficulty][type] = [...WORD_DATA[difficulty][type]];
            this.shuffleArray(this.pools[difficulty][type]);
        }
        
        return this.pools[difficulty][type].pop();
    }
'@

$content = $content -replace [regex]::Escape($oldGetWord), $newGetWord

# Write back
$content | Set-Content "game.js" -NoNewline

Write-Host "Updated getWord method successfully"
