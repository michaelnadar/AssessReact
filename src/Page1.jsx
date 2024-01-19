import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export const Page1 =() =>{
    const history = useNavigate();
    const [count,setCount] = useState(0);


    useEffect(() => {
        // This effect will run when the component mounts or when it returns from Page2
        const storedState = localStorage.getItem('page1State');
        console.log(storedState)
        if (storedState) {
            setCount(JSON.parse(storedState));
        }
      }, []); // The empty dependency array ensures the effect runs only on mount and unmount
    
     
    const handleIncrement = (e) =>{
        e.preventDefault();
        const increase = count + 1;
        setCount(increase);
        localStorage.setItem('page1State',JSON.stringify(count));
       
    }
    const handleDecrement = (e) =>{
        e.preventDefault();
        const decrease = count -1;
        setCount(decrease);
        localStorage.setItem('page1State',JSON.stringify(count));

    }
    const handleClick =(e) =>{
        e.preventDefault();
        history('/page2',{state:{count:count}});
    }
    
    return(
        <>
        <div style={{
             backgroundColor: count % 2 === 0 ? 'blue' : 'red',
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}> 
        {count}
        <button  onClick={handleIncrement}>+</button>
        <button  onClick={handleDecrement}>-</button>
        <button onClick={handleClick}> Page2</button>
        </div>
        </>
    )
}