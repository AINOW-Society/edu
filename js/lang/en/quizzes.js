var QUIZ_DATA = {
    intro: [
        {
            id: 'Q-001',
            type: 'mcq',
            question: 'What is the primary goal of AI literacy according to this guide?',
            options: [
                'Everyone to become programmers',
                'Understanding how AI works and critical thinking',
                'Total replacement of human labor with AI',
                'Using AI for entertainment only'
            ],
            answer: 1
        },
        {
            id: 'Q-002',
            type: 'open',
            question: 'Why is ethics important when using artificial intelligence in school?'
        },
        {
            id: 'Q-015',
            type: 'mcq',
            question: 'What does the acronym "AI" stand for?',
            options: [
                'Advanced Instruction',
                'Actual Intelligence',
                'Artificial Intelligence',
                'Automated Interface'
            ],
            answer: 2
        },
        {
            id: 'Q-016',
            type: 'mcq',
            question: 'Which type of learning is the basis for modern AI systems?',
            options: [
                'Mechanical Learning',
                'Machine Learning',
                'Biological Learning',
                'Mathematical Reading'
            ],
            answer: 1
        },
        {
            id: 'Q-017',
            type: 'open',
            question: 'Give an example of an everyday AI use case that you personlly use.'
        }
    ],
    literacy: [
        {
            id: 'Q-003',
            type: 'mcq',
            question: 'What is one of the biggest risks for young people using AI without guidance?',
            options: [
                'Learning new skills too fast',
                'Accepting AI "hallucinations" as accurate facts',
                'Reduced screen time',
                'Over-socializing with peers'
            ],
            answer: 1
        },
        {
            id: 'Q-004',
            type: 'mcq',
            question: 'What does critical evaluation of AI responses imply?',
            options: [
                'Blindly believing every generated text',
                'Fact-checking and recognizing bias',
                'Copying answers directly into a report',
                'Ignoring AI as a tool'
            ],
            answer: 1
        },
        {
            id: 'Q-018',
            type: 'mcq',
            question: 'What is a "Filter Bubble"?',
            options: [
                'An anti-virus cleaning program',
                'User isolation in their own beliefs via algorithms',
                'A special effect in video games',
                'A method for faster image search'
            ],
            answer: 1
        },
        {
            id: 'Q-019',
            type: 'mcq',
            question: 'Why is it dangerous to input personal data into chatbots?',
            options: [
                'Data can be used for training or become public',
                'The AI will stop working',
                'The computer will restart',
                'It is not dangerous, data is always 100% private'
            ],
            answer: 0
        },
        {
            id: 'Q-020',
            type: 'open',
            question: 'Write 3 questions you should ask yourself before believing an AI answer.'
        }
    ],
    definition: [
        {
            id: 'Q-005',
            type: 'mcq',
            question: 'How is AI fundamentally different from the human mind?',
            options: [
                'It has emotions and intuition',
                'It uses massive mathematical calculations and patterns',
                'It is a biological system',
                'There is no difference'
            ],
            answer: 1
        },
        {
            id: 'Q-006',
            type: 'mcq',
            question: 'What does the "Turing Test" represent?',
            options: [
                'A test for computer processor speed',
                'A method to check if a machine shows intelligent behavior',
                'A test for robot battery capacity',
                'An anti-virus protection program'
            ],
            answer: 1
        },
        {
            id: 'Q-021',
            type: 'mcq',
            question: 'What is a "Neural Network" in the context of AI?',
            options: [
                'A biological brain in a jar',
                'A computer system inspired by brain structure',
                'An internet connection between two computers',
                'A type of fiber optic cable'
            ],
            answer: 1
        },
        {
            id: 'Q-022',
            type: 'mcq',
            question: 'What does the term "Deep Learning" imply?',
            options: [
                'Learning in deep water',
                'Complex multi-layered neural networks',
                'Reading books in a library',
                'Automatic file saving'
            ],
            answer: 1
        },
        {
            id: 'Q-023',
            type: 'open',
            question: 'Explain the difference between an algorithm and artificial intelligence.'
        }
    ],
    functionality: [
        {
            id: 'Q-007',
            type: 'mcq',
            question: 'What is "Narrow AI"?',
            options: [
                'AI that can perform any human task',
                'AI specialized for a specific task (e.g. chess)',
                'AI that is self-aware',
                'AI that doesn\'t use internet'
            ],
            answer: 1
        },
        {
            id: 'Q-008',
            type: 'mcq',
            question: 'What is "Generative AI"?',
            options: [
                'AI that only collects data',
                'AI that can create new content (text, images, code)',
                'An old version of a calculator',
                'A system for automatic computer shutdown'
            ],
            answer: 1
        },
        {
            id: 'Q-024',
            type: 'mcq',
            question: 'What are "Large Language Models" (LLM)?',
            options: [
                'Weather forecasting models',
                'AI models trained on massive amounts of text',
                'Large speakers for a concert',
                'Translators for foreign languages'
            ],
            answer: 1
        },
        {
            id: 'Q-025',
            type: 'mcq',
            question: 'What is "Data Training"?',
            options: [
                'A gym workout process',
                'A process where AI learns from provided examples',
                'Sorting folders on a computer',
                'Deleting old files'
            ],
            answer: 1
        },
        {
            id: 'Q-026',
            type: 'open',
            question: 'Why do AI models sometimes make mistakes with simple math?'
        }
    ],
    history: [
        {
            id: 'Q-009',
            type: 'mcq',
            question: 'Which year is considered the birth of AI (Dartmouth conference)?',
            options: [
                '1945',
                '1956',
                '1997',
                '2010'
            ],
            answer: 1
        },
        {
            id: 'Q-010',
            type: 'mcq',
            question: 'What do "AI Winters" represent?',
            options: [
                'Periods when AI was used for climatology',
                'Periods of reduced funding and interest in AI research',
                'Seasons when AI systems worked slower',
                'Special programming tournaments'
            ],
            answer: 1
        },
        {
            id: 'Q-027',
            type: 'mcq',
            question: 'Which computer defeated Garry Kasparov in chess in 1997?',
            options: [
                'AlphaGo',
                'Deep Blue',
                'ChatGPT',
                'Siri'
            ],
            answer: 1
        },
        {
            id: 'Q-028',
            type: 'mcq',
            question: 'Who is considered the father of AI and modern computing?',
            options: [
                'Steve Jobs',
                'Alan Turing',
                'Bill Gates',
                'Mark Zuckerberg'
            ],
            answer: 1
        },
        {
            id: 'Q-029',
            type: 'open',
            question: 'Write down one historical event that changed the perception of AI.'
        }
    ],
    prompts: [
        {
            id: 'Q-011',
            type: 'mcq',
            question: 'What does the acronym CPTC stand for in prompt engineering?',
            options: [
                'Context, Persona, Task, Constraints',
                'Computer, Programming, Testing, Coding',
                'Creativity, Power, Technical, Clear',
                'Communication, Protocol, Technology, Center'
            ],
            answer: 0
        },
        {
            id: 'Q-012',
            type: 'open',
            question: 'Explain why it is important to define a "Persona" in a prompt.'
        },
        {
            id: 'Q-030',
            type: 'mcq',
            question: 'What is achieved by adding "Context" to a prompt?',
            options: [
                'AI becomes faster',
                'AI gets more info to give a more relevant answer',
                'AI shuts down faster',
                'Internet traffic is saved'
            ],
            answer: 1
        },
        {
            id: 'Q-031',
            type: 'mcq',
            question: 'What does "Few-Shot Prompting" mean?',
            options: [
                'Writing a prompt with very few words',
                'Giving several examples to AI before asking for the final task',
                'Quickly pressing the Enter key',
                'Deleting the prompt after writing it'
            ],
            answer: 1
        },
        {
            id: 'Q-032',
            type: 'open',
            question: 'Create a prompt using the CPTC structure for a topic of your choice.'
        }
    ],
    agents: [
        {
            id: 'Q-013',
            type: 'mcq',
            question: 'What is the main difference between a regular Chatbot and an AI Agent?',
            options: [
                'The agent only answers questions',
                'The agent can use tools and autonomously execute tasks',
                'The chatbot is much smarter than the agent',
                'There is no difference'
            ],
            answer: 1
        },
        {
            id: 'Q-014',
            type: 'mcq',
            question: 'What does "Memory" mean for AI Agents?',
            options: [
                'How much the application file weighs',
                'Ability to remember past interactions and context',
                'Installed RAM on the server',
                'Ability to delete all data after 5 minutes'
            ],
            answer: 1
        },
        {
            id: 'Q-033',
            type: 'mcq',
            question: 'What is "Reasoning" for AI agents?',
            options: [
                'Ability to use logic to solve complex problems in steps',
                'Ability of the agent to get angry',
                'Searching data on Wikipedia',
                'Automatic grammar correction'
            ],
            answer: 0
        },
        {
            id: 'Q-034',
            type: 'mcq',
            question: 'What does "Planning" represent for AI Agents?',
            options: [
                'Designing furniture',
                'Breaking down a large goal into smaller executable steps',
                'Saving documents in the cloud',
                'Sending e-mails'
            ],
            answer: 1
        },
        {
            id: 'Q-035',
            type: 'open',
            question: 'Describe a situation where an AI Agent would be more useful than a regular search engine.'
        }
    ],
    glossary: [
        {
            id: 'Q-036',
            type: 'mcq',
            question: 'What is an "Algorithm"?',
            options: [
                'A type of computer virus',
                'A specific set of instructions for solving a problem',
                'Name of the first computer',
                'A processor unit'
            ],
            answer: 1
        },
        {
            id: 'Q-037',
            type: 'mcq',
            question: 'What does "Backpropagation" represent?',
            options: [
                'Restoring files from Trash',
                'A method for training neural networks by fixing errors',
                'A type of internet connection',
                'Making disk copies'
            ],
            answer: 1
        },
        {
            id: 'Q-038',
            type: 'open',
            question: 'Define the term "Bias" in AI data.'
        }
    ],
    roadmap: [
        {
            id: 'Q-039',
            type: 'mcq',
            question: 'What is "AGI" (Artificial General Intelligence)?',
            options: [
                'AI that equals or exceeds human intelligence in all areas',
                'A special graphics card',
                'A mobile phone app',
                'Old type of keyboard'
            ],
            answer: 0
        },
        {
            id: 'Q-040',
            type: 'open',
            question: 'How do you think AI will change education in the next 10 years?'
        }
    ]
};
