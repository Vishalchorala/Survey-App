import React from 'react'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className="text-center bg-[#213555] text-white p-4">
                <p className='font-semibold'> <FaCopyright className='inline mb-1 mr-1' />2025 Survey App. All rights reserved.</p>
            </footer>

        </>
    )
}

export default Footer