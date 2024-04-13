import React, {useState} from "react";

function Counter()
{

   const [count, setCount] = useState(0);

   const Increment = () => {
     setCount(count + 1);
   }

   const Decrement = () => {
    setCount(count - 1);
  }

  const Reset = () => {
    setCount(0);
  }
   
    return(
        <div className="counter-container">
            <p className="display">{count}</p>
            <button className="btn" onClick={Increment}>Increment</button>
            <button className="btn" onClick={Reset}>Reset</button>
            <button className="btn" onClick={Decrement}>Decrement</button>
         
        </div>);
}

export default Counter;