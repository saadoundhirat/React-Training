import React, { useRef, useEffect, createElement } from 'react'

export const DomRef: React.FC = () => {
    // if we know that the reference value will never be null after the use effect then we can use notnull assertion to use current without using value checking (?)
    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null!) // example
    useEffect(() => {
        inputRef.current?.focus(); 
    }, [])
    return (
        <>
            <label> useRef with TS </label>
            <input ref={inputRef} type="text" id= "input"/>
            <div ref={divRef} >hello</div>
        </>
    );
} 