import React, { useState } from 'react';
import './Room.css'

function Room() {

    //const state = useState(true);
    //console.log("State = ",state);
    let [isLit, setLit] = useState(false);
    let [age , setAge] = useState(24);
    let [temp , setTemp] = useState(22);
    
    //let hello = 'Hello '+ isLit +'World';
    //let hello = `Hello ${isLit} World`;

    return (
    <div className={`room ${isLit? "lit": "dark"}`}> 
        This Room is {isLit? "lit": "dark"}
        <br/>
        Age: {age}
        <br/>
        <button onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setAge(++age);
                        }}>
            Increase Age
        </button>
        <br/>
        <button onClick={()=> setLit(!isLit) } >Toggle Light</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <button onClick={()=> setLit(true) } >Light On</button>
        <button onClick={()=> setLit(false) } >Light Off</button>
        <br/>
        Light is {isLit ? "On" : "Off"}
        <br/>
        Temperature: {temp} °C
        <br/>
   
        <button onClick={ ()=> {
                        console.log("Increase Temperature");
                        setTemp(++temp);
                        }}>
            Increase Temperature
        </button>
        <button onClick={ ()=> {
                        console.log("Decrease Temperature");
                        setTemp(--temp);
                        }}>
            Decrease Temperature
        </button>
    </div>
    );
}

export default Room;
