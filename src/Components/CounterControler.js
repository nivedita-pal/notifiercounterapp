import React, { useState } from 'react';
function CounterControls({ count, setCount }) {
    const [buttonClass, setButtonClass] = useState("primary");
    
    const Decrement = () =>{
        if(count <= 0){
            setCount(0)
            setButtonClass("secondary")   
        }
        else{
            setCount(count - 1)
            setButtonClass("primary")  
        }
    }


    const Increment = () =>{
        setCount(count + 1)
        setButtonClass("primary")  
    }

    return (
        <div className="counter-controls">
            <button onClick={Decrement} className={buttonClass} style={{}}>Decrement -1</button>  
            <button onClick={() => setCount(0)} id="resetYellow">Reset</button>
            <button onClick={Increment}>Increment +1</button>
            
        </div>
    );
}

export default CounterControls;

