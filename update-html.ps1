# Script to add Days and Months to score board
$content = Get-Content "index.html" -Raw

# Find the score board section and add the new items
$oldScoreBoard = @'
            <div id="score-board">
                <div class="score-item">Verbs: <span id="verb-count">0</span></div>
                <div class="score-item">Nouns: <span id="noun-count">0</span></div>
                <div class="score-item">Adjectives: <span id="adj-count">0</span></div>
            </div>
'@

$newScoreBoard = @'
            <div id="score-board">
                <div class="score-item">Verbs: <span id="verb-count">0</span></div>
                <div class="score-item">Nouns: <span id="noun-count">0</span></div>
                <div class="score-item">Adjectives: <span id="adj-count">0</span></div>
                <div class="score-item">Days: <span id="day-count">0</span></div>
                <div class="score-item">Months: <span id="month-count">0</span></div>
            </div>
'@

$content = $content -replace [regex]::Escape($oldScoreBoard), $newScoreBoard

$content | Set-Content "index.html" -NoNewline

Write-Host "Updated score board successfully"
