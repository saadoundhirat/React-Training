import React, { useState, useCallback } from 'react'
import { Square } from './Square'

export const UseCallback = () => {
    const fav = [5, 10, 15]

    const [num, setNum] = useState(0) 

    const increment = useCallback(num =>{
        setNum(n => n + num)
    }, [setNum])
    
    
    return (
        <div>
            <h1>{ num }</h1>
            {
                fav.map(number => {
                    return (
                        <Square key={number} increment={increment} num={number} />
                    );
                })
            }                                    
        </div>
    )
}


