import { FC } from 'react'
import './App.css';
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'

const App: FC = () => {
  return (
    <div className="App">
      <Private isloggedin={true} component={Profile} />
    </div>
  );
}

export default App;
