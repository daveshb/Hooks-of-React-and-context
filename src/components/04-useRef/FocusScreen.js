import React from 'react'
import { useRef } from 'react';
import '../02-useEffect/effects.css';



export const FocusScreen = () => {


    const inputRef = useRef();
    

    const hanleClick= ()=>{
        inputRef.current.select();
        console.log(inputRef);
    }


  return (
        <>
      <h1>
       FocusScreen
    </h1>
    <hr />
    <input
    ref={inputRef}
    className='form-control'
    placeholder='Su nombre'>
    </input>

    <button
    className='btn btn-outline-primary mt-5'
    onClick={hanleClick}>
        Focus
    </button>



    </>
  )
}
