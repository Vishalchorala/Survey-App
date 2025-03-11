import React from 'react'
import { FaStar } from 'react-icons/fa';

const QuestionCard = ({ question, handleAnswer, answers }) => {
    return (
        <>
            <div className='space-y-4 transition duration-1000'>
                <h2 className="text-2xl font-bold mb-4">{question.question}</h2>

                {
                    question.type === 'single' &&
                    question.options.map((option) => (
                        <label
                            key={option}
                            className="block bg-gray-200 hover:bg-gray-300 text-black rounded-lg p-3 cursor-pointer"
                        >
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option}
                                checked={answers[question.id] === option}
                                className="mr-2"
                                onChange={() => handleAnswer(question.id, option)}
                            />
                            {option}
                        </label>
                    ))
                }
                {
                    question.type === 'multiple' &&
                    question.options.map((option) => (
                        <label
                            key={option}
                            className="block bg-gray-200 hover:bg-gray-300 text-black rounded-lg p-3 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                value={option}
                                checked={(answers[question.id] || []).indexOf(option) > -1}
                                className="mr-2"
                                onChange={(e) => {
                                    const selected = answers[question.id] || [];
                                    handleAnswer(
                                        question.id,
                                        e.target.checked
                                            ? [...selected, option]
                                            : selected.filter((o) => o !== option)
                                    );
                                }}
                            />
                            {option}
                        </label>
                    ))
                }
                {
                    question.type === "text" && (
                        <textarea
                            rows={5}
                            className="w-full p-3 border border-gray-400 rounded-lg shadow-2xl"
                            value={answers[question.id] || ""}
                            onChange={(e) => handleAnswer(question.id, e.target.value)}
                        />
                    )
                }
                {
                    question.type === "dropdown" && (
                        <select
                            className="w-full p-3 border border-gray-400 rounded-lg shadow-2xl transition duration-1000"
                            value={answers[question.id] || ""}
                            onChange={(e) => handleAnswer(question.id, e.target.value)}
                        >
                            <option value="" className='text-gray-700'>Select</option>
                            {question.options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    )
                }
                {
                    question.type === "rating" && (
                        <div className="flex justify-center space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer text-6xl ${answers[question.id] >= star
                                        ? "text-yellow-500"
                                        : "text-gray-300"
                                        }`}
                                    onClick={() => handleAnswer(question.id, star)}
                                />
                            ))}
                        </div>
                    )
                }
                {
                    question.type === "slider" && (
                        <input
                            type="range"
                            min={question.min}
                            max={question.max}
                            value={answers[question.id] || question.min}
                            className="w-full text-[#213555]"
                            onChange={(e) => handleAnswer(question.id, e.target.value)}
                        />
                    )
                }
            </div>
        </>
    )
}

export default QuestionCard;