<!-- https://github.com/pleabargain/word-runner -->
# Word Runner

**Last Updated:** 2025-12-02

**Word Runner** is a web-based infinite scroller game set in a rectilinear, New York-style cityscape. The player navigates an infinite city environment while interacting with words and exploring labeled buildings.

## Gameplay
- **Objective:** Navigate through time frames (PAST, PRESENT, FUTURE) and collect words while exploring the cityscape.
- **Word Types:** Verbs, Nouns, Adjectives, Days of the Week, Months
- **Time Frames:** 
    - **PAST:** Collect past tense verbs (e.g., "Ran", "Jumped", "Ate")
    - **PRESENT:** Collect present tense verbs (e.g., "Run", "Jump", "Eat")
    - **FUTURE:** Collect future tense verbs (e.g., "Will Run", "Will Jump", "Will Eat")
    - Time frame indicator displayed in top-right corner
    - Time frames change every 1000 distance units
- **Labeled Buildings:** 
    - Buildings appear on both sides of the road with clearly stated names
    - Each building displays enriched vocabulary information inside the building frame:
        - **place:** Building name
        - **person:** Random famous person (Einstein, Shakespeare, Mozart, etc.)
        - **modal:** Random modal verb (can, could, may, might, must, etc.)
        - **verbs:** Associated action verbs
        - **nouns:** Associated nouns (excluding famous person and cities)
    - Building cards fill the entire building frame with maximized font size for readability
    - All building names are shown before repeating (randomized order)
    - Building types include:
        - **Places:** Bank, Bookstore, Burger Place, Chinese Restaurant, Coffee Shop, Doctor's Office, Fire Station, Gas Station, Grocery Store, Gym, Hair Salon, Hardware Store, Hospital, Hotel, Kindergarten, Library, Museum, Park, Pharmacy, Pizza Place, Playground, Police Station, Post Office, Restaurant, School, Theater, Train Station
        - **Rooms:** Bathroom, Bedroom, Elevator, Hallway, Hotel Lobby, Hotel Spa, Kids Club, Kitchen, Living Room
- **Controls:** 
    - **Arrow Keys:** Move Left/Right
    - **Space Bar:** Pause/Resume Game
- **Difficulty:** Select from A1 (Beginner) to C2 (Proficiency) to adjust word complexity.
    - A1: Basic vocabulary (e.g., "Run", "Cat", "Big")
    - A2: Elementary vocabulary
    - B1: Intermediate vocabulary
    - B2: Upper-intermediate vocabulary (extensive word lists)
    - C1: Advanced vocabulary
    - C2: Proficiency-level vocabulary
- **Mechanics:** 
    - Collide with words floating in center lanes to collect them
    - Words appear in bright white
    - Score tracks collected words by type (Verbs, Nouns, Adjectives, Days, Months)
    - Cityscape maintains consistent blue/gray color scheme
    - Buildings use distinct colors for visual variety

## Features
- **Infinite Scrolling Cityscape:** 3D perspective city environment with buildings on both sides
- **Enriched Building Cards:** Each building displays:
    - Building name (place)
    - Random famous person from history, science, arts, and politics
    - Random modal verb for language learning
    - Contextually relevant verbs and nouns
    - Full card layout with maximized font size for easy reading
- **Time Frame System:** Navigate through PAST, PRESENT, and FUTURE blocks with indicator display
- **Word Pool System:** Ensures variety in word selection with non-repeating pools
- **Building Name Pool:** All building names shown before repeating (randomized order)
- **Extensive Vocabulary:** B2 level includes 60+ verbs, 800+ nouns, and 1000+ adjectives
- **Responsive Design:** Adapts to window size

## Development
This project is built using HTML5, CSS3, and Vanilla JavaScript.

## Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari, or Opera)
- No additional software or dependencies required - the game runs entirely in the browser

### Running the Game

**Option 1: Direct File Opening**
1. Clone or download the repository to your local machine
2. Navigate to the project folder
3. Double-click `index.html` to open it in your default browser
   - **Note:** Some browsers may have security restrictions when opening local files. If the game doesn't load, use Option 2 instead.

**Option 2: Local Web Server (Recommended)**
1. Clone or download the repository to your local machine
2. Open a terminal/command prompt in the project folder
3. Start a local web server using one of these methods:
   - **Python 3:** `python -m http.server 8000`
   - **Python 2:** `python -m SimpleHTTPServer 8000`
   - **Node.js:** `npx http-server` (requires Node.js installed)
   - **PHP:** `php -S localhost:8000`
4. Open your browser and navigate to `http://localhost:8000`
5. The game should now load properly

**Option 3: Online Hosting**
1. Upload all files to a web hosting service (GitHub Pages, Netlify, Vercel, etc.)
2. Access the game through the hosted URL

### Starting the Game
1. Once the game loads, you'll see the start screen
2. Select your difficulty level from the dropdown menu:
   - **A1:** Beginner - Basic vocabulary
   - **A2:** Elementary - Simple words
   - **B1:** Intermediate - Moderate complexity
   - **B2:** Upper-intermediate - Extensive vocabulary (60+ verbs, 800+ nouns, 1000+ adjectives)
   - **C1:** Advanced - Complex vocabulary
   - **C2:** Proficiency - Expert-level vocabulary
3. Click the "Start Game" button
4. Use arrow keys to move left/right and collect words
5. Press Spacebar to pause/resume the game

### Troubleshooting
- **Game doesn't load:** Try using a local web server (Option 2) instead of opening the file directly
- **Buildings don't appear:** Make sure all files (`game.js`, `style.css`, `index.html`) are in the same folder
- **Controls don't work:** Click on the game canvas to ensure it has focus
- **Performance issues:** Try closing other browser tabs or using a more modern browser
