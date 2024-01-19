import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Page2 = () =>{

    const { state } = useLocation();
    console.log(state)
    const { count } = state;
    const backgroundColor = count % 2 === 0 ? 'blue' : 'red';
    console.log(backgroundColor);
    const handleClick= ()=>{

    }
    return  (
    <>
    Count:{count}
    <p>backgroundColor:{backgroundColor}</p>
    <button onclick={handleClick}>PAge2</button>
    </>
    );
}