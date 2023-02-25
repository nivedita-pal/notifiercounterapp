import React, { useState } from 'react';
import { Button, Label } from 'semantic-ui-react';
import "./Components/CounterSemanticUI.css"

function Counter() {
    const [count, setCount] = useState(0);    
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

    let socialcount = 0;
    const social = () =>{
        if(socialcount % 5 === 0 || socialcount === 0){
            
        }
        socialcount +=1;
    }
    console.clear()

  return (
    
        <div className='obj'>
            <Label className='Count'size="huge">Count </Label>
            <Label className='CountNumber'size="huge">{count}</Label>
            <Button.Group>
                <Button className="Increment" onClick={Increment}> Increment </Button>
                <Button className={buttonClass} onClick={Decrement}>Decrement </Button>
            </Button.Group>
            <p>  Done by Nivedita Pal
            </p>
        
        <p onMouseOver={social} className='main'>  <span>  </span></p>
</div>
  );    
}

export default Counter;