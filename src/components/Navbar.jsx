import React from 'react'
import { FcSurvey } from 'react-icons/fc'
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className='bg-[#213555] text-white'>
                <nav className='max-w-[1200px] mx-auto'>
                    <div className='flex justify-between p-3 '>
                        <Link to="/" className='text-2xl font-bold border-l-3 rounded-t-xl px-2'>Survey App.</Link>
                        <div className='flex gap-10 '>
                            <Link to="/" className='font-semibold text-lg hover:text-neutral-300 transition duration-200'>
                                <IoHome className='inline mr-1 mb-1' size={20} />
                                Home</Link>
                            <Link to="/survey" className='font-semibold text-lg hover:text-neutral-300 transition duration-200'>
                                <FcSurvey className='inline mr-1' size={23} />
                                Survey</Link>
                            {/* <Link to="/results" className='font-semibold'>Result</Link>      */}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar