import React from 'react'
import { questions } from '../data/questions';
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowPathRoundedSquare } from 'react-icons/hi2';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
);

const Results = ({ responses }) => {
    const navigate = useNavigate();

    const labels = questions.map((q) => q.question);
    const values = questions.map((q) => (responses[q.id] ? 1 : 0));

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: "Responses",
                data: values,
                backgroundColor: [
                    "#FFBB28",
                    "#FF8042",
                    "#00C49F",
                    "#0088FE",
                    "#FF6384",
                ],
            },
        ],
    };

    return (
        <>
            <section className='text-center min-h-[663px] flex flex-col justify-center items-center text-white
            bg-gradient-to-r from-[#1d4171] to-[#84a2d2] transition duration-1000 py-15'
            >
                <div className='bg-white text-black rounded-2xl shadow-lg p-8 max-w-3xl w-full text-center'>
                    <h2 className="text-3xl font-bold mb-6 text-[#041c3c]">
                        Survey Results :
                    </h2>

                    <div className='space-y-4'>
                        {
                            questions.map((que) => (
                                <div
                                    key={que.id}
                                    className="p-6 border border-gray-200 rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <h3 className="font-semibold text-gray-800 mb-2">
                                        {que.question}
                                    </h3>

                                    <p className="text-gray-600 bg-gray-100 p-3 rounded-lg mt-2 text-sm">
                                        <span className="font-medium text-gray-700">Response:</span> {responses[que.id] || "No response"}
                                    </p>
                                </div>

                            ))
                        }
                    </div>

                    <div className="mt-10 p-6 bg-green-100 text-green-800 font-semibold rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold">Thank You for Completing the Survey!</h3>
                        <p className="text-lg mt-2 font-bold">Your feedback is valuable to us.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 mt-6 w-full">
                        <div className="w-1/2">
                            <h3 className="text-lg font-extrabold mb-2">Pie Chart</h3>
                            <Pie data={chartData} />
                        </div>
                        <div className="w-1/2">
                            <h3 className="text-lg font-semibold mb-2">Bar Chart</h3>
                            <Bar data={chartData} />
                        </div>
                    </div>

                    <button
                        className="mt-6 bg-[#213555] hover:bg-[#1d2532] text-white font-bold py-2 px-8 rounded-lg shadow-lg cursor-pointer text-xl"
                        onClick={() => navigate("/")}
                    >
                        Retake Survey
                        <HiOutlineArrowPathRoundedSquare className='inline mb-1 ml-2' size={22} />
                    </button>
                </div>
            </section>
        </>
    )
}

export default Results;