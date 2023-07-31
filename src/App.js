import React, {useState} from 'react'   // importing or defining useState
import logo from './logo.svg';
import './App.css';

// F U N C T I O N A L   C O M P O N E N T 
function App() {
  // Initilizing the value of state to be zero
   // You can initilize useState with "" or '' or 0
  //  Remember that state isn non-persistent meaning if u refresh the page state disappears
  
  // declaring count variable using useState  
  // using [] ES6 destructuring
  const [count, setCount] = useState(0);    //count is the current state AND setCount-setter is the function that updates count
  // const [age, setAge] = useState(27)    // example
  

  // to modify the count value 
  const increment = () => {
    setCount(count + 1)
  }; 

  const decrement = () => {
    setCount(count -1)
  };

  return (
    <div className="App">
      
      <h1>My counter App</h1>
      {/* value that updates each time button is clicked  {count}*/}
      <p>The count is: {count}</p>        
      <button onClick ={increment}>+</button>
      <button onClick ={decrement}>-</button>
      <button>RESET</button>
       
    </div>
  );
}

export default App;
