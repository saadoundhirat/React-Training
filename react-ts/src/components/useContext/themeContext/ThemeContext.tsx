import React, { FC, createContext } from 'react'
import {theme} from './theme'

export const ThemeContextProvider = createContext(theme)

interface Props {
    children: React.ReactNode
}
export const ThemeContext: FC<Props> = ({children}) => {
    return (
        <ThemeContextProvider.Provider  value={theme}>
            {children}           
        </ThemeContextProvider.Provider>    
    )
}


