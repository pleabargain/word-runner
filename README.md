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
1. Clone the repository.
2. Open `index.html` in your browser.
3. Select your difficulty level and click "Start Game".
