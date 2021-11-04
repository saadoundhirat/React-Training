import { FC, useState } from 'react'
import './App.css';
import { UseThemeComp } from './components/useContext/themeContext/UseThemeComp';
import { ThemeContextProvider } from './components/useContext/themeContext/ThemeContextProvider';

const App: FC = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <UseThemeComp />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
