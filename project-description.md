<!-- https://github.com/pleabargain/word-runner -->
# Project Description: Word Runner

**Date:** 2025-12-02

## Overview
"Word Runner" is a web-based infinite scroller game set in a rectilinear, New York-style cityscape. The player navigates an infinite city environment while interacting with words and exploring labeled buildings with associated vocabulary.

## Goals
- [x] Create an infinite scrolling cityscape environment with buildings. The building must have clearly stated names e.g. Train Station, Doctor's Office, grocery store, etc
- [x] Implement a character navigation system for rectilinear streets.
- [x] Implement a scoring system based on collecting an equal balance of word types.

## Gameplay Mechanics
- **Objective:** Navigate through city blocks representing different time frames (PAST, PRESENT, FUTURE) and collect words while exploring buildings.
- **Collection:** Collect words corresponding to the current time frame.
- **Categories:** Verbs, Nouns, Adjectives, Days of the Week, Months.
- **Time Frames:**
    - **PAST:** Collect past tense verbs (e.g., "Ran", "Jumped", "Ate")
    - **PRESENT:** Collect present tense verbs (e.g., "Run", "Jump", "Eat")
    - **FUTURE:** Collect future tense verbs (e.g., "Will Run", "Will Jump", "Will Eat")
    - Time frame indicator displayed in top-right corner (PAST/PRESENT/FUTURE)
    - Time frames change every 1000 distance units
- **Buildings:**
    - Buildings appear on both sides of the road with clearly stated names
    - Each building displays associated nouns and verbs inside the building frame
    - Examples: 
        - Park: NOUNS: Birds, Trees, Grass | VERBS: Play, Walk, Sit, Picnic
        - Kitchen: NOUNS: Stove, Refrigerator, Sink | VERBS: Cook, Bake, Prepare, Wash
    - Building types include:
        - **Places:** Bank, Bookstore, Burger Place, Chinese Restaurant, Coffee Shop, Doctor's Office, Fire Station, Gas Station, Grocery Store, Hair Salon, Hardware Store, Hospital, Hotel, Kindergarten, Library, Museum, Park, Pharmacy, Pizza Place, Police Station, Post Office, Restaurant, School, Theater, Train Station
        - **Rooms:** Bathroom, Bedroom, Elevator, Hallway, Hotel Lobby, Hotel Spa, Kids Club, Kitchen, Living Room
    - All building names are shown before repeating (randomized order)
    - Buildings use distinct colors for visual variety
- **Setting:** Infinite cityscape with consistent blue/gray color scheme and distinct building blocks.
- **Collection:** Collision-based. The character physically runs into words floating in their lane.
- **Difficulty Levels:** A1 (Beginner) to C2 (Proficiency) with extensive vocabulary pools, especially at B2 level.

## Technology Stack
- HTML5 / CSS3
- JavaScript (Vanilla)
