import React, { FC, createContext } from 'react'
import {theme} from './theme'

export const ThemeContext = createContext(theme)

type Props = {
    children: React.ReactNode
}
export const ThemeContextProvider: FC<Props> = ({children}) => {
    return (
        <ThemeContext.Provider  value={theme}>
            {children}           
        </ThemeContext.Provider>    
    )
}


