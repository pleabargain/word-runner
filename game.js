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
            past: ['Accomplished', 'Adapted', 'Administered', 'Analyzed', 'Assessed', 'Authorized', 'Collaborated', 'Composed', 'Conducted', 'Consolidated', 'Coordinated', 'Demonstrated', 'Designed', 'Developed', 'Distributed', 'Documented', 'Eliminated', 'Enhanced', 'Established', 'Evaluated', 'Executed', 'Expanded', 'Facilitated', 'Formulated', 'Generated', 'Identified', 'Implemented', 'Improved', 'Initiated', 'Integrated', 'Investigated', 'Maintained', 'Managed', 'Monitored', 'Negotiated', 'Optimized', 'Organized', 'Performed', 'Planned', 'Presented', 'Prioritized', 'Processed', 'Produced', 'Promoted', 'Proposed', 'Provided', 'Recommended', 'Resolved', 'Restructured', 'Reviewed', 'Selected', 'Simplified', 'Standardized', 'Strengthened', 'Structured', 'Supervised', 'Supported', 'Transformed', 'Utilized', 'Validated', 'Verified'],
            present: ['Accomplish', 'Adapt', 'Administer', 'Analyze', 'Assess', 'Authorize', 'Collaborate', 'Compose', 'Conduct', 'Consolidate', 'Coordinate', 'Demonstrate', 'Design', 'Develop', 'Distribute', 'Document', 'Eliminate', 'Enhance', 'Establish', 'Evaluate', 'Execute', 'Expand', 'Facilitate', 'Formulate', 'Generate', 'Identify', 'Implement', 'Improve', 'Initiate', 'Integrate', 'Investigate', 'Maintain', 'Manage', 'Monitor', 'Negotiate', 'Optimize', 'Organize', 'Perform', 'Plan', 'Present', 'Prioritize', 'Process', 'Produce', 'Promote', 'Propose', 'Provide', 'Recommend', 'Resolve', 'Restructure', 'Review', 'Select', 'Simplify', 'Standardize', 'Strengthen', 'Structure', 'Supervise', 'Support', 'Transform', 'Utilize', 'Validate', 'Verify'],
            future: ['Will Accomplish', 'Will Adapt', 'Will Administer', 'Will Analyze', 'Will Assess', 'Will Authorize', 'Will Collaborate', 'Will Compose', 'Will Conduct', 'Will Consolidate', 'Will Coordinate', 'Will Demonstrate', 'Will Design', 'Will Develop', 'Will Distribute', 'Will Document', 'Will Eliminate', 'Will Enhance', 'Will Establish', 'Will Evaluate', 'Will Execute', 'Will Expand', 'Will Facilitate', 'Will Formulate', 'Will Generate', 'Will Identify', 'Will Implement', 'Will Improve', 'Will Initiate', 'Will Integrate', 'Will Investigate', 'Will Maintain', 'Will Manage', 'Will Monitor', 'Will Negotiate', 'Will Optimize', 'Will Organize', 'Will Perform', 'Will Plan', 'Will Present', 'Will Prioritize', 'Will Process', 'Will Produce', 'Will Promote', 'Will Propose', 'Will Provide', 'Will Recommend', 'Will Resolve', 'Will Restructure', 'Will Review', 'Will Select', 'Will Simplify', 'Will Standardize', 'Will Strengthen', 'Will Structure', 'Will Supervise', 'Will Support', 'Will Transform', 'Will Utilize', 'Will Validate', 'Will Verify']
        },
        nouns: ['Achievement', 'Agenda', 'Analysis', 'Application', 'Approach', 'Assessment', 'Assignment', 'Assumption', 'Authority', 'Awareness', 'Balance', 'Barrier', 'Benefit', 'Budget', 'Capability', 'Capacity', 'Category', 'Challenge', 'Characteristic', 'Circumstance', 'Clarification', 'Collaboration', 'Comment', 'Commitment', 'Communication', 'Comparison', 'Competence', 'Competition', 'Complexity', 'Component', 'Concept', 'Conclusion', 'Condition', 'Conference', 'Confidence', 'Conflict', 'Connection', 'Consequence', 'Consideration', 'Consistency', 'Constraint', 'Construction', 'Contact', 'Context', 'Contribution', 'Control', 'Cooperation', 'Coordination', 'Core', 'Correlation', 'Criterion', 'Culture', 'Current', 'Cycle', 'Data', 'Debate', 'Decision', 'Definition', 'Degree', 'Delivery', 'Demand', 'Description', 'Design', 'Detail', 'Development', 'Device', 'Difference', 'Difficulty', 'Dimension', 'Direction', 'Discipline', 'Discussion', 'Distribution', 'Document', 'Draft', 'Duty', 'Economy', 'Effect', 'Efficiency', 'Element', 'Emphasis', 'Employee', 'Encouragement', 'Energy', 'Enforcement', 'Engagement', 'Enhancement', 'Enterprise', 'Environment', 'Equipment', 'Error', 'Establishment', 'Estimate', 'Evaluation', 'Event', 'Evidence', 'Example', 'Exception', 'Exchange', 'Execution', 'Exercise', 'Existence', 'Expansion', 'Expectation', 'Experience', 'Experiment', 'Expert', 'Explanation', 'Expression', 'Extension', 'Extent', 'Factor', 'Failure', 'Feature', 'Feedback', 'Field', 'Figure', 'Finding', 'Focus', 'Form', 'Format', 'Formation', 'Formula', 'Foundation', 'Framework', 'Function', 'Fund', 'Gap', 'Goal', 'Grade', 'Grant', 'Group', 'Guidance', 'Guideline', 'Handling', 'Harmony', 'Hierarchy', 'Highlight', 'History', 'Holiday', 'Hypothesis', 'Idea', 'Identification', 'Image', 'Impact', 'Implementation', 'Implication', 'Importance', 'Improvement', 'Incentive', 'Incident', 'Income', 'Increase', 'Independence', 'Index', 'Indication', 'Individual', 'Industry', 'Inequality', 'Influence', 'Information', 'Infrastructure', 'Initiative', 'Innovation', 'Input', 'Inquiry', 'Inspection', 'Instance', 'Institution', 'Instruction', 'Instrument', 'Integration', 'Intelligence', 'Intensity', 'Intention', 'Interaction', 'Interest', 'Interface', 'Interference', 'Interpretation', 'Intervention', 'Interview', 'Introduction', 'Investment', 'Involvement', 'Issue', 'Item', 'Job', 'Journal', 'Judgment', 'Key', 'Knowledge', 'Label', 'Labor', 'Language', 'Law', 'Layer', 'Leadership', 'Learning', 'Legislation', 'Level', 'License', 'Limit', 'Line', 'Link', 'List', 'Literature', 'Location', 'Logic', 'Machine', 'Maintenance', 'Management', 'Manner', 'Manual', 'Manufacture', 'Market', 'Material', 'Matrix', 'Matter', 'Measure', 'Mechanism', 'Media', 'Meeting', 'Member', 'Memory', 'Mention', 'Message', 'Method', 'Methodology', 'Mind', 'Mission', 'Model', 'Modification', 'Module', 'Moment', 'Mood', 'Motion', 'Motivation', 'Movement', 'Nature', 'Need', 'Network', 'Note', 'Notice', 'Notification', 'Number', 'Object', 'Objective', 'Observation', 'Obstacle', 'Occasion', 'Occurrence', 'Offer', 'Office', 'Operation', 'Opinion', 'Opportunity', 'Option', 'Order', 'Organization', 'Origin', 'Outcome', 'Output', 'Overview', 'Owner', 'Package', 'Page', 'Parameter', 'Part', 'Participation', 'Partner', 'Partnership', 'Party', 'Passage', 'Pattern', 'Payment', 'Peace', 'People', 'Percentage', 'Perception', 'Performance', 'Period', 'Permission', 'Person', 'Personality', 'Perspective', 'Phase', 'Philosophy', 'Phone', 'Plan', 'Planning', 'Platform', 'Player', 'Point', 'Policy', 'Pollution', 'Population', 'Portion', 'Position', 'Possibility', 'Post', 'Potential', 'Power', 'Practice', 'Preference', 'Preparation', 'Presence', 'Presentation', 'Pressure', 'Prevention', 'Price', 'Principle', 'Priority', 'Problem', 'Procedure', 'Process', 'Product', 'Production', 'Productivity', 'Profession', 'Professional', 'Profile', 'Profit', 'Program', 'Progress', 'Project', 'Projection', 'Promise', 'Promotion', 'Proof', 'Property', 'Proportion', 'Proposal', 'Prospect', 'Protection', 'Protocol', 'Provider', 'Provision', 'Purpose', 'Quality', 'Quantity', 'Question', 'Range', 'Rank', 'Rate', 'Ratio', 'Reaction', 'Reading', 'Reality', 'Reason', 'Reasoning', 'Reception', 'Recognition', 'Recommendation', 'Record', 'Recovery', 'Reduction', 'Reference', 'Reflection', 'Reform', 'Refusal', 'Region', 'Register', 'Regulation', 'Relation', 'Relationship', 'Release', 'Relevance', 'Relief', 'Remainder', 'Remedy', 'Reminder', 'Removal', 'Rent', 'Repair', 'Repayment', 'Repetition', 'Replacement', 'Reply', 'Report', 'Representation', 'Reputation', 'Request', 'Requirement', 'Research', 'Reservation', 'Residence', 'Resolution', 'Resort', 'Resource', 'Response', 'Responsibility', 'Rest', 'Restriction', 'Result', 'Retail', 'Retirement', 'Return', 'Revenue', 'Review', 'Revolution', 'Reward', 'Rhythm', 'Rights', 'Risk', 'Role', 'Room', 'Route', 'Rule', 'Safety', 'Sale', 'Sample', 'Scale', 'Scandal', 'Scene', 'Schedule', 'Scheme', 'Scholar', 'School', 'Science', 'Scope', 'Score', 'Screen', 'Script', 'Section', 'Sector', 'Security', 'Selection', 'Self', 'Seller', 'Sense', 'Sensitivity', 'Sentence', 'Sequence', 'Series', 'Service', 'Session', 'Setting', 'Shape', 'Share', 'Shift', 'Shock', 'Shop', 'Shortage', 'Show', 'Side', 'Sight', 'Sign', 'Signal', 'Signature', 'Significance', 'Silence', 'Similarity', 'Situation', 'Size', 'Skill', 'Society', 'Software', 'Solution', 'Source', 'Space', 'Speaker', 'Specialist', 'Species', 'Specification', 'Specimen', 'Speech', 'Speed', 'Spirit', 'Sport', 'Spot', 'Spread', 'Square', 'Stability', 'Staff', 'Stage', 'Stake', 'Standard', 'Standing', 'Start', 'State', 'Statement', 'Station', 'Status', 'Step', 'Stock', 'Storage', 'Store', 'Story', 'Strategy', 'Stream', 'Street', 'Strength', 'Stress', 'Stretch', 'Strike', 'String', 'Strip', 'Structure', 'Struggle', 'Student', 'Study', 'Style', 'Subject', 'Submission', 'Substance', 'Substitute', 'Success', 'Succession', 'Suggestion', 'Summary', 'Sun', 'Supervision', 'Supply', 'Support', 'Surface', 'Surplus', 'Surprise', 'Survey', 'Survival', 'Suspicion', 'Symptom', 'System', 'Table', 'Tactic', 'Tale', 'Talk', 'Tank', 'Target', 'Task', 'Taste', 'Tax', 'Teacher', 'Team', 'Technique', 'Technology', 'Telephone', 'Television', 'Temper', 'Temperature', 'Temple', 'Tendency', 'Tension', 'Term', 'Territory', 'Test', 'Text', 'Thanks', 'Theme', 'Theory', 'Thing', 'Thought', 'Threat', 'Threshold', 'Throat', 'Ticket', 'Time', 'Title', 'Tone', 'Tool', 'Topic', 'Total', 'Touch', 'Tour', 'Tourist', 'Tower', 'Town', 'Track', 'Trade', 'Tradition', 'Traffic', 'Train', 'Training', 'Transaction', 'Transfer', 'Transformation', 'Transition', 'Translation', 'Transmission', 'Transport', 'Travel', 'Treatment', 'Treaty', 'Tree', 'Trial', 'Tribe', 'Trick', 'Trip', 'Trouble', 'Trust', 'Truth', 'Tune', 'Turn', 'Type', 'Uncertainty', 'Understanding', 'Unemployment', 'Union', 'Unit', 'Unity', 'University', 'Update', 'Upgrade', 'Use', 'User', 'Utility', 'Utilization', 'Vacation', 'Value', 'Variation', 'Variety', 'Vast', 'Vehicle', 'Venture', 'Version', 'Vessel', 'Vice', 'Victim', 'Video', 'View', 'Village', 'Violence', 'Virtue', 'Virus', 'Vision', 'Visit', 'Visitor', 'Visual', 'Voice', 'Volume', 'Vote', 'Wage', 'Walk', 'Wall', 'War', 'Warning', 'Waste', 'Water', 'Wave', 'Way', 'Wealth', 'Weapon', 'Weather', 'Web', 'Website', 'Week', 'Weight', 'Welfare', 'Well', 'West', 'Wheel', 'Wife', 'Will', 'Wind', 'Window', 'Wine', 'Winner', 'Winter', 'Wire', 'Wisdom', 'Wish', 'Witness', 'Woman', 'Wonder', 'Wood', 'Word', 'Work', 'Worker', 'Working', 'Workshop', 'World', 'Worry', 'Worth', 'Writer', 'Writing', 'Yard', 'Year', 'Yield', 'Youth', 'Zone'],
        adjectives: ['Abandoned', 'Able', 'Absolute', 'Abstract', 'Abundant', 'Academic', 'Acceptable', 'Accessible', 'Accurate', 'Active', 'Actual', 'Acute', 'Adequate', 'Administrative', 'Advanced', 'Adverse', 'Aesthetic', 'Affordable', 'Aggressive', 'Agreeable', 'Agricultural', 'Alert', 'Alive', 'All', 'Alone', 'Alternative', 'Amazing', 'Ambiguous', 'Ambitious', 'Ample', 'Ancient', 'Angry', 'Annual', 'Anxious', 'Apparent', 'Appealing', 'Applicable', 'Appropriate', 'Arbitrary', 'Arctic', 'Armed', 'Artificial', 'Artistic', 'Ashamed', 'Asleep', 'Associate', 'Attractive', 'Authentic', 'Automatic', 'Available', 'Average', 'Aware', 'Awful', 'Awkward', 'Back', 'Bad', 'Bare', 'Basic', 'Beautiful', 'Behavioral', 'Beloved', 'Beneficial', 'Best', 'Better', 'Big', 'Biological', 'Bitter', 'Black', 'Blank', 'Blind', 'Bloody', 'Blue', 'Bold', 'Boring', 'Bottom', 'Brave', 'Brief', 'Bright', 'Brilliant', 'Broad', 'Broken', 'Brown', 'Budget', 'Bureaucratic', 'Busy', 'Calm', 'Capable', 'Capital', 'Careful', 'Careless', 'Casual', 'Catholic', 'Causal', 'Central', 'Certain', 'Changing', 'Characteristic', 'Charming', 'Cheap', 'Chemical', 'Chief', 'Chosen', 'Christian', 'Chronic', 'Circular', 'Civic', 'Civil', 'Civilian', 'Classic', 'Classical', 'Clean', 'Clear', 'Clever', 'Clinical', 'Close', 'Closed', 'Cloudy', 'Clumsy', 'Coastal', 'Cognitive', 'Coherent', 'Cold', 'Collective', 'Colorful', 'Combined', 'Comfortable', 'Commercial', 'Common', 'Communist', 'Comparative', 'Compatible', 'Competent', 'Competitive', 'Complete', 'Complex', 'Complicated', 'Comprehensive', 'Compulsory', 'Computational', 'Concentrated', 'Conceptual', 'Concerned', 'Concrete', 'Confident', 'Confidential', 'Conscious', 'Consecutive', 'Conservative', 'Considerable', 'Consistent', 'Constant', 'Constitutional', 'Constructive', 'Contemporary', 'Content', 'Continental', 'Continued', 'Continuous', 'Contractual', 'Contrary', 'Controversial', 'Convenient', 'Conventional', 'Convincing', 'Cool', 'Cooperative', 'Coordinated', 'Core', 'Corporate', 'Correct', 'Corresponding', 'Costly', 'Courageous', 'Creative', 'Critical', 'Cross', 'Crucial', 'Crude', 'Cultural', 'Curious', 'Current', 'Curved', 'Customary', 'Cute', 'Daily', 'Damaged', 'Damp', 'Dangerous', 'Dark', 'Dead', 'Deaf', 'Dear', 'Decent', 'Decisive', 'Deep', 'Defensive', 'Deficient', 'Definite', 'Deliberate', 'Delicate', 'Delicious', 'Delightful', 'Democratic', 'Dense', 'Dental', 'Dependent', 'Depressed', 'Descriptive', 'Desperate', 'Detailed', 'Determined', 'Developed', 'Developing', 'Devoted', 'Different', 'Difficult', 'Digital', 'Diplomatic', 'Direct', 'Dirty', 'Disabled', 'Disappointed', 'Disastrous', 'Disciplinary', 'Discrete', 'Discriminatory', 'Distant', 'Distinct', 'Distinctive', 'Distinguished', 'Distributed', 'Disturbing', 'Diverse', 'Divine', 'Domestic', 'Dominant', 'Double', 'Doubtful', 'Down', 'Dramatic', 'Drastic', 'Dreadful', 'Drunk', 'Dry', 'Due', 'Dull', 'Dumb', 'Durable', 'Dynamic', 'Eager', 'Early', 'Earnest', 'Earthly', 'Easy', 'Economic', 'Educational', 'Effective', 'Efficient', 'Elaborate', 'Elastic', 'Elderly', 'Elected', 'Electric', 'Electronic', 'Elegant', 'Elementary', 'Eligible', 'Emotional', 'Empirical', 'Empty', 'Enclosed', 'Encouraging', 'Endless', 'Energetic', 'Engaged', 'English', 'Enormous', 'Enough', 'Enthusiastic', 'Entire', 'Environmental', 'Equal', 'Equivalent', 'Erotic', 'Essential', 'Established', 'Eternal', 'Ethical', 'Ethnic', 'European', 'Even', 'Evening', 'Eventual', 'Everlasting', 'Every', 'Evident', 'Evil', 'Exact', 'Exaggerated', 'Excellent', 'Exceptional', 'Excessive', 'Exciting', 'Exclusive', 'Executive', 'Exemplary', 'Exhausted', 'Exotic', 'Expensive', 'Experimental', 'Expert', 'Explicit', 'Explosive', 'Extensive', 'External', 'Extra', 'Extraordinary', 'Extreme', 'Fabulous', 'Facial', 'Factual', 'Faint', 'Fair', 'Faithful', 'Fake', 'False', 'Familiar', 'Famous', 'Fancy', 'Fantastic', 'Far', 'Fascinating', 'Fashionable', 'Fast', 'Fat', 'Fatal', 'Favorable', 'Favorite', 'Fearful', 'Feasible', 'Federal', 'Feeble', 'Female', 'Feminine', 'Fertile', 'Fierce', 'Fifth', 'Final', 'Financial', 'Fine', 'Firm', 'First', 'Fiscal', 'Fit', 'Fixed', 'Flat', 'Flexible', 'Floating', 'Fluent', 'Fluid', 'Focused', 'Fond', 'Foolish', 'Forbidden', 'Foreign', 'Formal', 'Formidable', 'Forthcoming', 'Fortunate', 'Forward', 'Foul', 'Found', 'Fragile', 'Frank', 'Free', 'Frequent', 'Fresh', 'Friendly', 'Frightened', 'Front', 'Frozen', 'Fruitful', 'Full', 'Functional', 'Fundamental', 'Funny', 'Furious', 'Further', 'Future', 'Gainful', 'Gay', 'General', 'Generous', 'Genetic', 'Gentle', 'Genuine', 'Geographical', 'Geological', 'Geometric', 'German', 'Giant', 'Gifted', 'Gigantic', 'Given', 'Glad', 'Glamorous', 'Glas', 'Global', 'Glorious', 'Golden', 'Good', 'Governmental', 'Graceful', 'Gradual', 'Grand', 'Graphic', 'Grateful', 'Grave', 'Great', 'Greedy', 'Green', 'Grey', 'Grim', 'Gross', 'Ground', 'Growing', 'Guilty', 'Handicapped', 'Handsome', 'Happy', 'Hard', 'Harmful', 'Harmless', 'Harmonious', 'Harsh', 'Hasty', 'Hateful', 'Healthy', 'Heavy', 'Helpful', 'Helpless', 'Hesitant', 'Hidden', 'High', 'Hilarious', 'Historical', 'Hollow', 'Holy', 'Homeless', 'Honest', 'Honorable', 'Hopeful', 'Hopeless', 'Horizontal', 'Horrible', 'Hostile', 'Hot', 'Huge', 'Human', 'Humble', 'Humorous', 'Hungry', 'Hurried', 'Hurt', 'Ideal', 'Identical', 'Ideological', 'Idle', 'Ignorant', 'Ill', 'Illegal', 'Illiterate', 'Imaginary', 'Immediate', 'Immense', 'Immigrant', 'Immoral', 'Impartial', 'Impatient', 'Imperfect', 'Impersonal', 'Important', 'Impossible', 'Impressive', 'Improved', 'Inadequate', 'Inappropriate', 'Incapable', 'Incentive', 'Inclined', 'Inclusive', 'Incoming', 'Incompetent', 'Incomplete', 'Inconsistent', 'Inconvenient', 'Incorrect', 'Increasing', 'Incredible', 'Independent', 'Indifferent', 'Indigenous', 'Indirect', 'Individual', 'Indoor', 'Industrial', 'Ineffective', 'Inefficient', 'Inevitable', 'Inexpensive', 'Inexperienced', 'Infamous', 'Infant', 'Inferior', 'Infinite', 'Influential', 'Informal', 'Inherent', 'Initial', 'Injured', 'Inland', 'Inner', 'Innocent', 'Innovative', 'Inquisitive', 'Insane', 'Insecure', 'Insensitive', 'Inside', 'Insightful', 'Insignificant', 'Inspiring', 'Instant', 'Institutional', 'Insufficient', 'Intact', 'Integral', 'Integrated', 'Intellectual', 'Intelligent', 'Intense', 'Intensive', 'Intentional', 'Interactive', 'Interested', 'Interesting', 'Interim', 'Interior', 'Intermediate', 'Intermittent', 'Internal', 'International', 'Interpersonal', 'Intimate', 'Intricate', 'Intrinsic', 'Introductory', 'Invalid', 'Invaluable', 'Invasive', 'Inventive', 'Invisible', 'Involuntary', 'Involved', 'Ironic', 'Irregular', 'Irrelevant', 'Irresponsible', 'Irritated', 'Isolated', 'Italian', 'Itchy', 'Jealous', 'Jewish', 'Jolly', 'Jovial', 'Joyful', 'Judicial', 'Judicious', 'Junior', 'Just', 'Justified', 'Juvenile', 'Keen', 'Key', 'Kind', 'Knowledgeable', 'Known', 'Labor', 'Lack', 'Lacking', 'Large', 'Last', 'Late', 'Latin', 'Latter', 'Laughable', 'Launched', 'Lawful', 'Lazy', 'Leading', 'Lean', 'Learned', 'Left', 'Legal', 'Legislative', 'Legitimate', 'Lengthy', 'Less', 'Lethal', 'Level', 'Liberal', 'Light', 'Like', 'Likely', 'Limited', 'Linguistic', 'Liquid', 'Literary', 'Little', 'Live', 'Lively', 'Living', 'Local', 'Logical', 'Lonely', 'Long', 'Loose', 'Lost', 'Loud', 'Lovely', 'Low', 'Loyal', 'Lucky', 'Luxurious', 'Mad', 'Magnetic', 'Magnificent', 'Main', 'Major', 'Male', 'Mammoth', 'Managerial', 'Manifest', 'Manipulative', 'Manual', 'Many', 'Marginal', 'Marine', 'Marked', 'Married', 'Marvelous', 'Masculine', 'Mass', 'Massive', 'Master', 'Mature', 'Maximum', 'Mean', 'Meaningful', 'Mechanical', 'Medical', 'Medieval', 'Medium', 'Melancholic', 'Memorable', 'Mental', 'Mere', 'Merry', 'Metropolitan', 'Middle', 'Mighty', 'Mild', 'Military', 'Mindful', 'Minimal', 'Minimum', 'Minor', 'Miserable', 'Misleading', 'Missing', 'Mixed', 'Mobile', 'Moderate', 'Modern', 'Modest', 'Momentary', 'Monetary', 'Monthly', 'Moral', 'More', 'Most', 'Motionless', 'Motivated', 'Motor', 'Mountainous', 'Moving', 'Much', 'Multiple', 'Municipal', 'Musical', 'Mutual', 'Mysterious', 'Mythical', 'Naked', 'Narrow', 'Nasty', 'National', 'Native', 'Natural', 'Naughty', 'Naval', 'Near', 'Nearby', 'Neat', 'Necessary', 'Negative', 'Neglected', 'Negligible', 'Neighboring', 'Nervous', 'Net', 'Neutral', 'New', 'Next', 'Nice', 'Noble', 'Noisy', 'Nominal', 'Non', 'Normal', 'Northern', 'Notable', 'Noted', 'Noticeable', 'Novel', 'Nuclear', 'Numerous', 'Objective', 'Obligatory', 'Obscure', 'Observant', 'Obsolete', 'Obvious', 'Occasional', 'Occupational', 'Odd', 'Official', 'Old', 'Older', 'Ominous', 'Ongoing', 'Only', 'Open', 'Operational', 'Opposite', 'Optimal', 'Optimistic', 'Optional', 'Oral', 'Orange', 'Ordinary', 'Organic', 'Organizational', 'Original', 'Orthodox', 'Other', 'Outdoor', 'Outer', 'Outgoing', 'Outstanding', 'Overall', 'Overhead', 'Overnight', 'Overseas', 'Overwhelming', 'Own', 'Packed', 'Painful', 'Pale', 'Panic', 'Parallel', 'Parliamentary', 'Partial', 'Particular', 'Passionate', 'Passive', 'Past', 'Patient', 'Peaceful', 'Peak', 'Peculiar', 'Perfect', 'Permanent', 'Permissible', 'Persistent', 'Personal', 'Persuasive', 'Pessimistic', 'Petty', 'Philosophical', 'Physical', 'Pink', 'Pitiful', 'Plain', 'Planned', 'Plastic', 'Pleasant', 'Pleased', 'Plenty', 'Plural', 'Poetic', 'Poignant', 'Pointless', 'Poised', 'Polite', 'Political', 'Poor', 'Popular', 'Portable', 'Positive', 'Possible', 'Post', 'Potential', 'Powerful', 'Practical', 'Precious', 'Precise', 'Predictable', 'Preferable', 'Pregnant', 'Preliminary', 'Premature', 'Premium', 'Prepared', 'Present', 'Presidential', 'Pressing', 'Pretty', 'Previous', 'Priceless', 'Primary', 'Prime', 'Primitive', 'Principal', 'Prior', 'Prison', 'Private', 'Privileged', 'Probable', 'Productive', 'Professional', 'Profitable', 'Profound', 'Progressive', 'Prolific', 'Prominent', 'Promising', 'Proper', 'Proportional', 'Proposed', 'Prosperous', 'Proud', 'Provincial', 'Psychiatric', 'Psychological', 'Public', 'Punctual', 'Pure', 'Purple', 'Purposeful', 'Puzzled', 'Qualified', 'Qualitative', 'Quality', 'Quantitative', 'Quick', 'Quiet', 'Racial', 'Radical', 'Rapid', 'Rare', 'Rash', 'Rational', 'Raw', 'Reactive', 'Ready', 'Real', 'Realistic', 'Reasonable', 'Recent', 'Reckless', 'Recognized', 'Recommended', 'Record', 'Red', 'Reduced', 'Redundant', 'Refined', 'Reflective', 'Regional', 'Regular', 'Regulatory', 'Rejected', 'Related', 'Relative', 'Relevant', 'Reliable', 'Religious', 'Reluctant', 'Remarkable', 'Remedial', 'Remote', 'Renewable', 'Renowned', 'Repetitive', 'Representative', 'Reproductive', 'Republican', 'Required', 'Reserved', 'Residential', 'Resistant', 'Resolute', 'Respectable', 'Respectful', 'Respective', 'Responsible', 'Responsive', 'Restless', 'Restricted', 'Resulting', 'Retail', 'Retired', 'Retrospective', 'Revolutionary', 'Rich', 'Ridiculous', 'Right', 'Rigid', 'Ripe', 'Rising', 'Rival', 'Robust', 'Romantic', 'Rotten', 'Rough', 'Round', 'Royal', 'Rubber', 'Rude', 'Rural', 'Rushed', 'Sacred', 'Sad', 'Safe', 'Salty', 'Same', 'Satisfactory', 'Satisfied', 'Satisfying', 'Scared', 'Scarce', 'Scary', 'Scattered', 'Scientific', 'Seasonal', 'Secondary', 'Secret', 'Secure', 'Selective', 'Self', 'Selfish', 'Semantic', 'Semi', 'Senior', 'Sensible', 'Sensitive', 'Separate', 'Serious', 'Severe', 'Sexual', 'Shady', 'Shallow', 'Shameful', 'Shaped', 'Sharp', 'Sheer', 'Shiny', 'Shocked', 'Short', 'Shy', 'Sick', 'Significant', 'Silent', 'Silly', 'Similar', 'Simple', 'Simultaneous', 'Sincere', 'Single', 'Skeptical', 'Skilled', 'Skinny', 'Sleepy', 'Slight', 'Slim', 'Slippery', 'Slow', 'Small', 'Smart', 'Smooth', 'Social', 'Societal', 'Soft', 'Solar', 'Sole', 'Solid', 'Solitary', 'Solo', 'Sophisticated', 'Sore', 'Sorry', 'Sound', 'Sour', 'Southern', 'Soviet', 'Spare', 'Sparse', 'Spatial', 'Special', 'Specialized', 'Specific', 'Spectacular', 'Speculative', 'Spiritual', 'Splendid', 'Spontaneous', 'Square', 'Stable', 'Standard', 'Standing', 'Startling', 'State', 'Static', 'Statistical', 'Steady', 'Steep', 'Sticky', 'Stiff', 'Still', 'Stimulating', 'Stingy', 'Stoic', 'Stolen', 'Straight', 'Strange', 'Strategic', 'Strict', 'Striking', 'Strong', 'Structural', 'Stubborn', 'Stupid', 'Stylish', 'Subjective', 'Subsequent', 'Substantial', 'Subtle', 'Successful', 'Sudden', 'Sufficient', 'Suitable', 'Super', 'Superb', 'Superficial', 'Superior', 'Supernatural', 'Supreme', 'Sure', 'Surprised', 'Surprising', 'Surrounding', 'Suspicious', 'Sustainable', 'Sweet', 'Swift', 'Sympathetic', 'Symptomatic', 'Synthetic', 'Systematic', 'Tall', 'Tame', 'Tangible', 'Tart', 'Tasteful', 'Tasty', 'Technical', 'Technological', 'Teenage', 'Temporary', 'Tender', 'Tense', 'Terrible', 'Terrific', 'Territorial', 'Terrorist', 'Testy', 'Theoretical', 'Thick', 'Thin', 'Thirsty', 'Thorough', 'Thoughtful', 'Threatening', 'Tight', 'Tiny', 'Tired', 'Tiresome', 'Tolerant', 'Top', 'Total', 'Tough', 'Toxic', 'Traditional', 'Tragic', 'Trained', 'Transparent', 'Tremendous', 'Tricky', 'Trivial', 'Tropical', 'Troubled', 'True', 'Trusting', 'Trustworthy', 'Typical', 'Ugly', 'Ultimate', 'Unable', 'Unacceptable', 'Unaware', 'Uncertain', 'Uncomfortable', 'Uncommon', 'Unconscious', 'Unconventional', 'Uncovered', 'Under', 'Underlying', 'Underground', 'Understanding', 'Undesirable', 'Undoubted', 'Uneasy', 'Unemployed', 'Unequal', 'Unexpected', 'Unexplained', 'Unfair', 'Unfamiliar', 'Unfavorable', 'Unfinished', 'Unfortunate', 'Unhappy', 'Unhealthy', 'Unified', 'Uniform', 'Unilateral', 'Unique', 'United', 'Universal', 'Unknown', 'Unlawful', 'Unlike', 'Unlikely', 'Unlimited', 'Unnecessary', 'Unpleasant', 'Unprecedented', 'Unpredictable', 'Unrealistic', 'Unreasonable', 'Unrelated', 'Unreliable', 'Unrestricted', 'Unsafe', 'Unsatisfactory', 'Unsuccessful', 'Unusual', 'Unwilling', 'Up', 'Upper', 'Upright', 'Upset', 'Upstairs', 'Urban', 'Urgent', 'Usable', 'Used', 'Useful', 'Useless', 'Usual', 'Utter', 'Vacant', 'Vague', 'Valid', 'Valuable', 'Variable', 'Various', 'Vast', 'Vegetarian', 'Verbal', 'Verdant', 'Versatile', 'Vertical', 'Very', 'Viable', 'Vibrant', 'Vicious', 'Victorious', 'Vigorous', 'Violent', 'Virtual', 'Visible', 'Visual', 'Vital', 'Vivid', 'Vocal', 'Vocational', 'Void', 'Voluntary', 'Vulnerable', 'Warm', 'Wasteful', 'Watchful', 'Watery', 'Weak', 'Wealthy', 'Weary', 'Weekly', 'Weird', 'Welcome', 'Well', 'Western', 'Wet', 'White', 'Whole', 'Wicked', 'Wide', 'Widespread', 'Wild', 'Willing', 'Wise', 'Witty', 'Wonderful', 'Wooden', 'Woolen', 'Working', 'Worried', 'Worthwhile', 'Worthy', 'Wounded', 'Written', 'Wrong', 'Yellow', 'Young', 'Youthful', 'Zealous'],
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

// Building associations - verbs and nouns associated with each place
const BUILDING_ASSOCIATIONS = {
    'Bank': {
        nouns: ['Money', 'Account', 'Loan', 'Deposit', 'Teller', 'Vault', 'ATM', 'Check'],
        verbs: ['Deposit', 'Withdraw', 'Save', 'Borrow', 'Invest', 'Transfer', 'Count']
    },
    'Bathroom': {
        nouns: ['Sink', 'Mirror', 'Towel','shampoo', 'conditioner', 'lotion', 'Shower', 'Toilet', 'Soap', 'Toothbrush', 'Toothpaste'],
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
        nouns: ['Mayor', 'Meeting', 'Document', 'Certificate', 'Office', 'Council', 'Law', 'Record'],
        verbs: ['Govern', 'argue','Meet', 'Decide', 'Vote', 'Register', 'Apply', 'Attend']
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

class TimeFrame {
    constructor(type) {
        this.type = type; // 'past', 'present', 'future'
        this.colors = this.getColors();
    }

    getColors() {
        switch (this.type) {
            case 'past':
                return {
                    sky: '#3d2817',      // Dark sepia/brown
                    floor: '#5c4033',    // Sepia brown
                    grid: '#8b6f47',     // Light sepia
                    name: 'PAST'
                };
            case 'present':
                return {
                    sky: '#0d0d20',      // Original dark blue
                    floor: '#2a2a2a',    // Original gray
                    grid: '#4a90e2',     // Original blue
                    name: 'PRESENT'
                };
            case 'future':
                return {
                    sky: '#0a1628',      // Deep blue
                    floor: '#1a2f4a',    // Blue-gray
                    grid: '#00ffff',     // Cyan/neon
                    name: 'FUTURE'
                };
            default:
                return this.getColors.call({ type: 'present' });
        }
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
        const types = ['verbs', 'nouns', 'adjectives', 'days', 'months'];
        return types[Math.floor(Math.random() * types.length)];
    }

    getRandomWord(type) {
        const difficulty = this.game.difficulty || 'A1';
        const timeFrame = this.game.currentTimeFrame || 'present';
        return this.game.wordPool.getWord(difficulty, type, timeFrame);
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

class Building {
    constructor(game, z, side, name) {
        this.game = game;
        this.z = z; // Distance along the road
        this.side = side; // 'left' or 'right'
        this.name = name;
        
        // Get associated verbs and nouns for this building
        this.associations = BUILDING_ASSOCIATIONS[name] || { nouns: [], verbs: [] };
        
        // Building dimensions
        this.width = 200 + Math.random() * 150; // 200-350 units wide
        this.height = 300 + Math.random() * 200; // 300-500 units tall
        
        this.markedForDeletion = false;
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

        // Position buildings on the sides of the road
        // Use wider spacing than words to place them off the road
        const roadWidth = 500; // Width of the road
        const buildingOffset = roadWidth / 2 + 100; // Distance from center to building
        
        const worldX = this.side === 'left' ? -buildingOffset : buildingOffset;
        const worldY = 0; // Buildings sit on the ground

        const screenX = vpX + (worldX * scale);
        const baseY = vpY + (cameraHeight * scale);
        const screenY = baseY - (this.height * scale);
        const screenWidth = this.width * scale;
        const screenHeight = this.height * scale;

        // Don't draw if off screen
        if (screenX + screenWidth < 0 || screenX > this.game.width) return;
        if (screenY + screenHeight < 0 || baseY > this.game.height) return;

        // Draw building with distinct colors
        // Use a variety of building colors for visual interest
        const buildingColors = [
            { fill: '#8B4513', stroke: '#654321' },  // Brown
            { fill: '#708090', stroke: '#556B2F' },  // Slate gray
            { fill: '#4682B4', stroke: '#2F4F4F' }, // Steel blue
            { fill: '#CD853F', stroke: '#8B7355' }, // Peru
            { fill: '#696969', stroke: '#2F2F2F' },  // Dim gray
            { fill: '#778899', stroke: '#4F4F4F' }   // Light slate gray
        ];
        const buildingColor = buildingColors[Math.floor(this.name.length % buildingColors.length)];
        
        ctx.fillStyle = buildingColor.fill;
        ctx.globalAlpha = 0.8;
        ctx.fillRect(screenX, screenY, screenWidth, screenHeight);
        
        // Draw building outline
        ctx.strokeStyle = buildingColor.stroke;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 1;
        ctx.strokeRect(screenX, screenY, screenWidth, screenHeight);

        // Draw text inside the building frame
        const nameFontSize = Math.max(10, Math.min(20, 24 * scale));
        const assocFontSize = Math.max(8, Math.min(14, 16 * scale));
        
        // Prepare text
        const nounsText = 'NOUNS: ' + this.associations.nouns.slice(0, 3).join(', ');
        const verbsText = 'VERBS: ' + this.associations.verbs.slice(0, 3).join(', ');
        
        // Calculate total text height
        const totalTextHeight = nameFontSize + assocFontSize * 2 + 8; // Name + 2 lines + spacing
        const textStartY = screenY + (screenHeight - totalTextHeight) / 2; // Center vertically
        
        // Add semi-transparent overlay for text readability
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(screenX + 4, textStartY - 4, screenWidth - 8, totalTextHeight + 8);
        
        // Building name - bold white, centered
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${nameFontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(this.name, screenX + screenWidth / 2, textStartY);
        
        // Associations text - smaller, lighter color
        ctx.fillStyle = '#e0e0e0';
        ctx.font = `${assocFontSize}px Arial`;
        let currentY = textStartY + nameFontSize + 4;
        ctx.fillText(nounsText, screenX + screenWidth / 2, currentY);
        currentY += assocFontSize + 2;
        ctx.fillText(verbsText, screenX + screenWidth / 2, currentY);
        
        // Reset alpha
        ctx.globalAlpha = 1;
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

        // Time Frame System
        this.blockLength = 1000; // Distance units per time frame
        this.timeFrames = ['past', 'present', 'future'];
        this.currentTimeFrameIndex = 1; // Start with 'present'
        this.currentTimeFrame = this.timeFrames[this.currentTimeFrameIndex];
        this.timeFrame = new TimeFrame(this.currentTimeFrame);
        this.nextBlockDistance = this.blockLength;

        this.wordPool = new WordPool();
        this.player = new Player(this);
        this.input = [];

        this.words = [];
        this.wordTimer = 0;
        this.wordInterval = 2000;

        this.buildings = [];
        this.buildingTimer = 0;
        this.buildingInterval = 1500; // Spawn buildings more frequently than words

        // Building names pool - shuffled and used one at a time
        this.buildingNames = [
            'Bank',
            'Bathroom',
            'Bedroom',
            'Bookstore',
            'Burger Place',
            'Chinese Restaurant',
            'City Hall',
            'Coffee Shop',
            'Doctor\'s Office',
            'Elevator',
            'Fire Station',
            'Friend\'s Place',
            'Gas Station',
            'Grocery Store',
            'Gym',
            'Hair Salon',
            'Hallway',
            'Hardware Store',
            'Hospital',
            'Hotel',
            'Hotel Lobby',
            'Hotel Spa',
            'Kindergarten',
            'Kids Club',
            'Kitchen',
            'Library',
            'Living Room',
            'Museum',
            'Park',
            'Parent\'s Place',
            'Pharmacy',
            'Playground',
            'Pizza Place',
            'Police Station',
            'Post Office',
            'Restaurant',
            'School',
            'Theater',
            'Train Station'
        ];
        this.buildingNamePool = [];
        this.initializeBuildingNamePool();

        this.score = {
            verbs: 0,
            nouns: 0,
            adjectives: 0,
            days: 0,
            months: 0
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
        this.updateTimeFrameDisplay();
    }

    initializeBuildingNamePool() {
        // Create a shuffled copy of building names
        this.buildingNamePool = [...this.buildingNames];
        this.shuffleArray(this.buildingNamePool);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    getNextBuildingName() {
        // If pool is empty, reshuffle and refill
        if (this.buildingNamePool.length === 0) {
            this.initializeBuildingNamePool();
        }
        // Return and remove the first name from the pool
        return this.buildingNamePool.shift();
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
        this.score = { verbs: 0, nouns: 0, adjectives: 0, days: 0, months: 0 };
        this.distance = 0;
        this.words = [];
        this.buildings = [];
        this.wordPool.reset();
        this.initializeBuildingNamePool(); // Reset building name pool
        this.currentTimeFrameIndex = 1;
        this.currentTimeFrame = 'present';
        this.timeFrame = new TimeFrame(this.currentTimeFrame);
        this.nextBlockDistance = this.blockLength;
        this.player.x = this.width / 2 - this.player.width / 2;
        this.updateScoreDisplay();
        this.updateTimeFrameDisplay();
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
        document.getElementById('day-count').textContent = this.score.days;
        document.getElementById('month-count').textContent = this.score.months;
    }

    updateTimeFrame() {
        // Check if we've traveled far enough to switch time frames
        if (this.distance >= this.nextBlockDistance) {
            // Cycle to next time frame
            this.currentTimeFrameIndex = (this.currentTimeFrameIndex + 1) % this.timeFrames.length;
            this.currentTimeFrame = this.timeFrames[this.currentTimeFrameIndex];
            this.timeFrame = new TimeFrame(this.currentTimeFrame);
            this.nextBlockDistance += this.blockLength;
            this.updateTimeFrameDisplay();
        }
    }

    updateTimeFrameDisplay() {
        const timeFrameLabel = document.getElementById('time-frame-label');
        if (timeFrameLabel) {
            timeFrameLabel.textContent = this.timeFrame.colors.name;
            // Update CSS class for styling
            timeFrameLabel.className = this.currentTimeFrame;
        }
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

        // Update time frame based on distance
        this.updateTimeFrame();

        this.wordTimer += deltaTime;
        if (this.wordTimer > this.wordInterval) {
            this.words.push(new Word(this));
            this.wordTimer = 0;
        }

        // Spawn buildings
        this.buildingTimer += deltaTime;
        if (this.buildingTimer > this.buildingInterval) {
            // Spawn buildings on both sides, staggered
            const spawnZ = 2000;
            const side = Math.random() > 0.5 ? 'left' : 'right';
            const buildingName = this.getNextBuildingName();
            this.buildings.push(new Building(this, spawnZ, side, buildingName));
            
            // Sometimes spawn on both sides
            if (Math.random() > 0.6) {
                const otherSide = side === 'left' ? 'right' : 'left';
                const otherBuildingName = this.getNextBuildingName();
                this.buildings.push(new Building(this, spawnZ + 200, otherSide, otherBuildingName));
            }
            
            this.buildingTimer = 0;
        }

        this.words.forEach(word => word.update(deltaTime));
        this.words = this.words.filter(word => !word.markedForDeletion);

        this.buildings.forEach(building => building.update(deltaTime));
        this.buildings = this.buildings.filter(building => !building.markedForDeletion);

        this.player.update(deltaTime, this.input);

        this.checkCollisions();
    }

    draw() {
        this.ctx.fillStyle = '#1a1a1a';
        this.ctx.fillRect(0, 0, this.width, this.height);

        const horizonY = this.height * 0.4;

        // Fixed cityscape colors (always use present colors)
        const skyColor = '#0d0d20';      // Dark blue
        const floorColor = '#2a2a2a';    // Gray
        const gridColor = '#4a90e2';     // Blue

        this.ctx.fillStyle = skyColor;
        this.ctx.fillRect(0, 0, this.width, horizonY);

        this.ctx.fillStyle = floorColor;
        this.ctx.fillRect(0, horizonY, this.width, this.height - horizonY);

        this.ctx.strokeStyle = gridColor;
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

        // Draw buildings and words sorted by depth
        const allObjects = [...this.buildings, ...this.words];
        allObjects.sort((a, b) => b.z - a.z);
        allObjects.forEach(obj => obj.draw(this.ctx));

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
