import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContextProvider';



export const UseThemeComp: React.FC = () => {
        const theme = useContext(ThemeContext)
        return (
                <>
                        <h2 style={{ backgroundColor: theme.secondary.text }}> the text is using the provided theme </h2>
                </>
        );
}