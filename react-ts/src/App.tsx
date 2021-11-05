import { FC } from 'react'
import './App.css';
import { DomRef } from './components/useRef/DomRef'
import { MutableRef } from './components/useRef/MutableRef';

const App: FC = () => {
  return (
    <div className="App">
      <DomRef />
      <MutableRef />
    </div>
  );
}

export default App;
