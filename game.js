// https://github.com/pleabargain/word-runner
const WORD_DATA = {
    A1: {
        verbs: {
            past: ['Ran', 'Jumped', 'Ate', 'Slept', 'Walked'],
            present: ['Run', 'Jump', 'Eat', 'Sleep', 'Walk'],
            future: ['Will Run', 'Will Jump', 'Will Eat', 'Will Sleep', 'Will Walk']
        },
        nouns: ['Cat', 'Dog', 'Car', 'House', 'Tree'],
        adjectives: ['Big', 'Small', 'Good', 'Bad', 'Red'],
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    A2: {
        verbs: {
            past: ['Traveled', 'Cooked', 'Studied', 'Drove', 'Swam'],
            present: ['Travel', 'Cook', 'Study', 'Drive', 'Swim'],
            future: ['Will Travel', 'Will Cook', 'Will Study', 'Will Drive', 'Will Swim']
        },
        nouns: ['Ticket', 'Kitchen', 'School', 'Road', 'Pool'],
        adjectives: ['Busy', 'Quiet', 'Cheap', 'Expensive', 'Clean'],
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    B1: {
        verbs: {
            past: ['Managed', 'Developed', 'Created', 'Designed', 'Solved'],
            present: ['Manage', 'Develop', 'Create', 'Design', 'Solve'],
            future: ['Will Manage', 'Will Develop', 'Will Create', 'Will Design', 'Will Solve']
        },
        nouns: ['Project', 'System', 'Idea', 'Plan', 'Goal'],
        adjectives: ['Creative', 'Effective', 'Simple', 'Complex', 'Real'],
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    B2: {
        verbs: {
            past: ['Analyzed', 'Evaluated', 'Implemented', 'Negotiated', 'Adapted'],
            present: ['Analyze', 'Evaluate', 'Implement', 'Negotiate', 'Adapt'],
            future: ['Will Analyze', 'Will Evaluate', 'Will Implement', 'Will Negotiate', 'Will Adapt']
        },
        nouns: ['Strategy', 'Resource', 'Concept', 'Theory', 'Method'],
        adjectives: ['Efficient', 'Reliable', 'Significant', 'Potential', 'Specific'],
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    C1: {
        verbs: {
            past: ['Facilitated', 'Synthesized', 'Validated', 'Integrated', 'Advocated'],
            present: ['Facilitate', 'Synthesize', 'Validate', 'Integrate', 'Advocate'],
            future: ['Will Facilitate', 'Will Synthesize', 'Will Validate', 'Will Integrate', 'Will Advocate']
        },
        nouns: ['Paradigm', 'Infrastructure', 'Hypothesis', 'Phenomenon', 'Consensus'],
        adjectives: ['Comprehensive', 'Ambiguous', 'Coherent', 'Intrinsic', 'Empirical'],
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    C2: {
        verbs: {
            past: ['Exacerbated', 'Mitigated', 'Substantiated', 'Elucidated', 'Disseminated'],
            present: ['Exacerbate', 'Mitigate', 'Substantiate', 'Elucidate', 'Disseminate'],
            future: ['Will Exacerbate', 'Will Mitigate', 'Will Substantiate', 'Will Elucidate', 'Will Disseminate']
        },
        nouns: ['Cacophony', 'Epiphany', 'Ubiquity', 'Vicissitude', 'Serendipity'],
        adjectives: ['Esoteric', 'Ephemeral', 'Ineffable', 'Ubiquitous', 'Pernicious'],
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
};

class WordPool {
    constructor() {
        this.pools = {};
        this.initializePools();
    }

    initializePools() {
        // Initialize pools for each difficulty level and word type
        Object.keys(WORD_DATA).forEach(difficulty => {
            this.pools[difficulty] = {
                verbs: { past: [], present: [], future: [] },
                nouns: [],
                adjectives: [],
                days: [],
                months: []
            };
        });
    }

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

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    reset() {
        this.initializePools();
    }
}

class Word {
    constructor(game) {
        this.game = game;
        this.type = this.getRandomType();
        this.text = this.getRandomWord(this.type);

        // Spawn at the horizon (far away)
        this.z = 2000;

        // Center 2/3 of the screen
        // Total width is game.width. Center 2/3 is from 1/6 to 5/6.
        // We map lanes to this range.
        // Let's define 3 lanes within this range.
        // Lane -1: Left (at 1/3 width approx), Lane 0: Center, Lane 1: Right (at 2/3 width approx)
        // Actually, let's just use a narrower lane spacing.

        const lanes = [-1, 0, 1];
        this.lane = lanes[Math.floor(Math.random() * lanes.length)];

        // Physical properties for collision
        this.width = 80;
        this.height = 40;

        this.x = 0;
        this.y = 0;

        this.markedForDeletion = false;
    }

    getRandomType() {
        const types = ['verbs', 'nouns', 'adjectives'];
        return types[Math.floor(Math.random() * types.length)];
    }

    getRandomWord(type) {
        const difficulty = this.game.difficulty || 'A1';
        return this.game.wordPool.getWord(difficulty, type);
    }

    update(deltaTime) {
        this.z -= this.game.speed * (deltaTime / 1000);

        if (this.z < -100) {
            this.markedForDeletion = true;
        }
    }

    draw(ctx) {
        if (this.z <= 10) return;

        const fov = 300;
        const cameraHeight = 150;
        const scale = fov / this.z;

        const vpX = this.game.width / 2;
        const vpY = this.game.height * 0.4;

        // Lane Spacing: Reduced to keep within center 2/3
        // If screen width is W, we want max extent to be W/3 from center?
        // Let's try 250 world units.
        const laneSpacing = 250;
        const worldX = this.lane * laneSpacing;

        const screenX = vpX + (worldX * scale);
        const screenY = vpY + (cameraHeight * scale);

        this.screenX = screenX;
        this.screenY = screenY;
        this.scale = scale;

        // Draw Word
        ctx.font = `${Math.max(10, 40 * scale)}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Bright White Color
        ctx.fillStyle = '#ffffff';

        ctx.fillText(this.text, screenX, screenY);
    }
}

class Player {
    constructor(game) {
        this.game = game;
        this.width = 50;
        this.height = 80;
        this.x = game.width / 2 - this.width / 2;
        this.y = game.height - this.height - 20;
        this.speed = 400;
        this.color = '#e74c3c';
    }

    update(deltaTime, input) {
        if (input.includes('ArrowLeft')) {
            this.x -= this.speed * (deltaTime / 1000);
        }
        if (input.includes('ArrowRight')) {
            this.x += this.speed * (deltaTime / 1000);
        }

        // Boundaries
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.fillStyle = '#c0392b';
        ctx.fillRect(this.x + 10, this.y + 10, this.width - 20, 20);
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;

        this.isRunning = false;
        this.isPaused = false;
        this.lastTime = 0;

        // Game State
        this.speed = 300;
        this.distance = 0;
        this.gridSize = 100;
        this.difficulty = 'A1';

        this.wordPool = new WordPool();
        this.player = new Player(this);
        this.input = [];

        this.words = [];
        this.wordTimer = 0;
        this.wordInterval = 2000;

        this.score = {
            verbs: 0,
            nouns: 0,
            adjectives: 0
        };

        // Event Listeners
        window.addEventListener('resize', () => this.resize());
        document.getElementById('start-btn').addEventListener('click', () => this.start());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());

        window.addEventListener('keydown', e => {
            if (e.code === 'Space') {
                this.togglePause();
            }
            if (this.input.indexOf(e.key) === -1) {
                this.input.push(e.key);
            }
        });
        window.addEventListener('keyup', e => {
            const index = this.input.indexOf(e.key);
            if (index > -1) {
                this.input.splice(index, 1);
            }
        });

        this.resize();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        if (this.player) {
            if (this.player.x > this.width - this.player.width) {
                this.player.x = this.width - this.player.width;
            }
            this.player.y = this.height - this.player.height - 20;
        }
    }

    start() {
        const difficultySelect = document.getElementById('difficulty');
        this.difficulty = difficultySelect.value;

        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('game-over-screen').classList.add('hidden');
        this.isRunning = true;
        this.isPaused = false;
        this.lastTime = 0;
        requestAnimationFrame(t => this.loop(t));
    }

    restart() {
        this.score = { verbs: 0, nouns: 0, adjectives: 0 };
        this.distance = 0;
        this.words = [];
        this.wordPool.reset();
        this.player.x = this.width / 2 - this.player.width / 2;
        this.updateScoreDisplay();
        this.start();
    }

    togglePause() {
        if (!this.isRunning) return;
        this.isPaused = !this.isPaused;
        if (!this.isPaused) {
            this.lastTime = performance.now();
            requestAnimationFrame(t => this.loop(t));
        }
    }

    updateScoreDisplay() {
        document.getElementById('verb-count').textContent = this.score.verbs;
        document.getElementById('noun-count').textContent = this.score.nouns;
        document.getElementById('adj-count').textContent = this.score.adjectives;
    }

    checkCollisions() {
        this.words.forEach(word => {
            if (word.z > 0 && word.z < 100 && !word.markedForDeletion) {
                const playerCenter = this.player.x + this.player.width / 2;
                const wordWidth = 100 * word.scale;

                if (Math.abs(word.screenX - playerCenter) < (this.player.width / 2 + wordWidth / 2)) {
                    this.handleCollision(word);
                    word.markedForDeletion = true;
                }
            }
        });
    }

    handleCollision(word) {
        this.score[word.type]++;
        this.updateScoreDisplay();
    }

    update(deltaTime) {
        this.distance += this.speed * (deltaTime / 1000);

        this.wordTimer += deltaTime;
        if (this.wordTimer > this.wordInterval) {
            this.words.push(new Word(this));
            this.wordTimer = 0;
        }

        this.words.forEach(word => word.update(deltaTime));
        this.words = this.words.filter(word => !word.markedForDeletion);

        this.player.update(deltaTime, this.input);

        this.checkCollisions();
    }

    draw() {
        this.ctx.fillStyle = '#1a1a1a';
        this.ctx.fillRect(0, 0, this.width, this.height);

        const horizonY = this.height * 0.4;

        this.ctx.fillStyle = '#0d0d20';
        this.ctx.fillRect(0, 0, this.width, horizonY);

        this.ctx.fillStyle = '#2a2a2a';
        this.ctx.fillRect(0, horizonY, this.width, this.height - horizonY);

        this.ctx.strokeStyle = '#4a90e2';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();

        const vpX = this.width / 2;
        const vpY = horizonY;

        const numLines = 20;
        for (let i = -numLines; i <= numLines; i++) {
            const x = this.width / 2 + i * (this.width / 10);
            this.ctx.moveTo(vpX, vpY);
            this.ctx.lineTo(x, this.height);
        }

        const fov = 300;
        const cameraHeight = 150;

        const startZ = Math.floor(this.distance / this.gridSize) * this.gridSize;

        for (let z = startZ + 10; z < startZ + 2000; z += this.gridSize) {
            const renderZ = z - this.distance;
            if (renderZ <= 10) continue;

            const scale = fov / renderZ;
            const y = vpY + (cameraHeight * scale);

            if (y > this.height) continue;

            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.width, y);
        }

        this.ctx.stroke();

        this.words.sort((a, b) => b.z - a.z);
        this.words.forEach(word => word.draw(this.ctx));

        this.player.draw(this.ctx);

        if (this.isPaused) {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fillRect(0, 0, this.width, this.height);
            this.ctx.fillStyle = 'white';
            this.ctx.font = '40px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('PAUSED', this.width / 2, this.height / 2);
        }
    }

    loop(timestamp) {
        if (!this.isRunning) return;

        if (this.isPaused) {
            // Just draw pause screen if needed, but we did that in draw()
            // Actually, if paused, we shouldn't update, but we might want to redraw if resize happens?
            // For now, just don't request next frame or don't update.
            // But if we don't request next frame, we can't unpause easily unless we handle it in event listener.
            // Better to keep loop running but skip update.
        } else {
            const deltaTime = timestamp - this.lastTime;
            this.lastTime = timestamp;
            this.update(deltaTime);
            this.draw();
        }

        if (!this.isPaused) {
            requestAnimationFrame(t => this.loop(t));
        }
    }
}
// Initialize game when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
});
