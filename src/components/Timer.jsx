import React from 'react'

const Timer = ({ timeLeft }) => {
    return (
        <>
            <div className="mt-4 text-sm font-semibold">Time left: {timeLeft}s</div>
        </>
    )
}

export default Timer