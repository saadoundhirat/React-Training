import React, { FC, useState } from 'react'
import './App.css';
import { AdvancedPropsType } from './components/AdvancedPropsType';
import { PassProps } from './components/PassProps'
// import { UseReducer } from './components/useReducer/UseReducer'
const styles = {
  border: "8px solid red"
}


//  we can use type our interface to define the types (with libraries use interface with applications use type )
interface IUser {
  name: string,
  age: number
}


type User = {
  name: string,
  age: number
}

const App: FC = () => {
  
  const [count, setCount] = useState(0)
  // const [count, setCount] = useState<User | null>(0)  // to define future types for the state init value (here we have to use ? when we use the state value cuz it can be null => if the state value is not null then use the its values)
  // const [count, setCount] = useState<User>({} as User)  // to define future types for the state init value if we know the value will be declared at the component render and it value will not be changed in the future. This Called <Type assertion>
   
  const userList = [
    {
      firstName: 'saadoun',
      lastName: 'dhirat'
    }, {

      firstName: 'ahmad',
      lastName: 'dhirat'
    }, {
      firstName: 'khaled',
      lastName: 'dhirat'
    }
  ]
  return (
    <div className="App">
      <h1> using typeScript with react </h1>
      {/* <PassProps name="saadoun" usersList={userList}/> */}
      
      {/* use useState with ts */}
      {/* <AdvancedPropsType styles={styles} name="saadoun" age={15} count={count} incrementCount={setCount} /> */}
      
      {/* use useReducer with ts */}
      {/* <UseReducer /> */}
    </div>
  );
}

export default App;
