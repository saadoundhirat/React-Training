import './App.css';
import { PassProps } from './components/PassProps'
function App() {
  const userList = [
    {
      firstName: 'saadoun',
      lastName: 'dhirat'
    }, {

      firstName: 'ahmad',
      lastName: 'dhirat'
    },{
      firstName: 'khaled',
      lastName: 'dhirat'
    }
  ]
  return (
    <div className="App">
      <h1> using typeScript with react </h1>
      <PassProps name="saadoun" usersList={userList}/>
    </div>
  );
}

export default App;
