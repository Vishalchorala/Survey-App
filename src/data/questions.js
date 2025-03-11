export const questions = [
    {
        id: 1,
        type: "single",
        question: "What is your favorite color?",
        options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
        id: 2,
        type: "multiple",
        question: "Which programming languages do you use?",
        options: ["JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    },

    {
        id: 3,
        type: "text",
        question: "Any additional comments?",
    },
    {
        id: 4,
        type: "dropdown",
        question: "Select your country:",
        options: ["USA", "Canada", "UK", "Australia", "India"],
    },
    {
        id: 5,
        type: "rating",
        question: "Rate your satisfaction (1-5)",
        options: [1, 2, 3, 4, 5],
    },
    {
        id: 6,
        type: "slider",
        question: "How would you rate our service on a scale of 1 to 10?",
        min: 1,
        max: 10,
    },
];
