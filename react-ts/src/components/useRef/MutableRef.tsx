import React, { useState, useRef, useEffect } from 'react'

export const MutableRef: React.FC = () => {
    const [timer, setTimer] = useState(0)

    const intervalRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current)
        }
    }
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return ()=>{
            stopTimer()
        }
    }, [])
    return (
        <div>
            hookTimer is  - {timer}
            <button onClick={()=>stopTimer()}>stop timer</button>
        </div>
    );
}
