import { FC } from 'react'
import './App.css';
import { UserContextProvider } from './components/useContext/userContext/UserContextProvider';
import { User } from './components/useContext/userContext/User'
const App: FC = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
