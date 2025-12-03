// Building Associations Data - extracted from game.js
const BUILDING_ASSOCIATIONS = {
    'Bank': {
        nouns: ['Money', 'Account', 'Loan', 'Deposit', 'Teller', 'Vault', 'ATM', 'Check'],
        verbs: ['Deposit', 'Withdraw', 'Save', 'Borrow', 'Invest', 'Transfer', 'Count']
    },
    'Bathroom': {
        nouns: ['Sink', 'Mirror', 'Towel', 'shampoo', 'conditioner', 'lotion', 'Shower', 'Toilet', 'Soap', 'Toothbrush', 'Toothpaste'],
        verbs: ['Wash', 'Shower', 'Brush', 'Flush', 'Dry', 'Clean', 'Use']
    },
    'Bedroom': {
        nouns: ['Bed', 'Pillow', 'Blanket', 'Dresser', 'Closet', 'Lamp', 'Window', 'Nightstand'],
        verbs: ['Sleep', 'Rest', 'Change', 'Dress', 'Wake', 'Dream', 'Relax']
    },
    'Bookstore': {
        nouns: ['Book', 'Novel', 'Magazine', 'Shelf', 'Author', 'Story', 'Page', 'Cover'],
        verbs: ['Read', 'Browse', 'Purchase', 'Search', 'Recommend', 'Select', 'Buy']
    },
    'Burger Place': {
        nouns: ['Burger', 'bill', 'cash', 'Patty', 'Bun', 'Fries', 'Ketchup', 'Pickle', 'Onion', 'Menu'],
        verbs: ['Order', 'Eat', 'Grill', 'Serve', 'Enjoy', 'Pay', 'Share']
    },
    'Chinese Restaurant': {
        nouns: ['Chopstick', 'Dish', 'Dumpling', 'Menu', 'Noodles', 'Rice', 'Sauce', 'Table'],
        verbs: ['Cook', 'Eat', 'Enjoy', 'Order', 'pay', 'Serve', 'Share', 'sit', 'Taste']
    },
    'City Hall': {
        nouns: ['Bureaucracy', 'Certificate', 'Council', 'Document', 'Law', 'Mayor', 'Meeting', 'Office', 'Politician', 'Record', 'Red-tape', 'Regulation'],
        verbs: ['Govern', 'argue', 'Meet', 'Decide', 'Vote', 'Register', 'Apply', 'Attend']
    },
    'Coffee Shop': {
        nouns: ['Coffee', 'Espresso', 'Latte', 'Cup', 'Bean', 'Barista', 'Pastry', 'Table'],
        verbs: ['Drink', 'Order', 'Sip', 'Relax', 'Meet', 'Work', 'Enjoy']
    },
    'Doctor\'s Office': {
        nouns: ['Patient', 'Medicine', 'Prescription', 'Stethoscope', 'Examination', 'Chart', 'Appointment', 'Diagnosis'],
        verbs: ['Examine', 'Diagnose', 'Prescribe', 'Treat', 'Consult', 'Check', 'Heal']
    },
    'Elevator': {
        nouns: ['Button', 'Floor', 'Door', 'Panel', 'Bell', 'Light', 'Mirror', 'Handrail'],
        verbs: ['Press', 'Ride', 'Wait', 'Enter', 'Exit', 'Go Up', 'Go Down']
    },
    'Fire Station': {
        nouns: ['Fire', 'Truck', 'Hose', 'Ladder', 'Helmet', 'Alarm', 'Rescue', 'Emergency'],
        verbs: ['Rescue', 'Extinguish', 'Respond', 'Climb', 'Save', 'Rush', 'Help']
    },
    'Friend\'s Place': {
        nouns: ['Friend', 'Couch', 'TV', 'Snack', 'Game', 'Conversation', 'Memory', 'Visit'],
        verbs: ['Visit', 'Chat', 'Relax', 'Play', 'Laugh', 'Hang', 'Share']
    },
    'Gas Station': {
        nouns: ['Gas', 'Pump', 'Fuel', 'toilet', 'Car', 'Nozzle', 'Price', 'Tank', 'Payment'],
        verbs: ['Fill', 'Pay', 'Drive', 'Stop', 'Refuel', 'Check', 'Purchase']
    },
    'Hallway': {
        nouns: ['Door', 'Wall', 'Floor', 'Light', 'Picture', 'Runner', 'Carpet', 'Corridor'],
        verbs: ['Walk', 'Pass', 'Enter', 'Exit', 'Cross', 'Move', 'Travel']
    },
    'Grocery Store': {
        nouns: ['Food', 'Cart', 'Aisle', 'Produce', 'Milk', 'Bread', 'Checkout', 'Bag'],
        verbs: ['Shop', 'Buy', 'Select', 'Compare', 'Pay', 'Load', 'Purchase']
    },
    'Gym': {
        nouns: ['Weights', 'Treadmill', 'Dumbbell', 'Bench', 'Trainer', 'Equipment', 'Exercise', 'Machine'],
        verbs: ['Exercise', 'Lift', 'Run', 'Train', 'Work Out', 'Stretch', 'Sweat']
    },
    'Hair Salon': {
        nouns: ['Hair', 'Scissors', 'Mirror', 'Chair', 'Shampoo', 'Stylist', 'Cut', 'Style'],
        verbs: ['Cut', 'Style', 'Wash', 'Color', 'Trim', 'Dry', 'Book']
    },
    'Hardware Store': {
        nouns: ['Tool', 'Nail', 'Screw', 'Hammer', 'Paint', 'Lumber', 'Drill', 'Wrench'],
        verbs: ['Buy', 'Fix', 'Build', 'Repair', 'Install', 'Measure', 'Select']
    },
    'Hospital': {
        nouns: ['Patient', 'Nurse', 'Doctor', 'Room', 'Medicine', 'Surgery', 'Emergency', 'Bed'],
        verbs: ['Treat', 'Operate', 'Heal', 'Care', 'Recover', 'Admit', 'Discharge']
    },
    'Hotel': {
        nouns: ['Room', 'Key', 'Lobby', 'Suite', 'Guest', 'Reception', 'Luggage', 'Service'],
        verbs: ['Check In', 'Stay', 'Rest', 'Reserve', 'Check Out', 'Unpack', 'Relax']
    },
    'Hotel Lobby': {
        nouns: ['Reception', 'Desk', 'Sofa', 'Luggage', 'Guest', 'Bell', 'Elevator', 'Concierge'],
        verbs: ['Check In', 'Wait', 'Sit', 'Meet', 'Ask', 'Register', 'Relax']
    },
    'Hotel Spa': {
        nouns: ['Massage', 'Treatment', 'Towel', 'Robes', 'Steam', 'Sauna', 'Therapist', 'Relaxation'],
        verbs: ['Relax', 'Massage', 'Unwind', 'Treat', 'Pamper', 'Enjoy', 'Book']
    },
    'Kindergarten': {
        nouns: ['Child', 'Toy', 'Teacher', 'Playground', 'Crayon', 'Story', 'Snack', 'Activity'],
        verbs: ['Play', 'Learn', 'Color', 'Sing', 'Read', 'Nap', 'Share']
    },
    'Kids Club': {
        nouns: ['Game', 'Toy', 'Activity', 'Playground', 'Friend', 'Craft', 'Snack', 'Supervisor'],
        verbs: ['Play', 'Have Fun', 'Make', 'Create', 'Socialize', 'Enjoy', 'Participate']
    },
    'Kitchen': {
        nouns: ['Stove', 'Refrigerator', 'Sink', 'Counter', 'Dish', 'Pot', 'Pan', 'Utensil'],
        verbs: ['Cook', 'Bake', 'Prepare', 'Wash', 'Eat', 'Clean', 'Store']
    },
    'Library': {
        nouns: ['Book', 'Shelf', 'Quiet', 'Study', 'Card', 'Librarian', 'Reading', 'Knowledge'],
        verbs: ['Read', 'Borrow', 'Study', 'Research', 'Return', 'Browse', 'Learn']
    },
    'Living Room': {
        nouns: ['Sofa', 'TV', 'Coffee Table', 'Couch', 'Remote', 'Magazine', 'Lamp', 'Carpet'],
        verbs: ['Relax', 'Watch', 'Sit', 'Read', 'Entertain', 'Chat', 'Unwind']
    },
    'Museum': {
        nouns: ['Art', 'Exhibit', 'Painting', 'Sculpture', 'Gallery', 'History', 'Tour', 'Display'],
        verbs: ['View', 'Explore', 'Learn', 'Admire', 'Tour', 'Discover', 'Appreciate']
    },
    'Park': {
        nouns: ['Birds', 'Trees', 'Grass', 'Bench', 'Path', 'Playground', 'Flowers', 'Picnic'],
        verbs: ['Play', 'Walk', 'Sit', 'Picnic', 'Relax', 'Exercise', 'Enjoy']
    },
    'Parent\'s Place': {
        nouns: ['Family', 'Home', 'Memory', 'Photo', 'Meal', 'Conversation', 'Love', 'Visit'],
        verbs: ['Visit', 'Eat', 'Talk', 'Hug', 'Remember', 'Share', 'Relax']
    },
    'Pharmacy': {
        nouns: ['Medicine', 'Prescription', 'Pill', 'Pharmacist', 'Health', 'Vitamin', 'Bandage', 'Advice'],
        verbs: ['Fill', 'Purchase', 'Consult', 'Pick Up', 'Advise', 'Recommend', 'Buy']
    },
    'Playground': {
        nouns: ['Slide', 'Swing', 'Sandbox', 'Monkey Bars', 'Child', 'Toy', 'Bench', 'Equipment'],
        verbs: ['Play', 'Swing', 'Slide', 'Climb', 'Run', 'Jump', 'Have Fun']
    },
    'Pizza Place': {
        nouns: ['Pizza', 'Slice', 'Crust', 'Topping', 'Cheese', 'Pepperoni', 'Oven', 'Menu'],
        verbs: ['Order', 'Eat', 'Slice', 'Deliver', 'Share', 'Enjoy', 'Pay']
    },
    'Police Station': {
        nouns: ['Officer', 'Badge', 'Report', 'Crime', 'Evidence', 'Patrol', 'Law', 'Safety'],
        verbs: ['Arrest', 'Investigate', 'Protect', 'Report', 'Question', 'Serve', 'Enforce']
    },
    'Post Office': {
        nouns: ['Mail', 'Package', 'Stamp', 'Letter', 'Envelope', 'Box', 'Address', 'Delivery'],
        verbs: ['Send', 'Mail', 'Ship', 'Receive', 'Package', 'Post', 'Deliver']
    },
    'Restaurant': {
        nouns: ['Food', 'Menu', 'Waiter', 'Table', 'Dish', 'Meal', 'Order', 'Bill'],
        verbs: ['Eat', 'Order', 'Dine', 'Taste', 'Enjoy', 'Reserve', 'Pay']
    },
    'School': {
        nouns: ['Student', 'Teacher', 'Classroom', 'Desk', 'Book', 'Lesson', 'Homework', 'Test'],
        verbs: ['Learn', 'Study', 'Teach', 'Read', 'Write', 'Attend', 'Graduate']
    },
    'Theater': {
        nouns: ['Stage', 'Actor', 'Play', 'Audience', 'Ticket', 'Curtain', 'Performance', 'Drama'],
        verbs: ['Watch', 'Perform', 'Applaud', 'Act', 'Entertain', 'Attend', 'Enjoy']
    },
    'Train Station': {
        nouns: ['Train', 'Ticket', 'Platform', 'Schedule', 'Track', 'Passenger', 'Luggage', 'Departure'],
        verbs: ['Board', 'Depart', 'Arrive', 'Wait', 'Travel', 'Purchase', 'Ride']
    }
};
