import React, { useRef, useEffect } from 'react';
export const useCountRender = () => {
    const  renders = useRef(0)

    useEffect(() => {
        console.log("render time:", renders.current++ )
    }, [])
}