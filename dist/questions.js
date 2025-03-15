const QUESTIONS = [
    {
        message: "Which country has the highest life expectancy?",
        choices: ["Japan", "Switzerland", "Hong Kong", "Austria"],
        correctAnswer: "Hong Kong",
    },
    {
        message: "What is the most common surname in the United States?",
        choices: ["Johnson", "Williams", "Brown", "Smith"],
        correctAnswer: "Smith",
    },
    {
        message: "Who was the Ancient Greek God of the Sun?",
        choices: ["Zeus", "Apollo", "Hermes", "Poseidon"],
        correctAnswer: "Apollo",
    },
    {
        message: "How many minutes are in a full week?",
        choices: ["9,600", "9,880", "10,080", "10,200"],
        correctAnswer: "10,080",
    },
    {
        message: "Aureolin is a shade of what color?",
        choices: ["Blue", "Green", "Yellow", "Red"],
        correctAnswer: "Yellow",
    },
    {
        message: "How many faces does a Dodecahedron have?",
        choices: ["10", "8", "14", "12"],
        correctAnswer: "12",
    },
    {
        message: "What is the 4th letter of the Greek alphabet?",
        choices: ["Gamma", "Beta", "Delta", "Theta"],
        correctAnswer: "Delta",
    },
    {
        message: 'What company was initially known as "Blue Ribbon Sports"?',
        choices: ["Adidas", "Nike", "Puma", "Reebok"],
        correctAnswer: "Nike",
    },
    {
        message: 'What art form is described as "decorative handwriting or handwritten lettering"?',
        choices: ["Typography", "Calligraphy", "Graffiti", "Lettering"],
        correctAnswer: "Calligraphy",
    },
    {
        message: "What software company is headquartered in Redmond, Washington?",
        choices: ["Apple", "Google", "IBM", "Microsoft"],
        correctAnswer: "Microsoft",
    },
    {
        message: "How many dots appear on a pair of dice?",
        choices: ["36", "38", "40", "42"],
        correctAnswer: "42",
    },
    {
        message: "What is acrophobia a fear of?",
        choices: ["Water", "Heights", "Spiders", "Darkness"],
        correctAnswer: "Heights",
    },
    {
        message: "December 26 is known by what names in Ireland?",
        choices: [
            "Boxing Day",
            "Saint Stephen's Day",
            "New Year's Eve",
            "Epiphany",
        ],
        correctAnswer: "Saint Stephen's Day",
    },
    {
        message: "What phone company produced the 3310?",
        choices: ["Samsung", "Motorola", "Nokia", "Sony Ericsson"],
        correctAnswer: "Nokia",
    },
    {
        message: "What is the world’s largest retailer?",
        choices: ["Amazon", "Walmart", "Costco", "Target"],
        correctAnswer: "Walmart",
    },
    {
        message: "Which day of the week does the Jewish Sabbath begin?",
        choices: ["Saturday", "Sunday", "Friday", "Thursday"],
        correctAnswer: "Friday",
    },
    {
        message: "What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?",
        choices: ["Anagram", "Palindrome", "Metaphor", "Oxymoron"],
        correctAnswer: "Palindrome",
    },
    {
        message: "What is the name of the Chinese philosophical system that emphasizes harmony with nature?",
        choices: ["Confucianism", "Taoism", "Buddhism", "Shinto"],
        correctAnswer: "Taoism",
    },
];
export const questions = () => {
    const questions = [];
    for (let i = 0; i < 10; i++) {
        questions.push(QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]);
    }
    return questions;
};
