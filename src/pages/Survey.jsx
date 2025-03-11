import React, { useEffect, useState } from 'react'
import QuestionCard from '../components/QuestionCard';
import { questions } from "../data/questions";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { MdArrowRight } from 'react-icons/md';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { GiConfirmed } from 'react-icons/gi';
import Timer from '../components/Timer';


const Survey = ({ setResponses }) => {

  const Navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const nextQuestion = () => {
    if (!answers[questions[currentQuestion].id]) {
      toast.error("Please fill in an answer before proceeding.", {
        autoClose: 2000,
        className: "text-start mt-12"
      });
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
  };


  const prevQuestion = () => {
    setCurrentQuestion((prev) => prev - 1)
  }



  const handleSubmit = () => {
    toast.success("Survey Submitted Successfully.", {
      className: "text-start mt-12",
      autoClose: 2000
    });

    setResponses(answers);

    setTimeout(() => {
      Navigate("/results"); // Use navigate correctly
    }, 1000); // Delay navigation so the toast is visible
  };


  return (
    <section className='text-center min-h-[663px] flex flex-col justify-center items-center text-white
    bg-gradient-to-r  from-[#84a2d2] to-[#1d4171] '>
      <ToastContainer />
      <div className="bg-white text-black rounded-2xl shadow-lg p-8 max-w-lg w-full text-center transition diration-1000">
        {/* <h1 className="text-2xl mb-8 font-bold text-[#1d4171]">Survey Form</h1> */}

        <QuestionCard
          key={questions[currentQuestion].id}
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
          answers={answers}
        />

        <div className='flex justify-between mt-6 transition diration-1000  '>
          {currentQuestion > 0 && (
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg cursor-pointer"
              onClick={prevQuestion}
            >
              <SlArrowLeft className='inline mb-1 mr-2' size={12} />
              Back
            </button>
          )}
          <button
            className="bg-[#213555] hover:bg-[#1d2532] text-white font-bold py-2 px-6 rounded-lg shadow-lg ml-auto cursor-pointer"
            onClick={
              currentQuestion < questions.length - 1
                ? nextQuestion
                : handleSubmit
            }
          >
            {currentQuestion < questions.length - 1 ? "Next " : "Submit"}

            {currentQuestion < questions.length - 1 ? (
              <SlArrowRight className="inline ml-1" size={13} />
            ) : (
              <GiConfirmed className="inline ml-2" size={18} />
            )}
          </button>
        </div>
        <Timer timeLeft={timeLeft} />
      </div>

    </section>
  )
}

export default Survey;