import React, { useContext } from 'react'
import { ThemeContextProvider } from './ThemeContext';

interface UseThemeComProps {

}

export const UseThemeComp: React.FC<UseThemeComProps> = ({}) => {
        const theme = useContext(ThemeContextProvider)
        return (
                <>
                <h2 style={{color: "theme.primary.text"}}> the text is using theme </h2>
                </>
        );
}