import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img from '../assets/hero_bg.jpg' // Ensure the path is correct

const Home = () => {
    return (
        <section
            className="text-center min-h-[663px] flex flex-col justify-center items-center text-white 
            bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${img})` }} // Adding the background image inline
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 p-10 rounded-2xl py-20 border  bg-white/1 backdrop-blur-lg shadow-2xs">
                <h1 className="text-5xl font-bold mb-6 font-poppins">
                    Welcome to the
                    <b className="text-[#041c3c]"> Survey </b>
                    App
                </h1>
                <p className="text-lg mb-6 font-poppins">
                    Participate in our survey and help us gather valuable insights.
                    <br />Click below to get started.
                </p>
                <Link to="survey" className="bg-[#213555] hover:bg-[#1d2532] text-white font-bold rounded-lg shadow-lg px-7 py-3 text-lg transition-all duration-300">
                    Start Survey
                    <FaArrowRight className="inline ml-3" size={20} />
                </Link>
            </div>
        </section>
    )
}

export default Home;
