# Fix for game.js WordPool.getWord() method
$content = Get-Content "game.js" -Raw

# Find and replace the buggy getWord method
$buggyMethod = @'
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

$fixedMethod = @'
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

if ($content -match [regex]::Escape($buggyMethod)) {
    $content = $content -replace [regex]::Escape($buggyMethod), $fixedMethod
    $content | Set-Content "game.js" -NoNewline
    Write-Host "✓ Successfully fixed WordPool.getWord() method"
}
else {
    Write-Host "⚠ Buggy method not found - may already be fixed or different format"
}
